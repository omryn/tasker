module.exports = function () {
    switch (this.env) {
        default:
            require('mongoose').connect('mongodb://localhost/tasker');

    }

    require('../../app/model/schemas.js');
}