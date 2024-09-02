const express = require('express');
const app = express();

app.use(express.json());

let shortenedUrls = [];

app.post('/', (req, res) => {
    const url = req.body.url;
    shortenedUrls.push(url);
    const key = "wsf5f"; // just a placeholder, you can generate a real key here
    const shortUrl = `http://localhost/${key}`;
    res.send(JSON.stringify({
        key,
        long_url: url,
        short_url: shortUrl
    }, null, 4));
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});