const express = require('express');

const router = express.Router();

const {
    getTransports,
    createTransport,
    updateTransport,
    deleteTransport
} = require('../controllers/transportController');

router.get('/', getTransports);
router.post('/', createTransport);
router.put('/:id', updateTransport);
router.delete('/:id', deleteTransport);

module.exports = router;