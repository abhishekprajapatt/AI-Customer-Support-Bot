const db = require("../database");

async function createTicket(userId, issue) {
    const query = "INSERT INTO support_tickets (user_id, issue, status) VALUES (?, ?, 'Open')";
    await db.run(query, [userId, issue]);
}

async function getAllTickets() {
    return db.all("SELECT * FROM support_tickets");
}

module.exports = { createTicket, getAllTickets };
