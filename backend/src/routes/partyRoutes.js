const express = require('express');

const router = express.Router();

const {
    getParties,
    createParty,
    updateParty,
    deleteParty
} = require('../controllers/partyController');

router.get('/', getParties);

router.post('/', createParty);

router.put('/:id', updateParty);

router.delete('/:id', deleteParty);

module.exports = router;