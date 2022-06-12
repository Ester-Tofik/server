const express = require('express');
const router = express.Router();
const medicinesController = require('../controllers/medicinesController');

// router.put('/:id', medicinesController.putOneMedicine);
router.put('/:userId/:medicineId', medicinesController.deleteOneMedicineInMedicineList);
 router.put('/:id', medicinesController.updataOneMedicineInMedicineList);
router.get('/:id', medicinesController.getAllMedicince);

module.exports = router;
