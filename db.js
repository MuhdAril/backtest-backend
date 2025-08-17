const postgres = require('postgres');
require('dotenv').config();

<<<<<<< HEAD
const pool = new Pool({
  user: process.env.DB_USER,       // Supabase username
  host: process.env.DB_HOST,       // Supabase host
  database: process.env.DB_NAME,   // Supabase database
  password: process.env.DB_PASS,   // Supabase password
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
=======
const sql = postgres(process.env.DATABASE_URL, {
  ssl: 'require' // enforce SSL
>>>>>>> 6a0725d (Refactor models to use Supabase postgres client (CommonJS))
});

module.exports = sql;
