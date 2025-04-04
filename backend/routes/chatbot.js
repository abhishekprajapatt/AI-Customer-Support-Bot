const express = require("express");
const router = express.Router();
const { generateAIResponse } = require("../controllers/chatbotController");

// POST: User query -> AI Response
router.post("/ask", async (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: "Message is required!" });
    }

    try {
        const aiResponse = await generateAIResponse(message);
        res.json({ reply: aiResponse });
    } catch (error) {
        res.status(500).json({ error: "AI response failed" });
    }
});

module.exports = router;
