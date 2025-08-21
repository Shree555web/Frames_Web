// const mysql = require('mysql2');
// const fs = require('fs');
// require('dotenv').config();

// const connection = mysql.createConnection({
//   host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
//   port: 4000,
//   user: 'akJYBd63TRx7Rtq.root',
//   password: 'TSftLjhdMa414PWe',
//   database: 'Frames_Db',

//   ssl: {
//     ca: fs.readFileSync('./isrgrootx1.pem')
//   }
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('❌ TiDB Connection Failed:', err.stack);
//     return;
//   }
//   console.log('✅ Connected to TiDB Cloud!');
// });

// module.exports = connection;




// Back_End/config/db.js
const mysql = require('mysql2');
const fs = require('fs');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    ca: fs.readFileSync(process.env.DB_CA_PATH),
  },
});

connection.connect((err) => {
  if (err) {
    console.error('❌ TiDB Connection Failed:', err.stack);
    return;
  }
  console.log('✅ Connected to TiDB Cloud!');
});

module.exports = connection;
