var UserModel = require('../models/UserModel.js');


    module.exports.show= async function (req, res,next) {
     try{
           const id = req.params.id;
           const password = req.params.password;
           const user = await userModel.findOne({ id: id, password: password });
            res.send(user)
        } 
        catch (error) {
            next(error);
        }
    };
 
//        list: function (req, res) {
//         UserModel.find(function (err, Users) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Error when getting User.',
//                     error: err
//                 });
//             }

//             return res.json(Users);
//         });
//     },


module.exports.createNewUser = async function (req, res, next){
    try {
        
            const user = req.body;
            const { firstName, lastName, id,email, password, phoneNumber, birthDate , medicines} = user;
            const newUser = new UserModel({
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
//     /**
//      * UserController.update()
//      */
//     update: function (req, res) {
//         var id = req.params.id;

//         UserModel.findOne({_id: id}, function (err, User) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Error when getting User',
//                     error: err
//                 });
//             }

//             if (!User) {
//                 return res.status(404).json({
//                     message: 'No such User'
//                 });
//             }

//             User.firstName = req.body.firstName ? req.body.firstName : User.firstName;
// 			User.lastName = req.body.lastName ? req.body.lastName : User.lastName;
// 			User.id = req.body.id ? req.body.id : User.id;
// 			User.email = req.body.email ? req.body.email : User.email;
// 			User.password = req.body.password ? req.body.password : User.password;
// 			User.phoneNumber = req.body.phoneNumber ? req.body.phoneNumber : User.phoneNumber;
// 			User.birthDate = req.body.birthDate ? req.body.birthDate : User.birthDate;
// 			User.medicines = req.body.medicines ? req.body.medicines : User.medicines;
			
//             User.save(function (err, User) {
//                 if (err) {
//                     return res.status(500).json({
//                         message: 'Error when updating User.',
//                         error: err
//                     });
//                 }

//                 return res.json(User);
//             });
//         });
//     },

//     /**
//      * UserController.remove()
//      */
//     remove: function (req, res) {
//         var id = req.params.id;

//         UserModel.findByIdAndRemove(id, function (err, User) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Error when deleting the User.',
//                     error: err
//                 });
//             }

//             return res.status(204).json();
//         });
//     }
// };
