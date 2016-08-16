
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var productsManager=require('./products-manager.js');

router.use(bodyParser.json());

router.get('/products', productsManager.getAll);
router.get('/products/:id', productsManager.getById);

var server = router.listen(3000, function () {
    var port = server.address().port;
    console.log('listen:::' + port);
});