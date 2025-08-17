const { getAllTrades, deleteTradeById, updateTrade } = require('../models/history_model');

async function getTrades(req, res) {
    try {
        const trades = await getAllTrades();
        res.json(trades);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch trades' });
    }
}

async function deleteTrade(req, res) {
    try {
        const trade = await deleteTradeById(req.params.id);
        if (!trade) return res.status(404).json({ error: 'Trade not found' });
        res.json(trade);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete trade' });
    }
}

async function editTrade(req, res) {
    try {
        const trade = await updateTrade(req.params.id, req.body);
        if (!trade) return res.status(404).json({ error: 'Trade not found' });
        res.json(trade);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update trade' });
    }
}

module.exports = { getTrades, deleteTrade, editTrade };
