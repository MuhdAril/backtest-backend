const sql = require('../db');

const Dashboard = {
  // Overall winrate
  getOverallWinrate: async () => {
    const res = await sql`
      SELECT 
        ROUND(
          100.0 * SUM(CASE WHEN trade_result='Win' THEN 1 ELSE 0 END)/COUNT(*),
        2) AS winrate
      FROM trades
    `;
    return res[0];
  },

  // Winrate grouped by r_multiple
  getWinrateByRMultiple: async () => {
    const res = await sql`
      SELECT r_multiple, 
        ROUND(100.0 * SUM(CASE WHEN trade_result='Win' THEN 1 ELSE 0 END)/COUNT(*),2) AS winrate,
        COUNT(*) AS total_trades
      FROM trades
      GROUP BY r_multiple
      ORDER BY r_multiple
    `;
    return res;
  },

  // Max and avg lot_size
  getLotSizeStats: async () => {
    const res = await sql`
      SELECT MAX(lot_size) AS max_lot_size, ROUND(AVG(lot_size),2) AS avg_lot_size
      FROM trades
    `;
    return res[0];
  },

  // Winrate grouped by sl_placement
  getWinrateBySLPlacement: async () => {
    const res = await sql`
      SELECT sl_placement,
        ROUND(100.0 * SUM(CASE WHEN trade_result='Win' THEN 1 ELSE 0 END)/COUNT(*),2) AS winrate,
        COUNT(*) AS total_trades
      FROM trades
      GROUP BY sl_placement
    `;
    return res;
  },

  // Count grouped by liquidity_type
  getCountByLiquidityType: async () => {
    const res = await sql`
      SELECT liquidity_type, COUNT(*) AS total_trades
      FROM trades
      GROUP BY liquidity_type
    `;
    return res;
  },

  // Winrate grouped by liquidity_type
  getWinrateByLiquidityType: async () => {
    const res = await sql`
      SELECT liquidity_type,
        ROUND(100.0 * SUM(CASE WHEN trade_result='Win' THEN 1 ELSE 0 END)/COUNT(*),2) AS winrate,
        COUNT(*) AS total_trades
      FROM trades
      GROUP BY liquidity_type
    `;
    return res;
  },

  // Avg r_multiple where trade_result = Win, grouped by liquidity_type
  getAvgRMultipleWinByLiquidityType: async () => {
    const res = await sql`
      SELECT liquidity_type,
        ROUND(AVG(r_multiple),2) AS avg_r_multiple_win,
        COUNT(*) AS total_win_trades
      FROM trades
      WHERE trade_result='Win'
      GROUP BY liquidity_type
    `;
    return res;
  }
};

module.exports = Dashboard;
