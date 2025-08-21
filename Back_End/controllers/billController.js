const db = require('../config/db');

exports.addBill = (req, res) => {
    const { user_id, name, email, contact, address, city, total, cart } = req.body;

    // Step 1: Insert into bill table
    const billSql = `INSERT INTO bill (user_id, name, email, contact, address, city, total) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.query(billSql, [user_id, name, email, contact, address, city, total], (err, billResult) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Insert bill error');
        }

        const billId = billResult.insertId;

        // Step 2: Insert each item into order_tbl
        const orderSql = `INSERT INTO order_tbl (bid, pid, qty, price, user_id, total) VALUES ?`;

        const orderValues = cart.map(item => [
            billId,
            item.id,
            item.quantity,
            item.price,
            user_id,
            item.quantity * item.price
        ]);

        db.query(orderSql, [orderValues], (err2) => {
            if (err2) {
                console.error(err2);
                return res.status(500).send('Insert order error');
            }

            res.send('Bill and order details saved successfully');
        });
    });
};
