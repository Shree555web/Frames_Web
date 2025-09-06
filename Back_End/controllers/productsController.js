const dbconnect = require("../config/db");

exports.addProduct = (req, res) => {
  const {
    Product_Name,
    Product_Description,
    Product_Price,
    Product_OG_Price,
    Category_id,
  } = req.body;

  const Product_Image = req.file ? req.file.filename : null;
  const db = dbconnect();

  db.connect((err) => {
    if (err) console.error("❌ DB connection failed:", err);
    else console.log("✅ Connected to TiDB Cloud!");
  });

  const sql = `
    INSERT INTO product (
      Product_Name, Product_Description, Product_Price, Product_OG_Price, Product_Image, Category_id
    ) VALUES (?, ?, ?, ?, ?, ?)`;

  const values = [
    Product_Name,
    Product_Description,
    Product_Price,
    Product_OG_Price,
    Product_Image,
    Category_id,
  ];

  db.query(sql, values, (err, result) => {
    db.end();
    if (err) {
      console.error("Product insert error:", err);
      return res.status(500).send("Insert error");
    }
    res.send("Product added successfully");
  });
};

// ✅ Get all products by category ID
exports.getProduct = (req, res) => {
  const categoryId = req.params.categoryId;
  const query = "SELECT * FROM product WHERE Category_id = ?";
  const db = dbconnect();

  db.connect((err) => {
    if (err) console.error("❌ DB connection failed:", err);
    else console.log("✅ Connected to TiDB Cloud!");
  });

  db.query(query, [categoryId], (err, results) => {
    
    if (err) return res.status(500).send(err);

    // ✅ Modify each image path
    const updatedResults = results.map((product) => {
      return {
        ...product,
        Product_Image: `http://localhost:3005/api/uploads/${product.Product_Image}`,
      };
    });

    res.json(updatedResults);
  });
  db.end();
};

// exports.getProduct = (req, res) => {
//   const categoryId = req.params.categoryId;
//   const query = "SELECT * FROM product WHERE Category_id = ?";

//   const product = result[];
//   product.Product_Image = `http://localhost:3005/uploads/${product.Product_Image}`;

//   db.query(query, [categoryId], (err, results) => {
//     if (err) return res.status(500).send(err);
//     res.json(results);
//   });
// };

// ✅ Get Product by ID
exports.getProductById = (req, res) => {
  const id = req.params.id;
  const db = dbconnect();
  
    db.connect((err) => {
      if (err) console.error("❌ DB connection failed:", err);
      else console.log("✅ Connected to TiDB Cloud!");
    });

  db.query("SELECT * FROM product WHERE Product_id=?", [id], (err, result) => {
    if (err) return res.status(500).send("DB error"), console.log(err);

    if (result.length === 0) return res.status(404).send("Not found");

    const product = result[0];
    product.Product_Image = `http://localhost:3005/api/uploads/${product.Product_Image}`;

    res.json(product);
  });
  db.end();
};
