const { ObjectId } = require('mongodb');
var userModel = require('../models/UserModel.js');

module.exports.putOneMedicine = async function (req, res, next) {
    try {
        const medicine = req.body;
        const idForUpdate = req.params.id;
        const { apiId, name, ammount, numberForDay, times, numberOf, startTakingDate, SendAReminder } = medicine;
        const newMedicine = {
            apiId : apiId,
            name : name,
            ammount: ammount,
            numberForDay: numberForDay,
            times : times,
            numberOf  : numberOf,
            startTakingDate: startTakingDate,
            SendAReminder : SendAReminder
        }
        const user = await userModel.findOne({ _id: idForUpdate});
        const medicines = user.medicines;
        medicines.push(newMedicine);
        const update = { _id: ObjectId(idForUpdate) };
        user.medicines = medicines;
        const userWithMedicine = await userModel.updateOne(update, user);
        res.send(userWithMedicine);
    }
    catch (err) {
        next(err);
    }
}

module.exports.getAllMedicince = async function (req, res, next) {
    try {
        const id = req.params.id;
        const user = await userModel.findOne({ _id: id});
        const medicines = user.medicines;
        res.send(medicines);
    } 
    catch (error) {
        next(err);
    }
}