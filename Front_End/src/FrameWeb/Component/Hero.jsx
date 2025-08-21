import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/css/main.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Hero() {
  const [data, setdata] = useState([]);

  const getdata = () => {
    axios
      .get("http://localhost:3005/api/category/getdata")
      .then((res) => {
        setdata(res.data);
        console.log("data fetched", res.data);
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide mx-3"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {data.map((data, i) => (
            <div
              className={`carousel-item ${i === 0 ? "active" : ""}`}
              key={data.Category_id}
              style={{
                position: "relative",
              }}
            >
              <img
                src={`http://localhost:3005/uploads/${data.Cat_Photo}`}
                className="d-block w-100 "
                alt={data.Cat_Title}
                style={{
                  // filter: 'blur(5px)',
                  height: "30%",
                  objectFit: "cover",
                }}
              />

              {/* Text over image */}
              <div
                className="carousel-caption d-block text-white"
                style={{ position: "absolute", top: "70%" }}
              >
                <h1 className="fw-bold text-shadow ">{data.Cat_Title}</h1>
                <div className="my-5">
                  <Link
                    to={`/products/${i + 1}`}
                    className="btn btn-warning"
                  >
                    Explore
                  </Link>
                  {/* <button className="btn btn-dark">Products</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <div
        className="m-2 p-5 text-center position-relative overflow-hidden "
        style={{ height: "auto" }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: "url(src/FrameWeb/Assets/img/logo.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(10px)",
            zi: 1,
          }}
        ></div>
        <div className="position-relative text-light" style={{ zi: 5 }}>
          <h1 className="fw-bold text-shadow">Category Section</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {data.map((cat) => (
              <div
                className="card mx-2 my-4"
                style={{ width: "18rem" }}
                key={cat.Category_id}
              >
                <Link
                  to={`/products/${cat.Category_id}`}
                  className="btn btn-primary"
                >
                  <img
                    src={`http://localhost:3005/uploads/${cat.Cat_photo}`}
                    className="card-img-top rounded-3"
                    alt="..."
                  />
                </Link>

                <div className="card-body">
                  <h5 className="card-title">{cat.Cat_title}</h5>
                  <p className="card-text">{cat.Cat_description}</p>
                  <Link
                    to={`/products/${cat.Category_id}`}
                    className="btn btn-warning"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
