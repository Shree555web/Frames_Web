const db = require('../config/db');
// Add new user
exports.addStudent = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const per = req.body.per;
    const sql = `INSERT INTO student (name, email,per) VALUES ('${name}', '${email}','${per}')`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log('Error inserting user:', err);
            res.status(500).send('Database error');
        } else {
            res.send('Student added successfully!');
        }
    });
};
//get student by id
exports.getStudentById = (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM student WHERE id = ${id}`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log('Error fetching student:', err);
            res.status(500).send('Database error');
        } else {
            if (result.length > 0) {
                res.json(result[0]); // return single student
            } else {
                res.status(404).send('Student not found');
            }
        }
    });
};

//  Update student
exports.updateStudent = (req, res) => {
    const id = req.params.id;
    const { name, email, per } = req.body;
    const sql = `UPDATE student SET name='${name}', email='${email}', per='${per}' WHERE id=${id}`;
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send('Update error');
        } else {
            res.send('Student updated');
        }
    });
};

//  Delete student
exports.deleteStudent = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM student WHERE id=${id}`;
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send('Delete error');
        } else {
            res.send('Student deleted');
        }
    });
};