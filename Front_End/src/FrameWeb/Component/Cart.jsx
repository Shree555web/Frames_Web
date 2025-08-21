import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import CheckoutPg from "../Pages/CheckoutPg";
import { Link, useNavigate } from "react-router-dom";
// import CheckoutPg from "../Pages/CheckoutPg";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    console.log(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const saveCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.Product_id !== id);
    saveCart(updatedCart);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.Product_id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    saveCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.Product_id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    saveCart(updatedCart);
  };

  //   const totalAmount = cart.reduce(
  //     (total, item) => total + item.price * item.quantity,
  //     0
  //   );

  //   const handleCheckout = () => {
  //     if (cart.length === 0) {
  //       alert("Your cart is empty! Add items before checkout.");
  //       return;
  //     }
  //     navigate("/checkout", { state: { cart, totalAmount } });
  //   };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.Product_Price * item.quantity,
    0
  );

  return (
    <Container className="my-4">
      <Row>
        {/* Cart Items */}
        <Col md={8}>
          <h5>Cart ({cart.length} items)</h5>
          {cart.map((item) => (
            <Card className="mb-3" key={item.Product_id}>
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={2}>
                    <img
                      src={`${item.Product_Image}`}
                      alt={item.Product_Name}
                      width="80"
                    />
                  </Col>
                  <Col xs={6}>
                    <h6>{item.name}</h6>
                    <p className="mb-1">Quantity: {item.quantity}</p>
                    <strong>₹ {item.Product_Price}</strong>
                  </Col>
                  <Col xs={2} className="text-center">
                    <div className="d-flex justify-content-center align-items-center gap-2 me-2">
                      <Button
                        variant="warning"
                        onClick={() => decreaseQuantity(item.Product_id)}
                        size="sm"
                      >
                        -
                      </Button>
                      <span >{item.quantity}</span>
                      <Button
                        variant="warning"
                        onClick={() => increaseQuantity(item.Product_id)}
                        size="sm"
                      >
                        +
                      </Button>
                      <Button
                        variant="warning"
                        onClick={() => removeItem(item.Product_id)}
                        size="sm"
                      >
                        Remove
                      </Button>
                    </div>
                  </Col>
                  <Col xs={2} className="text-end">
                    <p>Sub Total: {item.Product_Price * item.quantity}</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>

        {/* Cart Summary */}
        <Col md={4}>
          <Card>
            <Card.Body>
              <h6>The total amount of</h6>
              <Row className="mb-2">
                <Col>Subtotal</Col>
                <Col className="text-end">₹ {subtotal}</Col>
              </Row>
              <Row className="mb-2">
                <Col>Shipping</Col>
                <Col className="text-end">Free</Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <strong>Total</strong>
                </Col>
                <Col className="text-end">
                  <strong>₹ {subtotal}</strong>
                </Col>
              </Row>
              <Link to="/che">
                <Button variant="warning" className="w-100 mb-3">
                  Go To Checkout
                </Button>
              </Link>
              {/* <div className="d-flex">
                <Form.Control placeholder="Discount code (optional)" />
                <Button variant="warning"   className="ms-2">
                  Apply
                </Button>
              </div> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
