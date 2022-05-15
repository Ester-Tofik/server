const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/reminderController');

router.put('/:id', reminderController.createNewReminder);


module.exports = router;
