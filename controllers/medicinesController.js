const { ObjectId } = require('mongodb');
var userModel = require('../models/UserModel.js');

module.exports.putOneMedicine = async function (req, res, next) {
    try {
        const medicine = req.body;
        const idForUpdate = req.params.id;
        const { apiId, name, daysInWeek, numberForDay, times, ammountOfPills, SendAReminderForPacket, pillsInPacket, SendAReminder } = medicine;
        const newMedicine = {
            apiId: apiId,
            name: name,
            daysInWeek: daysInWeek,
            numberForDay: numberForDay,
            times: times,
            ammountOfPills: ammountOfPills,
            SendAReminderForPacket: SendAReminderForPacket,
            pillsInPacket: pillsInPacket,
            SendAReminder: SendAReminder
        }
        const user = await userModel.findOne({ _id: idForUpdate });
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
        const user = await userModel.findOne({ _id: id });
        const medicines = user.medicines;
        res.send(medicines);
    }
    catch (error) {
        next(err);
    }
}

module.exports.updataOneMedicineInMedicineList = async function (req, res, next) {
    try {
        const userId = req.params.id;
        const medicineId = req.body._idm;
        const user = await userModel.findOne({ _id: userId });
        const medicines = user.medicines;
        let indexOut;
        medicineIndex = medicines.find((oneMedicine, index) => {
            if (oneMedicine.id == ObjectId(medicineId)) {
                indexOut = index;
            }
        });
        //user.medicines.update(medicineId,req.body );
        user.medicines[indexOut] = req.body;
        const update = { _id: ObjectId(userId) };
        const userWithMedicine = await userModel.updateOne(update, user);
        res.send(userWithMedicine);
    }
    catch (err) {
        next(err);
    }
}

module.exports.deleteOneMedicineInMedicineList = async function (req, res, next) {
    try {
        const userId = req.params.userId;
        const medicineId = req.params.medicineId;
        const user = await userModel.findOne({ _id: userId });
        const medicines = user.medicines;
        medicineIndex = medicines.find((oneMedicine) => oneMedicine._id == medicineId);
        user.medicines.remove(medicineId);
        const update = { _id: ObjectId(userId) };
        const userWithMedicine = await userModel.updateOne(update, user);
        res.send(update);



    }
    catch (error) {
        next(err);
    }
}


