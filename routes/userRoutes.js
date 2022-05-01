var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController.js');


// router.get('/', UserController.list);
router.get('/:id/:password', UserController.show);
router.post('/', UserController.createNewUser);
// router.put('/:id', UserController.update);
// router.delete('/:id', UserController.remove);

module.exports = router;
