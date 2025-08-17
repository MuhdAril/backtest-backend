const express = require('express');
const cors = require('cors');
const app = express();

// Use dynamic port from environment or fallback to 3000
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Controllers
const dashboardController = require('./controllers/dashboard_controller');
const inputController = require('./controllers/input_controller');
const historyController = require('./controllers/history_controller');

// Dashboard routes
app.get('/dashboard/winrate', dashboardController.overallWinrate);
app.get('/dashboard/winrate/r-multiple', dashboardController.winrateByRMultiple);
app.get('/dashboard/lot-stats', dashboardController.lotSizeStats);
app.get('/dashboard/winrate/sl-placement', dashboardController.winrateBySLPlacement);
app.get('/dashboard/count/liquidity-type', dashboardController.countByLiquidityType);
app.get('/dashboard/winrate/liquidity-type', dashboardController.winrateByLiquidityType);
app.get('/dashboard/avg-r-multiple-win/liquidity-type', dashboardController.avgRMultipleWinByLiquidityType);

app.post('/input', inputController.createTrade);

app.get('/history/all', historyController.getTrades);
app.delete('/history/:id', historyController.deleteTrade);
app.put('/history/:id', historyController.editTrade);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
