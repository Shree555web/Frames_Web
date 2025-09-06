import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  ListGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_Url from "./api";
const Checkout = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("user")));
    setdata(JSON.parse(localStorage.getItem("user")));
  }, []);

  const [User, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Mumbai");
  const [subTotal, setSubTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    console.log(savedCart);

    // Calculate subtotal
    let total = 0;
    savedCart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setSubTotal(total);
  }, []);

  const calcTotal = () => {
    let total = cart.reduce(
      (sum, item) => sum + item.Product_Price * item.quantity,
      0
    );
    let discount = total * 0.1; // 10% discount
    let tax = 2;
    return total - discount + tax;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const billData = {
      user_id: User.id,
      name: User.name,
      email: User.email,
      contact: User.contact,
      address,
      city,
      total: calcTotal(),
      cart: cart.map((item) => ({
        id: item.Product_id, // pid
        quantity: item.quantity,
        price: item.Product_Price,
      })),
    };

    axios
      .post(`${Base_Url}/bill`, billData)
      .then((res) => {
        alert("Bill saved successfully");
        localStorage.removeItem("cart"); // clear cart after checkout
        setCart([]);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.Product_Price * item.quantity,
    0
  );

  // const Total = cart.reduce(
  //   (sum, item) => sum + item.Product_Price * item.quantity * 0.9 + 2,
  //   0
  // );
  return (
    <Container className="mt-4">
      <Row>
        {/* Billing Address */}
        <Col md={7}>
          <Card>
            <Card.Header className="bg-warning bg-gradient text-dark fw-bold">
              Billing Address
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    defaultValue={data.name}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    defaultValue={data.email}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Contact Number *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter number"
                    defaultValue={data.contact}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Address *</Form.Label>
                  <Form.Control type="text" placeholder={data.address} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>City *</Form.Label>
                  <Form.Select defaultValue="Mumbai">
                    <option>Mumbai</option>
                    <option>Pune</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="warning" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Shopping cart & Order */}

        <Col md={5}>
          {/* Shopping Cart */}
          <Card className="mb-3 bg-warning">
            <Card.Header className="fw-bold">Shopping cart</Card.Header>
            {cart.map((item) => (
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {item.Product_Name}
                  <div className="d-flex  justify-content-between">
                    <small>Qty: {item.quantity}</small>
                    <span className="text-warning fw-bold">₹{item.Product_Price}</span>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            ))}
          </Card>

          {/* Order Summary */}
          <Card className="bg-warning">
            <Card.Header className="fw-bold">Your order</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Sub Total</span> <span>₹{subtotal}</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Discount</span> <span>10%</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Tax</span> <span>₹2</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between fw-bold">
                <span>Total</span> <span>₹{calcTotal()}</span>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
