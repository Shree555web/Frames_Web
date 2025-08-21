import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
 

function Footer() {
  return (
    <footer className="text-light pt-5 rounded-4" style={{  background: 'linear-gradient(200deg, rgb(67, 151, 119), rgb(211, 78, 193))'}}>
      <Container>


        {/* Footer Links */}
        <Row className="text-start">
          <Col md={3}>
            <h6>Vibe<span className='text-warning'>Spectacles</span></h6>
            <p>Our Vision To Provide Good Looking Plus Durable  Spectacle Frames</p>
            <div className="d-flex gap-2">
              <i className="bi bi-instagram"></i>
              <i className="bi bi-github"></i>
              <i className="bi bi-whatsapp"></i>
              <i className="bi bi-telephone"></i>
            </div>
          </Col>
          <Col md={3}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/service" className="text-light text-decoration-none">Service Policy</Link></li>
              <li><Link to="/policy" className="text-light text-decoration-none">Return Policy</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Contacts</h6>
            <p>
              Address: Aaplya gharachya baher<br />
              Phone: likh 98971 uske aaage dumdika dum,dum,dum<br />
              Email: Vibeframes@gmail.com<br />
              Website: VibeSpectacles.com
            </p>
          </Col>
          <Col md={3}>
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="#!" className="text-light text-decoration-none">
                  We Create Happyness On Everyones face By creating As good as frames<br />
                  <small>July 12, 2020</small>
                </Link>
              </li>
              <li className="mt-3">
                <Link to="#!" className="text-light text-decoration-none">
                  Our Company Is In Your service Since<br />
                  <small className='text-warning'>Aug 15, 2025</small>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Bottom Line */}
        <hr className="bg-light mt-4" />
        <Row>
          <Col className="text-center pb-3">
            <small>
              © 2020 VibeSpectacles. All Rights Reserved | Design by <a href="" className="text-decoration-none text-warning">4S,Team</a>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
