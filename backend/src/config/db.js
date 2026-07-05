const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST?.trim(),
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME?.trim(),
    user: process.env.DB_USER?.trim(),
    password: process.env.DB_PASSWORD?.trim(),
});

module.exports = pool;