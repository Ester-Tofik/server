const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicineSchema = new mongoose.Schema({
	apiId: {
		type: String,
		minlength: 6,
		maxlength: 6
	},
	name: {
		type: String
	},
	ammount: {
		type: Number
	},
	numberForDay: {
		type: Number,
		min: 1
	},
	numberOf : {
		type: Number,
		min : 10,
		max : 60
	},
	startTakingDate : {
		type : Date,
		default : new Date()
	},
	SendAReminder : {
		type : Boolean,
		default : false
	}
})


const UserSchema = new Schema({
	'firstName': String,
	'lastName': String,
	'id': String,
	'email': String,
	'password': String,
	'phoneNumber': Number,
	'birthDate': Date,
	'medicines': Array
});

module.exports = mongoose.model('User', UserSchema);
