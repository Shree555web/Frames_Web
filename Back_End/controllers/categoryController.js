// controllers/registrationController.js
const db = require('../config/db');

// ✅ Add new registration with image
exports.addCategory = (req, res) => {
    const { cattitle, catdesc} = req.body;
    const Cat_Photo = req.file ? req.file.filename : '';

    const sql = `INSERT INTO Category (Category_id, Cat_Title, Cat_Description, Cat_Photo) 
                VALUES ('',"${cattitle}", "${catdesc}","${Cat_Photo}")`;

    db.query(sql, (err, result) => {
        if (err) res.status(500).send('Insert error'),console.error("Insert error:", err);
        else res.send('Category added successfully');
    });
};

// ✅ Get all users
exports.getCategory = (req, res) => {
    db.query("SELECT * FROM Category", (err, result) => {
        if (err) return res.status(500).send("DB error");
        res.json(result);
    });
};

// ✅ Get single user
exports.getcatinfo = (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM category WHERE Category_id = ?", [id], (err, result) => {
        if (err) return res.status(500).send("DB error"),console.log(err);
        res.json(result);
    });
};


// exports.catname = (req, res) => {
//   const categoryId = req.params.id;
//   const query = 'SELECT Category_Name FROM category WHERE Category_id = ?';

//   db.query(query, [categoryId], (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: 'Database query error' });
//     }
//     if (results.length === 0) {
//       return res.status(404).json({ error: 'Category not found' });
//     }
//     res.json(results[0]);  // e.g. { Category_Name: "Men's Section" }
//   });
// });



// // ✅ Update user (with optional image)
// exports.updateUser = (req, res) => {
//     const id = req.params.id;
//     const { name, email, password, contact, address } = req.body;
//     const profile = req.file ? req.file.filename : null;

//     let sql = `UPDATE registration SET
//              name='${name}', email='${email}', password='${password}',
//              contact='${contact}', address='${address}'`;

//     if (profile) {
//         sql += `, profile='${profile}'`;
//     }

//     sql += ` WHERE id=${id}`;

//     db.query(sql, (err, result) => {
//         if (err) res.status(500).send('Update error');
//         else res.send('User updated');
//     });
// };

// // ✅ Delete user
// exports.deleteUser = (req, res) => {
//     const id = req.params.id;
//     const sql = `DELETE FROM registration WHERE id=${id}`;

//     db.query(sql, (err, result) => {
//         if (err) res.status(500).send('Delete error');
//         else res.send('User deleted');
//     });
// };