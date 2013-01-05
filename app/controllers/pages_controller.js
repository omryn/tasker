var locomotive = require('locomotive')
    , Controller = locomotive.Controller;
var model = require('../model/schemas.js');


var PagesController = new Controller();

PagesController.main = function () {
    this.title = 'Locomotive'
    this.developers = model.Developer.find();
    this.render();
}

module.exports = PagesController;
