const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Replace these values with your actual details
const firstName = "XYMMER JAMES";
const lastName = "NADERA";
const age = 20;
const schoolEmail = "xyde.nadera.swu@phinmaed.com";

app.get('/firstname', (req, res) => {
    res.send(firstName);
});

app.get('/lastname', (req, res) => {
    res.send(lastName);
});

app.get('/age', (req, res) => {
    res.send(age.toString());
});

app.get('/schoolemail', (req, res) => {
    res.send(schoolEmail);
});

app.get('/mydata', (req, res) => {
    res.json({
        first_name: firstName,
        last_name: lastName,
        age: age,
        school_email: schoolEmail
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
