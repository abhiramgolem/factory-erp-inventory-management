const express = require('express');
const router = express.Router();

const {
    getDrivers,
    createDriver,
    updateDriver,
    deleteDriver
} = require('../controllers/driverController');

router.get('/', getDrivers);
router.post('/', createDriver);
router.put('/:id', updateDriver);
router.delete('/:id', deleteDriver);

module.exports = router;