const express = require("express");
const router = express.Router();
const { saveFeedback } = require("../controllers/feedbackController");

// POST: Save feedback
router.post("/", async (req, res) => {
    const { message, rating } = req.body;
    if (!message || !rating) {
        return res.status(400).json({ error: "Message and rating are required!" });
    }

    try {
        await saveFeedback(message, rating);
        res.json({ success: true, message: "Feedback submitted!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to save feedback" });
    }
});

module.exports = router;
