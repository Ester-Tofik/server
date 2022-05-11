var userModel = require('../models/UserModel.js');
const { ObjectId } = require('mongodb');

    module.exports.show= async function (req, res,next) {
     try{
           const id = req.params.id;
           const password = req.params.password;
           const user = await userModel.findOne({ id: id, password: password });
           res.send(user);
        } 
        catch (error) {
            next(error);
        }
    };

module.exports.createNewUser = async function (req, res, next){
    try {
            console.log("wefdwsa")
            const user = req.body;
            const { firstName, lastName, id,email, password, phoneNumber, birthDate , medicines} = user;
            const newUser = new userModel({
                firstName : firstName,
                lastName : lastName,
			    id : id,
			    email : email,
			    password :password,
			    phoneNumber : phoneNumber,
			    birthDate : birthDate,
			    medicines : medicines
            })
            const inserted = await newUser.save();
            res.send(inserted);
        }
        catch(err) {
            next(err);
        }
}

module.exports.putUser = async function (req, res, next) {
    try {
        const idForUpdate = req.params.id;
        const user = req.body;
        const { firstName, lastName, email, password, id,identityNumber,birthDate , phoneNumber } = user;
        const userToUpdate = { $set: { "firstName": firstName, "lastName": lastName, "email": email, "password": password, "id": id, "identityNumber":identityNumber,"birthDate":birthDate, "phoneNumber":phoneNumber } };
        const update = { _id: ObjectId(idForUpdate) };
        const userTo = await userModel.updateOne(update, userToUpdate);
        res.send(userTo);
    }
    catch (error) {
        next(error);
    }
    
};