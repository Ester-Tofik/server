const { ObjectId } = require('mongodb');
var userModel = require('../models/UserModel.js');

module.exports.createNewReminder = async function (req, res, next) {
    try {
        const reminder = req.body;
        const idForUpdate = req.params.id;
        const { userWantReminders, automaticOscillation, snooze, sound, PreTaskReminder } = reminder;
        const newReminder = {
            userWantReminders: userWantReminders,
            automaticOscillation: automaticOscillation,
            snooze: snooze,
            sound: sound,
            PreTaskReminder: PreTaskReminder
        }
        const reminderToUpdate = { $set: { "reminderManagement": newReminder }};
        const update = { _id: ObjectId(idForUpdate) };
        const userWithReminder = await userModel.updateOne(update, reminderToUpdate);
        res.send(userWithReminder);

    }
        catch (err) {
            next(err);
        }
    }
