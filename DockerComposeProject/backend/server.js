const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

// Get DB connection info from environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: "myapp"
});

// Simple route
app.get("/", (req, res) => {
  res.send("Hello from Backend API 🚀");
});

// Example DB check
app.get("/db-check", (req, res) => {
  db.connect(err => {
    if (err) {
      res.send("❌ Database connection failed: " + err.message);
    } else {
      res.send("✅ Connected to database!");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
