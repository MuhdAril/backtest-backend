const { addTrade } = require('../models/input_model');

async function createTrade(req, res) {
    try {
        const trade = await addTrade(req.body);
        res.status(201).json(trade);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add trade' });
    }
}

module.exports = { createTrade };
