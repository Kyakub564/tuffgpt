const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Mock responses for TuffGPT
const responses = [
  "Stay disciplined. The grind never stops.",
  "Direct action beats planning. Execute now.",
  "Winners focus on execution, not excuses.",
  "Your mindset determines your output. Level up.",
  "Strategic thinking + Swift execution = Victory.",
  "No fluff. Just results. That's the TuffGPT way.",
  "Pressure creates diamonds. Embrace the challenge.",
  "Success favors the disciplined. Build the habit.",
  "Think big, but execute small. Compound wins.",
  "Your competition is sleeping. What are you doing?"
];

// Chat endpoint
app.post('/chat', (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ reply: "Send a message to TuffGPT." });
  }

  // Get a random motivational response
  const randomIndex = Math.floor(Math.random() * responses.length);
  const reply = responses[randomIndex];

  res.json({ reply });
});

// Start server
app.listen(PORT, () => {
  console.log(`TuffGPT server running on http://localhost:${PORT}`);
});
