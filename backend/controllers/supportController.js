const SupportTicket = require('../models/supportModel');

// Create a new support ticket
exports.createTicket = async (req, res) => {
    try {
        const { user, issue } = req.body;

        const ticket = new SupportTicket({ user, issue });
        await ticket.save();

        res.status(201).json({ message: "Support ticket created", ticket });
    } catch (error) {
        res.status(500).json({ error: "Failed to create support ticket", details: error.message });
    }
};

// Get all support tickets
exports.getAllTickets = async (req, res) => {
    try {
        const tickets = await SupportTicket.find();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch tickets", details: error.message });
    }
};
