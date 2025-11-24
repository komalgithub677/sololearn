// RegisterAadhaarUser.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from './NavBarP';
import './RegisterAadhaar.css';
import FooterP from './FooterP';

const RegisterAadhaar: React.FC = () => {
  const [aadhaar, setAadhaar] = useState('');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);

 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!aadhaar.match(/^[0-9]{12}$/) || !name || !photo) {
    alert("All fields are required with a valid 12-digit Aadhaar.");
    return;
  }

  const formData = new FormData();
  formData.append('aadhaarNumber', aadhaar);
  formData.append('name', name);
  formData.append('photo', photo);

  try {
    const res = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      body: formData,
    });

    const contentType = res.headers.get('content-type');

    if (contentType?.includes('application/json')) {
      const data = await res.json();
      setMessage(data.message || "Registered successfully");
    } else {
      const text = await res.text();
      console.error("Unexpected response:", text);
      setMessage("⚠️ Unexpected response from server");
    }
  } catch (err) {
    console.error(err);
    setMessage("❌ Failed to register user");
  }
};

  return (
    <>
    <div className="aadhaar-container">
      <Navbar/>
      <h3>Register Aadhaar User</h3>
      <form onSubmit={handleSubmit} className="aadhaar-form">
        <input
          type="number"
          placeholder="Enter Aadhaar Number"
          maxLength={12}
          pattern="[0-9]{12}"
          required
          value={aadhaar}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setAadhaar(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Full Name"
          required
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPhoto(e.target.files?.[0] || null)
          }
        />

        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}
    </div>
    <FooterP/>
    </>
    
  );
};

export default RegisterAadhaar;
