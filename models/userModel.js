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
	numberOf: {
		type: Number,
		min: 10,
		max: 60
	},
	startTakingDate: {
		type: Date,
		default: new Date()
	},
	SendAReminder: {
		type: Boolean,
		default: false
	}
});

const reminderManagementSchema = new Schema({
	userWantReminders: {
		type: Boolean,
		default: false
	},
	automaticOscillation: {
		type: Boolean,
		default: false
	},
	snooze: {
		type: Number,
		enum: [5, 10, 15, 20, 30]
	},
	sound: {
		type: Number,
		enum: [1, 2, 3, 4, 5, 6, 7, 8, 9]
	},
	PreTaskReminder: {
		type: Number,
		enum: [0, 2, 5, 10, 15]
	}
})

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		minlength: 2
	},

	lastName: {
		type: String,
		minlength: 2
	},

	id: {
		type: String,
		minlength: 9,
		maxlength: 9
	},

	email: {
		type: String

	},
	password: {
		type: String,

	},
	phoneNumber: {
		type: Number,
		minlength: 9,
		maxlength: 10
	},

	birthDate: {
		type: Date
	},

	identityNumber: {
		type: String,
		minlength: 9,
		maxlength: 9
	},
	medicines: [medicineSchema],
	reminderManagement: {
		type: reminderManagementSchema
	}
}, { timestamps: true });
module.exports = mongoose.model('user', userSchema);
