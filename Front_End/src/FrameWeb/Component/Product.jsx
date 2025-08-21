import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Base_Url from "./api";

// import '../assets/Css/Product1.css';
// import Images from '../assets/images/img4.webp';

const Product = () => {
  const { id } = useParams(); // get product id or product id from URL
  const [data, setData] = useState([]);
  // const nav=useNavigate();

  const getData = () => {
    // if your backend supports filtering by product id via query param:
    axios
      .get(`${Base_Url}/api/product/${id}`)
      .then((res) => {
        setData(res.data);
        console.log("data fetched", res.data);
      })
      .catch((err) => {
        console.log("error fetching data", err);
      });
  };

  const addToCart = (product) => {
    const user = localStorage.getItem("user");

    if (!user) {
      alert("Please login before adding items to cart!");
      nav("/"); // redirect to login page
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
    nav("/cart");
  };

  useEffect(() => {
    getData();
  }, [id]); // refetch when id changes

  // ...rest of component stays same

  return (
    <>
      <div>
        {data && (
          <div className="container my-5">
            <div className="row align-items-start">
              <div className="col-md-6 text-center">
                <div className="image-container mx-auto mb-3">
                  <img
                    src={data.Product_Image}
                    alt="Product"
                    className="img-fluid product-image rounded-5"
                  />
                </div>
                <div className="d-flex justify-content-center gap-3 my-2">
                  <button
                    onClick={() => addToCart(data)}
                    className="btn btn-warning"
                  >
                    Add to Cart
                  </button>
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>

              <div className="col-md-6 ">
                <h2 className="mb-3">{data.Product_Name}</h2>
                <p className="text mt-5">{data.Product_Description}</p>

                <h2 className="text-dark mt-5">Offer: ₹{data.Product_Price}</h2>
                <h4 className="text-muted">
                  <del>M.R.P: ₹{data.Product_OG_Price}</del>
                </h4>

                <br />
                <br />

                <div className="offers mt-4">
                  <h5>Available Offers</h5>
                  <ul className="list-unstyled">
                    <li>
                      🔹 <strong>Bank Offer:</strong> 5% cashback on Flipkart
                      Axis Bank Credit Card up to ₹4,000 per statement quarter{" "}
                      <a href="#">T&C</a>
                    </li>
                    <li>
                      🔹 <strong>Bank Offer:</strong> 5% cashback on Axis Bank
                      Flipkart Debit Card up to ₹750 <a href="#">T&C</a>
                    </li>
                    {/* <li>🔹 <strong>Bank Offer:</strong> 10% off up to ₹1,500 on BOBCARD EMI Transactions (6+ months, Min ₹7,500) <a href="#">T&C</a></li> */}
                    <li>
                      🔹 <strong>Combo Offer:</strong> Buy 2 items save 5%; Buy
                      3 save 7%; Buy 4+ save 10%{" "}
                      <a href="#">See all products</a> <a href="#">T&C</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
