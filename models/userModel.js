var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
 	identityNumber : {
		type : String,
		minlength : 9,
		maxlength : 9
	 } ,
	email: {
	type:String
	
	},
	firstName : {
	type:String,
	minlength : 2
	},
	lastName : {
	type:String,
	minlength : 2
	},
	
	phoneNumber :{
		type:Number,
		minlength : 9,
		maxlength:10
	},
	birthDate :{
		type:Date
	},
	password :{
		type:String,


	} 
});

module.exports = mongoose.model('user', userSchema);
