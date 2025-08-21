// const mysql = require('mysql2');
// const fs = require('fs');
// require('dotenv').config();

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   ssl: {
//     ca: fs.readFileSync(process.env.DB_CA_PATH),
//   },
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('❌ TiDB Connection Failed:', err.stack);
//     return;
//   }
//   console.log('✅ Connected to TiDB Cloud!');
// });

// module.exports = connection;



const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 4000,
  ssl: { rejectUnauthorized: true }   // 👈 this replaces the .pem file
});

db.connect((err) => {
  if (err) {
    console.error('❌ DB connection failed:', err);
  } else {
    console.log('✅ Connected to TiDB Cloud!');
  }
});

module.exports = db;

