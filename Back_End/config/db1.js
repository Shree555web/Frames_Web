// const mysql = require('mysql2');
// const dotenv = require('dotenv');
// dotenv.config();

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT || 4000,
//   ssl: { rejectUnauthorized: true }   // 👈 this replaces the .pem file
// });

// db.connect((err) => {
//   if (err) {
//     console.error('❌ DB connection failed:', err);
//   } else {
//     console.log('✅ Connected to TiDB Cloud!');
//   }
// });

// module.exports = db;


const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 4000,
  waitForConnections: true,
  connectionLimit: 10,          // max concurrent connections
  queueLimit: 0,
  ssl: { rejectUnauthorized: true }
});

// Optional: use promise wrapper for async/await
const db = pool.promise();

db.getConnection()
  .then(() => console.log('✅ Connected to TiDB Cloud via pool!'))
  .catch(err => console.error('❌ DB connection failed:', err));

module.exports = db;


