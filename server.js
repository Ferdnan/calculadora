const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => console.log(
    `Server is running in ${port}`
));