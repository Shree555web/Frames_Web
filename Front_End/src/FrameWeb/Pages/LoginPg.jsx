import React, { useState } from "react";
import "../Assets/css/LoginPg.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPg = () => {
  const [user, setUser] = useState(null);
  const [formdata, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3005/api/login`, formdata)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setUser(res.data.user);
          console.log(res.data.user);
          alert("Login successful");
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log("Error", err);
        alert("Login failed");
      });
  };

  return (
    <div className="master">
      <div className="mainlogin text-center">
        <h2>Login into Your Account</h2>
        <input
          className="email"
          type="email"
          name="email"
          value={formdata.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <input
          className="pass"
          type="password"
          name="password"
          value={formdata.password}
          placeholder="Password"
          onChange={handleChange}
        />

        <button className="loginbtn " 
        style={{background: 'linear-gradient(150deg, #478cd19d, #c248eb)',
        cursor: 'pointer'}}
         onClick={handleSubmit}>
          Login
        </button>
        <Link  to="/reg">
          <p className="mt-3">We Don't Have Ac Register</p>
        </Link>
      </div>
    </div>
  );
};

export default LoginPg;

// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Container, Row, Col } from 'react-bootstrap';

// const LoginPg= () => {

//   return (
//     <Container className="py-5">
//       <Row className="justify-content-center">
//         <Col xs={12} sm={10} md={8} lg={6}>
//           <div className="p-4 bg-white rounded shadow border">
//             <h3 className="text-center mb-4">Register Student</h3>
//             <Form  encType="multipart/form-data">
//               <Form.Group className="mb-3">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control type="text" name="name" required />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control type="email" name="email"  required />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" name="password"  required />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Contact</Form.Label>
//                 <Form.Control type="text" name="contact"  required />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Address</Form.Label>
//                 <Form.Control as="textarea" name="address"  required />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Profile Image</Form.Label>
//                 <Form.Control type="file" accept="image/*"  />
//               </Form.Group>

//               <div className="text-center">
//                 <Button variant="primary" type="submit">Register</Button>
//               </div>
//             </Form>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LoginPg;
