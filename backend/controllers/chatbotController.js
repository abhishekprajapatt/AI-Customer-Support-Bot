const Chatbot = require('../models/chatbotModel');

// Handle user message and save the conversation
exports.sendMessage = async (req, res) => {
    try {
        const { userMessage, botResponse } = req.body;

        const chat = new Chatbot({ userMessage, botResponse });
        await chat.save();

        res.status(201).json({ message: "Chat saved successfully", chat });
    } catch (error) {
        res.status(500).json({ error: "Failed to save chat", details: error.message });
    }
};
