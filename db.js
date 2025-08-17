const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // from Supabase
  host: 'db.drqdaxxuqgajeyvcebta.supabase.co',
  database: 'postgres', // Supabase default DB
  password: 'SoulSparrow2395*', // your password
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // Supabase requires SSL
  },
});

module.exports = pool;
