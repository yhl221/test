var nextId = require('./id.js');
var _ = require('lodash');
var products = [{
    id: nextId(),
    name: 'apple',
    price: 5.00
}];

function getAll() {
    return products;
}

function getById(id) {

    var found = _.find(products, function (item) {
        return item.id === parseInt(id);
    });

    return found;
}

module.exports = {
    getAll: getAll,
    getById: getById
};
