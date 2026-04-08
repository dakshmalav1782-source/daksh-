const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Fake user (for testing)
const USER = {
    username: "daksh",
    password: "1234"
};

// LOGIN API
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === USER.username && password === USER.password) {
        res.json({ success: true, message: "Login successful ✅" });
    } else {
        res.json({ success: false, message: "Invalid credentials ❌" });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});