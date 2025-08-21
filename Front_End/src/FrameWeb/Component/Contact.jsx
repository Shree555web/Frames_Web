import React, { useState, useEffect } from 'react';
import '../Assets/css/contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
    address: ''
  });

  const [animClass, setAnimClass] = useState('');

  useEffect(() => {
    // Add animation class after component mounts
    const timer = setTimeout(() => {
      setAnimClass('fade-in'); // You can define this class in your CSS
    }, 100); // Delay optional

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Handle form submission here
  };

  return (
    <div className='mainregdiv'>
      <div className={`register-container ${animClass}`}>
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <textarea className="textarea"
            name="contact"
            rows="4"
            cols="50"
            placeholder="Enter your message here..."
            value={form.contact}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            required
          />

          <button type="submit">Contact</button>
        </form>
      </div>
    </div>
);
}

