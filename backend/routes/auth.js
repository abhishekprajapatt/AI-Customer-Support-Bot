const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

// POST: Register a new user
router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required!" });
    }

    try {
        const user = await registerUser(username, password);
        res.json({ success: true, user });
    } catch (error) {
        res.status(500).json({ error: "Failed to register" });
    }
});

// POST: Login user
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required!" });
    }

    try {
        const token = await loginUser(username, password);
        res.json({ success: true, token });
    } catch (error) {
        res.status(401).json({ error: "Invalid credentials" });
    }
});

module.exports = router;
