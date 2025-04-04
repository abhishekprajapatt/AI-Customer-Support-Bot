const express = require("express");
const cors = require("cors");
const chatbotRoutes = require("./routes/chatbot");
const feedbackRoutes = require("./routes/feedback");
const supportRoutes = require("./routes/support");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/chatbot", chatbotRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/support", supportRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
