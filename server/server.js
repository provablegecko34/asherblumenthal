const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Root route (Homepage)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Contact route
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'contact.html'));
});

// Other routes (example for blog page)
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'blog.html'));
});

// Catch-all route (for undefined routes)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', '404.html')); // Optional, for a 404 page
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});