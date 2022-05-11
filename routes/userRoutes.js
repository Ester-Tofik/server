const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');


// router.get('/', UserController.list);
router.get('/:id/:password', UserController.show);
router.post('/', UserController.createNewUser);
router.put('/:id', UserController.putUser);
// router.delete('/:id', UserController.remove);

module.exports = router;
