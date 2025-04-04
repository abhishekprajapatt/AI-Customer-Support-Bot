const express = require('express');
const router = express.Router();

router.use('/chatbot', require('./chatbotRoutes'));
router.use('/feedback', require('./feedbackRoutes'));
router.use('/support', require('./supportRoutes'));

module.exports = router;
