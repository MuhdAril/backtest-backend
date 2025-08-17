const sql = require('../db');

async function addTrade(trade) {
  const res = await sql`
    INSERT INTO trades (
      news_date, news_prior, news_later, news_tmr,
      red_news_monday, time_range, liquidity_type,
      position_type, lot_size, sl_placement,
      r_multiple, trade_result, notes
    ) VALUES (
      ${trade.news_date}, ${trade.news_prior}, ${trade.news_later}, ${trade.news_tmr},
      ${trade.red_news_monday}, ${trade.time_range}, ${trade.liquidity_type},
      ${trade.position_type}, ${trade.lot_size}, ${trade.sl_placement},
      ${trade.r_multiple}, ${trade.trade_result}, ${trade.notes}
    )
    RETURNING *
  `;
  return res[0];
}

module.exports = { addTrade };
