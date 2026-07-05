const express = require('express');
const router = express.Router();

const {
    getDrivers,
    createDriver
} = require('../controllers/driverController');

router.get('/', getDrivers);
router.post('/', createDriver);

module.exports = router;