const sql = require('../db');

// Get all trades
async function getAllTrades() {
  const res = await sql`SELECT * FROM trades ORDER BY id DESC`;
  return res;
}

// Delete a trade
async function deleteTradeById(id) {
  const res = await sql`DELETE FROM trades WHERE id = ${id} RETURNING *`;
  return res[0];
}

// Update trade
async function updateTrade(id, fields) {
  const { lot_size, trade_result } = fields;
  const res = await sql`
    UPDATE trades
    SET lot_size = ${lot_size}, trade_result = ${trade_result}
    WHERE id = ${id}
    RETURNING *
  `;
  return res[0];
}

module.exports = { getAllTrades, deleteTradeById, updateTrade };
