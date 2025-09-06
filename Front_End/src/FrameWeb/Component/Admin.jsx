import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Base_Url from './api';

function Admin() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]); // each product: { file, preview, name, ... }

  useEffect(() => {
    axios.get(`${Base_Url}/category/getdata`)
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  // When files selected, create preview + empty name for manual input
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newProducts = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: '',  // <-- start empty for manual typing
      description: '',
      price: '',
      ogPrice: '',
      categoryId: '',
    }));
    setProducts(newProducts);
  };

  // Update product data by index
  const handleChange = (index, field, value) => {
    const updated = [...products];
    updated[index][field] = value;
    setProducts(updated);
  };

  // Submit all products one by one
  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let i = 0; i < products.length; i++) {
      const p = products[i];
      const formData = new FormData();

      if (!p.name) {
        alert(`Please enter name for product ${i + 1}`);
        return;
      }

      formData.append('Product_Name', p.name);
      formData.append('Product_Description', p.description);
      formData.append('Product_Price', p.price);
      formData.append('Product_OG_Price', p.ogPrice);
      formData.append('Category_id', p.categoryId);
      formData.append('Product_Image', p.file);

      try {
        await axios.post(`${Base_Url}/Product/add`, formData);
      } catch (err) {
        console.error(`Failed to upload product ${p.name}`, err);
      }
    }

    alert('All products uploaded!');
    setProducts([]);
  };

  return (
    <div className="container mt-5">
      <h2>Bulk Upload with Manual Product Name</h2>

      <div className="mb-3">
        <label>Select Images</label>
        <input type="file" multiple onChange={handleImageChange} />
      </div>

      {products.length > 0 && (
        <form onSubmit={handleSubmit}>
          {products.map((p, i) => (
            <div key={i} className="border p-3 mb-3 d-flex align-items-center">
              <img src={p.preview} alt="preview" width="100" height="100" style={{ objectFit: 'contain', marginRight: '1rem' }} />
              <div style={{ flexGrow: 1 }}>
                <div className="mb-2">
                  <label>Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={p.name}
                    onChange={(e) => handleChange(i, 'name', e.target.value)}
                    placeholder="Enter product name"
                    required
                  />
                </div>

                {/* Add more inputs here if needed */}
                <div className="mb-2">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    value={p.description}
                    onChange={(e) => handleChange(i, 'description', e.target.value)}
                  />
                </div>

                <div className="mb-2">
                  <label>Price</label>
                  <input
                    type="number"
                    className="form-control"
                    value={p.price}
                    onChange={(e) => handleChange(i, 'price', e.target.value)}
                    required
                  />
                </div>

                <div className="mb-2">
                  <label>Original Price</label>
                  <input
                    type="number"
                    className="form-control"
                    value={p.ogPrice}
                    onChange={(e) => handleChange(i, 'ogPrice', e.target.value)}
                  />
                </div>

                <div className="mb-2">
                  <label>Category</label>
                  <select
                    className="form-select"
                    value={p.categoryId}
                    onChange={(e) => handleChange(i, 'categoryId', e.target.value)}
                    required
                  >
                    <option value="">-- Select Category --</option>
                    {categories.map(cat => (
                      <option key={cat.Category_id} value={cat.Category_id}>{cat.Cat_Title}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}

          <button type="submit" className="btn btn-primary">Upload All Products</button>
        </form>
      )}
    </div>
  );
}

export default Admin;
