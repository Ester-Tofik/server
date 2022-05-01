var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');


// router.get('/', UserController.list);
router.get('/:id/:password', UserController.show);
// router.post('/', UserController.create);
// router.put('/:id', UserController.update);
// router.delete('/:id', UserController.remove);

module.exports = router;
