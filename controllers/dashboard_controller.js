const Dashboard = require('../models/dashboard_model');

const dashboardController = {

    overallWinrate: async (req, res) => {
        try {
            const data = await Dashboard.getOverallWinrate();
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    },

    winrateByRMultiple: async (req, res) => {
        try {
            const data = await Dashboard.getWinrateByRMultiple();
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    },

    lotSizeStats: async (req, res) => {
        try {
            const data = await Dashboard.getLotSizeStats();
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    },

    winrateBySLPlacement: async (req, res) => {
        try {
            const data = await Dashboard.getWinrateBySLPlacement();
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    },

    countByLiquidityType: async (req, res) => {
        try {
            const data = await Dashboard.getCountByLiquidityType();
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    },

    winrateByLiquidityType: async (req, res) => {
        try {
            const data = await Dashboard.getWinrateByLiquidityType();
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    },

    avgRMultipleWinByLiquidityType: async (req, res) => {
        try {
            const data = await Dashboard.getAvgRMultipleWinByLiquidityType();
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    }

};

module.exports = dashboardController;
