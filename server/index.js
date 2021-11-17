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

app.get("/employment", (req, res) => {
    res.json( { message: [
        {"company": "HM Revenue & Customs (Industrial Placement)", "jobtitle": "Assistant Software Developer", "startdate": "Sep 2015", "enddate": "Aug 2016"},
        {"company": "Partnerize", "jobtitle": "Application Support Engineer", "startdate": "Nov 2017", "enddate": "Oct 2018"},
        {"company": "Caspian", "jobtitle": "Junior Frontend Developer", "startdate": "Oct 2018", "enddate": "Sep 2019"},
        {"company": "Partnerize", "jobtitle": "Platform Support Engineer", "startdate": "Oct 2019", "enddate": "Present"}
    ]});
});

// All other GET requests not handled yet will return the React app
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
