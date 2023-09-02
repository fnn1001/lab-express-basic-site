const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('views'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (req, res) => { // Corrected the route path
    res.sendFile(__dirname + '/views/works.html');
});

app.get('/photoGallery', (req, res) => {
    res.sendFile(__dirname + '/views/photoGallery.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
