const express = require("express");
const router = express.Router();
const { createTicket, getAllTickets } = require("../controllers/supportController");

// POST: Create a new ticket
router.post("/new", async (req, res) => {
    const { userId, issue } = req.body;
    if (!userId || !issue) {
        return res.status(400).json({ error: "User ID and issue are required!" });
    }

    try {
        await createTicket(userId, issue);
        res.json({ success: true, message: "Ticket created!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to create ticket" });
    }
});

// GET: Get all support tickets
router.get("/", async (req, res) => {
    try {
        const tickets = await getAllTickets();
        res.json({ tickets });
    } catch (error) {
        res.status(500).json({ error: "Failed to get tickets" });
    }
});

module.exports = router;
