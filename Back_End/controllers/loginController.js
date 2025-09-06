const dbconnect = require('../config/db');

exports.login = (req, res) => {
    const { email, password } = req.body;
    const db = dbconnect();
   
     db.connect((err) => {
       if (err) console.error("❌ DB connection failed:", err);
       else console.log("✅ Connected to TiDB Cloud!");
     });

    const sql = `SELECT * FROM Users  WHERE email = ? AND pass= ?;`
    db.query(sql, [email, password], (err, result) => {
      db.end();
        if (err) {
            console.log("Login error", err);
            return res.status(500).send("DB error");
        }

        if (result.length === 0) {
            return res.status(401).send("Invalid email or password");
        }

        const user = result[0]; // user found
        res.status(200).json({ message: "Login success", user });
    });
};





exports.registerUser = (req, res) => {
  const { name, email, password, contact, address } = req.body;
  const profile = req.file ? req.file.filename : 'profile.jpg';
  const db = dbconnect();
  
    db.connect((err) => {
      if (err) console.error("❌ DB connection failed:", err);
      else console.log("✅ Connected to TiDB Cloud!");
    });

  const sql = `INSERT INTO Users (name, email, pass, contact, address, profile) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [name, email, password, contact, address, profile];

  db.query(sql, values, (err, result) => {
    db.end();
    if (err) {
      console.error("DB Insert Error:", err);
      return res.status(500).json({ msg: "Registration failed" });
    }
    res.status(201).json({ msg: "User registered successfully" });
  });
};
