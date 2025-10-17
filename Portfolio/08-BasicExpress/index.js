const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/bmi', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height) / 100; //cm to m
    const bmi = weight / (height * height);
    console.log("Your BMI is: " + bmi);
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
