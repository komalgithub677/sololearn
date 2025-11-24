import express from 'express';
const router = express.Router();

// POST /api/pretest
router.post('/', (req, res) => {
  const { score, level } = req.body;

  // Validate input
  if (typeof score !== 'number' || !['low', 'medium', 'hard'].includes(level)) {
    return res.status(400).json({ error: 'Invalid pretest data' });
  }

  // Log or save score if needed (e.g., in DB)
  console.log(`📊 Received Pre-Test: Score = ${score}, Level = ${level}`);

  return res.json({ message: 'Pretest result received successfully ✅', score, level });
});

export default router;
