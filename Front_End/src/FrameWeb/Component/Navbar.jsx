import React, { useEffect, useState } from "react";
import "../Assets/css/Navbar.css";
import logo from "../Assets/img/logo.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Base_Url from "./api";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [Account,setAcc]=useState([]);
  const nav = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlelogout = () => {
    localStorage.removeItem("user");
    nav("/home");
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
    setAcc(JSON.parse(localStorage.getItem('user')));
  }, []);



  return (
    <>
      <nav className="navbar rounded-3 navbar-expand-lg navbar-light bg-info bg-gradient  shadow-sm px-4 py-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "40px", borderRadius: "5px" }}
            />
          </Link>

          <ul className="navbar-nav d-flex gap-3 flex-row ms-auto mb-2 ">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link to='/cart'>
              <img src={`${Base_Url}/uploads/cart.jpg`}
                  alt="uart"
                  className="rounded-circle"
                  style={{ height: "40px", width: "40px", cursor: "pointer" }} 
               />
               </Link>
            </li>
            {!isLoggedIn ? (
              <li>
                <Link to="/">
                  <button className="btn btn-warning mt-1">Log in</button>
                </Link>
              </li>
            ) : (
              <div className="ms-3 position-relative">
                <img
                  src={`${Base_Url}/uploads/${Account.profile}`}
                  alt="User"
                  className="rounded-circle"
                  style={{ height: "40px", width: "40px", cursor: "pointer" }}
                  onClick={() => setDropdown(!dropdown)}
                />
                {dropdown && (
                  <div
                    className="position-absolute bg-white shadow rounded p-2"
                    style={{ right: 0, top: "50px", zIndex: 999 }}
                  >
                    <Link className="dropdown-item" to="/account">
                      🏠 Account
                    </Link>
                    <Link className="dropdown-item" to="/orders">
                      🧾 Orders
                    </Link>
                    {/* <Link className="dropdown-item" to="/">🏠 Address</Link> */}
                    <button className="dropdown-item" onClick={handlelogout}>
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
