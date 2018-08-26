const express = require('express');
const app = express();
var fs = require('fs');
const hbs = require('hbs');
app.set('view engine', 'hbs');
app.use((req, res, next) => {
    var now = new Date().toString();
    const log = `${now}: ${req.method} - ${req.url}`;
    fs.appendFile('server.log', log);
    next();
})
app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.render('index.hbs');
});
app.listen(3002);