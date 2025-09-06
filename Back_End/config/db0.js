const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',       // keep empty for XAMPP
    database: 'frames_db', // create this DB in phpMyAdmin
    port: 3307 // xampp's new port (modified)
});
connection.connect((err) => {
    if (err) {
        console.log('DB connection failed:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});
module.exports = connection;