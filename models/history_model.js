const pool = require('../db');

// Get all trades
async function getAllTrades() {
    const { rows } = await pool.query('SELECT * FROM trades ORDER BY id DESC');
    return rows;
}

// Delete a trade
async function deleteTradeById(id) {
    const { rows } = await pool.query('DELETE FROM trades WHERE id = $1 RETURNING *', [id]);
    return rows[0];
}

// Update trade
async function updateTrade(id, fields) {
    const { lot_size, trade_result } = fields;
    const { rows } = await pool.query(
        `UPDATE trades SET lot_size = $1, trade_result = $2 WHERE id = $3 RETURNING *`,
        [lot_size, trade_result, id]
    );
    return rows[0];
}

module.exports = { getAllTrades, deleteTradeById, updateTrade };
