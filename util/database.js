const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',        // replace with your database user
  host: 'localhost',        // replace with your database host (e.g., localhost)
  database: 'Ecommerce',    // replace with your database name
  password: 'postgress',// replace with your database password
  port: 5432,                  // replace with your database port (default is 5432)
});

module.exports = pool.promise();