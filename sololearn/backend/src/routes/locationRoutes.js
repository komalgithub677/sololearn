import express from "express";
import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Parser } from "json2csv";
import Location from "../models/Location.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.post("/", async (req, res) => {
  try {
    console.log("📡 Request received with:", req.body);

    let rawIp = req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;
    rawIp = rawIp?.replace("::ffff:", "").trim() || "0.0.0.0";

    let realIp = rawIp;
    if (
      ["127.0.0.1", "::1", "0.0.0.0"].includes(rawIp) ||
      rawIp.startsWith("::ffff:127.") ||
      rawIp.startsWith("::ffff:0.") ||
      rawIp === "::ffff:1"
    ) {
      const ipRes = await axios.get("https://api64.ipify.org?format=json");
      realIp = ipRes.data.ip;
      console.log("🌍 Using public IP from ipify:", realIp);
    } else {
      console.log("🌐 Detected raw IP:", realIp);
    }

    const geoRes = await axios.get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IPGEO_API_KEY}&ip=${realIp}`
    );
    const ipData = geoRes.data;

    if (!ipData || !ipData.ip) {
      return res.status(500).json({ error: "Invalid IP data from ipgeolocation.io" });
    }

    // ✅ Country-based restriction check
    const allowedCountries = process.env.ALLOWED_COUNTRIES
      ? process.env.ALLOWED_COUNTRIES.split(",").map((c) => c.trim().toLowerCase())
      : [];

    const userCountry = ipData.country_name?.toLowerCase() || "";

    console.log(" User Country:", ipData.country_name);
    console.log(" Allowed Countries from .env:", allowedCountries);

    if (!allowedCountries.includes(userCountry)) {
      console.warn("🚫 Country not allowed:", userCountry);
      return res.status(423).json({ error: `Access denied for country: ${ipData.country_name}` });
    }

    // ✅ Save location info including country
    const location = new Location({
      ip: ipData.ip,
      city: ipData.city,
      region: ipData.state_prov,
      country: ipData.country_name, // ✅ New country field
      isp: ipData.isp || "Unknown",
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      time: new Date().toISOString(),
      userId: req.body.userId || null,
      email: req.body.email || null,
      assessmentId: req.body.assessmentId || null,
    });

    await location.save();

    // ✅ Log to local file
    const logPath = path.join(__dirname, "../data/location_log.json");
    const logs = fs.existsSync(logPath) ? JSON.parse(fs.readFileSync(logPath)) : [];
    logs.push(location);
    fs.writeFileSync(logPath, JSON.stringify(logs, null, 2));

    res.status(201).json({ message: "Location stored successfully." });
  } catch (err) {
    console.error("❌ Error in POST /api/location:", err.message);
    res.status(500).json({ error: "Internal Server Error", detail: err.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ error: "Error fetching location data" });
  }
});

router.get("/download", async (req, res) => {
  try {
    const locations = await Location.find();
    const fields = [
      "ip",
      "city",
      "region",
      "country", // ✅ Include country in CSV
      "isp",
      "latitude",
      "longitude",
      "time",
      "userId",
      "email",
      
    ];
    const parser = new Parser({ fields });
    const csv = parser.parse(locations);

    const filePath = path.join(__dirname, "../data/location_data.csv");
    fs.writeFileSync(filePath, csv);

    res.download(filePath, "location_data.csv", () => {
      fs.unlinkSync(filePath);
    });
  } catch (err) {
    res.status(500).json({ error: "Error generating CSV" });
  }
});

export default router;
