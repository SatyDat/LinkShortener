const express = require('express');
const app = express();

app.use(express.json());


const crypto = require('crypto');

function generateHash(url) {
    const hash = crypto.createHash('sha256');
    hash.update(url);
    return hash.update(url).digest('hex').substring(0, 6);
}

module.exports = generateHash;
app.post('/', (req, res) => {
    const url = req.body.url;
    const key = generateHash(url);
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