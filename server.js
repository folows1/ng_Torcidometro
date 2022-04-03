const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + 'dist/t1-ng'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/t1-ng/index.html');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});