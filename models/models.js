var mongoose = require('mongoose');
var database = require('../config/database');

module.exports = function(wagner) {
	// connect to local mongodb
	mongoose.connect(database.url);
	
	wagner.factory('db', function() {
		return mongoose;
	});
	
	// define model
    var Todo = mongoose.model('Todo', {
        text : String
    });
	
	wagner.factory('Todo', function() {
		return Todo;
	});
	
};