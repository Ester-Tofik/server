const mongoose = require('mongoose');
const Schema = mongoose.Schema;

<<<<<<< HEAD
var UserSchema = new Schema({
=======
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


>>>>>>> 65b115123ada8d25d95188fdabe6fea05f09acbc

//	'medicines' : Array

	firstName : {
		type:String,
		minlength : 2
	},

	lastName : {
		type:String,
		minlength : 2
	},

	id : {
		type : String,
		minlength : 9,
		maxlength : 9
	 },

	 email: {
		type:String
		
		}, 
	password :{
		type:String,

	},
	phoneNumber :{
		type:Number,
		minlength : 9,
		maxlength:10
	},

	birthDate :{
		type:Date
	},
	
	identityNumber : {
		type : String,
		minlength : 9,
		maxlength : 9
	 } ,
	 medicines:[medicineSchema],	 
});
module.exports = mongoose.model('User', UserSchema);
