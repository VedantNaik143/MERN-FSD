const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const PORT = 3000;
const SECRET_KEY = "my-secret-key";

// Demo user
const user = {
    id: 1,
    username: "admin",
    password: "1234"
};

// Login - Generate Token
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username !== user.username || password !== user.password) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }

    const token = jwt.sign(
        {
            id: user.id,
            username: user.username
        },
        SECRET_KEY,
        {
            expiresIn: "1h"
        }
    );

    res.json({
        message: "Login successful",
        token: token
    });
});

// Authentication Middleware
function authenticateToken(req, res, next) {

    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Access token required"
        });
    }

    jwt.verify(token, SECRET_KEY, (error, user) => {

        if (error) {
            return res.status(403).json({
                message: "Invalid or expired token"
            });
        }

        req.user = user;
        next();
    });
}

// Protected Route
app.get("/api/profile", authenticateToken, (req, res) => {

    res.json({
        message: "Protected data accessed successfully",
        user: req.user
    });
});

// Public Route
app.get("/", (req, res) => {
    res.json({
        message: "API Authentication Demo"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});