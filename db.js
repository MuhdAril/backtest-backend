const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,       // Supabase username
  host: process.env.DB_HOST,       // Supabase host
  database: process.env.DB_NAME,   // Supabase database
  password: process.env.DB_PASS,   // Supabase password
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
