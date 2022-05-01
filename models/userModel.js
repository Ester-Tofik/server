var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({

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
