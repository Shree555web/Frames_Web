import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Base_Url from "./api";

const Products = () => {
  const { id } = useParams(); // get category id or product id from URL
  const [data, setData] = useState([]);
  const [cat, setcat] = useState([]);
  const nav=useNavigate();


  const getData = () => {
    // if your backend supports filtering by category id via query param:
    axios
      .get(`${Base_Url}/product/category/${id}`)
      .then((res) => {
        setData(res.data);
        console.log("data fetched", res.data);
      })
      .catch((err) => {
        console.log("error fetching data", err);
      });
  };
  const getCat = () => {
    axios
      .get(`${Base_Url}/category/${id}`)
      .then((res) => {
        setcat(res.data[0]);
        console.log(
          "cat fetched",
          res.data[0].Cat_title,
          res.data[0].Cat_photo
        );
      })
      .catch((err) => {
        console.log("error fetching data", err);
      });
  };

  useEffect(() => {
    getData();
    getCat();
  }, [id]); // refetch when id changes

  // ...rest of component stays same

  const addToCart = (product) => {
    const user = localStorage.getItem("user");

    if (!user) {
      alert("Please login before adding items to cart!");
      nav("/login"); // redirect to login page
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.some((item) => item.Product_id === product.Product_id)) {
      alert(`${product.Product_Name} is already in your cart!`);
      return;
    }

    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.Product_Name} added to cart!`);
  };

  return (
    <>
      <div
        className="m-2 p-5 text-center position-relative overflow-hidden "
        style={{ height: "auto" }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url(${Base_Url}/uploads/${cat.Cat_photo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(10px)",
            zi: 1,
          }}
        ></div>
        <div className="position-relative text-light" style={{ zi: 5 }}>
          <h1 className="fw-bold text-shadow ">{cat.Cat_title} Products</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {data.map((prod) => (
              <div
                className="card mx-2 my-4"
                style={{ width: "18rem" }}
                key={prod.Product_id}
              >
                <Link to={`/product/${prod.Product_id}`}>
                  <img
                    src={`${prod.Product_Image}`}
                    className="card-img-top rounded-3"
                    alt="..."
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{prod.Product_Name}</h5>
                  <p className="card-text">Rs.{prod.Product_Price}</p>
                  <Link
                    to={`/product/${prod.Product_id}`}
                    className="btn btn-primary mx-3"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => addToCart(prod)}
                    className="btn btn-warning"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const Products = () => {
//   const [data, setData] = useState([]);

//   const getData = () => {
//     axios.get('http://localhost:3005/api/product/getdata')  // <-- fixed syntax here
//       .then(res => {
//         setData(res.data);
//         console.log("data fetched", res.data);
//       })
//       .catch(err => {
//         console.log("error fetching data", err);
//       });
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className='container'>
//       {data.map((prod) => (
//         <div key={prod.Product_id} className="card" style={{ width: "18rem" }}>
//           {/* fixed variable name here, should be prod.Product_Image */}
//           <img
//             src={`http://localhost:3005/uploads/${prod.Product_Image}`}
//             className="card-img-top"
//             alt={prod.Product_Name}
//           />
//           <div className="card-body">
//             <h5 className="card-title">{prod.Product_Name}</h5>
//             <p className="card-text">₹{prod.Product_Price}</p>
//             <a href="#" className="btn btn-primary">View</a>
//             <a href="#" className="btn btn-warning">Buy Now</a>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Products;
