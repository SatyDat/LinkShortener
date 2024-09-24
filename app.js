const express = require('express');
const run = require('./database'); // Adjust path to where your `run` function is located
const generateHash = require('./hash');

const app = express();

app.use(express.json());

// Run the MongoDB connection logic
run().catch(console.dir); // Catch any errors in MongoDB connection

app.post('/', (req, res) => {
    const url = req.body.url;
    const key = generateHash(url);
    const shortUrl = `http://localhost/${key}`;
    res.json({
        key,
        long_url: url,
        short_url: shortUrl
    });
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
