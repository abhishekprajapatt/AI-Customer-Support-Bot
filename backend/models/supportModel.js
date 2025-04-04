const mongoose = require('mongoose');

const SupportTicketSchema = new mongoose.Schema({
  user: { type: String, required: true },
  issue: { type: String, required: true },
  status: { type: String, enum: ['open', 'closed'], default: 'open' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SupportTicket', SupportTicketSchema);
