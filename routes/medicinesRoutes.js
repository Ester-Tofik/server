const express = require('express');
const router = express.Router();
const medicinesController = require('../controllers/medicinesController');

router.put('/:id', medicinesController.putOneMedicine);
router.get('/:id', medicinesController.getAllMedicince);

module.exports = router;
