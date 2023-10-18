const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>i am Roaa');
});

app.listen(3000,() => {
    console.log('Port is listing')
});