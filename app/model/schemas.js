'use strict';
var mongoose = require('mongoose');

var schemas = {
    Task: mongoose.Schema({
        name: String,
        duration: Number,
        startDate: Date,
        endDate: Date,
        color: String
    }),

    Developer: mongoose.Schema({
        name: String,
        color: String
    })
};

var types = {};
Object.keys(schemas).forEach(function (key) {
    types[key] = mongoose.model(key, schemas[key]);
});

module.exports = types;