const express = require('express');
const path = require('path');
require('dotenv').config({ path: './.env'});

console.log(process.env.USERNAME);

const app = express();
const PORT = process.env.PORT || 3000;
const USERNAME = process.env.USERNAM || "Guest";

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Todo_List.html'));
});

// API endpoint to send the username to the frontend
app.get('/get-username', (req, res) => {
    res.json({ username: USERNAME });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
