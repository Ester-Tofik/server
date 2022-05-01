var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
	'firstName' : String,
	'lastName' : String,
	'id' : String,
	'email' : String,
	'password' : String,
	'phoneNumber' : Number,
	'birthDate' : Date,
	'medicines' : Array
});

module.exports = mongoose.model('User', UserSchema);
