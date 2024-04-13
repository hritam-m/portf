const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Define the directory where your HTML files are located
const publicDirectoryPath = path.join(__dirname, 'src');

// Serve static files from the public directory
app.use(express.static(publicDirectoryPath));

// Start the server
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
