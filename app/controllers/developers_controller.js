'use strict';
var Controller = require('locomotive').Controller;
var Developer = require('../model/schemas.js').Developer;


var DevelopersController = new Controller();

DevelopersController.index = function () {
    var self = this;
    this.title = 'Developers'
    this.developers = Developer.find(function (err, data) {
        self.items = data;
        self.render();
    });
};

DevelopersController.new = function () {
    this.title = 'Add a new developer';
    this.render();
};

DevelopersController.create = function () {
    var self = this;
    var developer = new Developer({name: this.param('name'), color: this.param('color')});
    developer.save(function (err, item) {
        if (err) {
            throw new Error('Error saving developer details ' + JSON.stringify(item, null, 4));
        }
        if (self.param('redirect')) {
            self.redirect(self.developersPath());
        }
        else {
            self.res.send(200);
        }
    });
};

DevelopersController.show = function () {
    var self = this;
    self.id = self.param('id');
    this.title = 'Developer details';
    Developer.findOne({name: self.param('id')}, function (err, data) {
        self.item = err ? null : data;
        self.render();
    });
};

DevelopersController.edit = DevelopersController.show;

DevelopersController.update = function () {
    var self = this;
    Developer.update({_id: this.param('_id')}, {name: this.param('name'), color: this.param('color')},
        function (err, item) {
            if (err) {
                throw new Error('Error saving developer details ' + JSON.stringify(item, null, 4));
            }
            if (self.param('redirect')) {
                self.redirect(self.developersPath());
            }
            else {
                self.res.send(200);
            }
        });
};


module.exports = DevelopersController;
