var express = require('express');
var app = express();
var productManager = require('./products-manager.js');

app.get('/', function (req, res) {

    res.send('OK');
});

app.get('/products', function (req, res) {
    res.send(productManager.getAll);
});

app.get('/products/:id', function (req, res) {
    var found = productManager.getById(req.params.id);
    if (found) {
        res.send(found);
    } else {
        res.sendStatus(404);
    }
});

module.exports=app;