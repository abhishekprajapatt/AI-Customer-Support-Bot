const express = require('express');
const router = express.Router();
const supportController = require('../controllers/supportController');

// Route to create a support ticket
router.post('/create', supportController.createTicket);

// Route to fetch all tickets
router.get('/', supportController.getAllTickets);

module.exports = router;
