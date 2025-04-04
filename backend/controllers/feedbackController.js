const Feedback = require('../models/feedbackModel');

// Save user feedback
exports.submitFeedback = async (req, res) => {
    try {
        const { user, message, rating } = req.body;

        const feedback = new Feedback({ user, message, rating });
        await feedback.save();

        res.status(201).json({ message: "Feedback submitted successfully", feedback });
    } catch (error) {
        res.status(500).json({ error: "Failed to submit feedback", details: error.message });
    }
};

// Get all feedback
exports.getAllFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch feedback", details: error.message });
    }
};
