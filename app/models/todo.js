

var mongoose = require('mongoose');

module.exports = mongoose.model('Todos', {
	text: String,
	done: Boolean
}); 