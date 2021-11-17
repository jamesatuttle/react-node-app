const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Node serve the files for the built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle get request to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// All other GET requests not handled yet will return the React app
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
// });
