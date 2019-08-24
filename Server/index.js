const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Contact Message Handler - Server Side'));

app.listen(port, function () {
     console.log("Running server on port " + port);
});