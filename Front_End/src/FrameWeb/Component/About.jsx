import React from 'react';
import aboutVideo from '../Assets/video/aboutVid.mp4';
import Images from '../Assets/img/logo.jpeg';

export default function About() {
  return (
    <>
      {/* ================= HERO VIDEO SECTION ================= */}
      <div className="ratio ratio-16x9 position-relative">
        {/* Background video fills the container */}
        <video className="w-100 h-100 object-fit-cover" autoPlay loop muted>
          <source src={aboutVideo} type="video/mp4" />
        </video>

        {/* Overlay heading text on video */}
        <div className="position-absolute top-50 start-0  ps-5">
          <h1 className="text-white fw-bold display-1">
            Eyewear for All <br />
            More Eyewear for Each
          </h1>
        </div>
      </div>

      {/* ================= MARQUEE SECTION ================= */}
      {/* Used Bootstrap bg-dark + text-info instead of .marque CSS */}
      <div className="py-3 text-center bg-dark text-info fw-bold">
        <marquee>
          <h4 className="fw-bold">Frames as Unique as You Are 😎</h4>
        </marquee>
      </div>

     

      {/* Heading after breadcrumb */}
      <div className="container py-4 text-center">
        <h4 >ABOUT OUR JOURNEY</h4>
      </div>

      {/* ================= SUCCESS SECRETS SECTION ================= */}
      {/* Replaced .success-text padding with Bootstrap px-5 */}
      <section className="container text-center my-5">
        <h5>Success Secrets</h5>
        <p className="px-5">
          Our secret to success? A deep commitment to doing one thing better than anyone else—never compromising on quality or clarity, no matter the cost.
          We stayed focused on their core values. While others chased trends, they perfected their process.
          We never rushed. Every frame was made with care, because the team believed that quality isn’t just seen.
        </p>
      </section>

      {/* ================= ABOUT US SECTION ================= */}
      {/* Replaced .About-sec (flexbox) with Bootstrap flex utilities */}
      <section className="container d-flex flex-column flex-lg-row align-items-center gap-4 my-5">
        {/* Image block */}
        <div className="flex-shrink-0">
          <img
            className="img-fluid rounded-5 shadow-lg"
            src={Images}
            alt="simple"
            style={{ maxWidth: '500px', transition: 'transform 0.3s' }}
            // Hover effect to mimic CSS transform: scale(1.1)
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </div>

        {/* Text block */}
        <div>
          <h4>ABOUT US</h4>
          <p>
            On <b>15th August 2025</b>, We Samarth, Shree, Sachin, and Sandeep turned a shared passion into a bold business idea:
            to create a framing company that delivers more than just frames—it delivers <b>clarity and quality in every memory</b>.
            <br /><br />
            We called it <b>Infinity</b>—a name that reflects timeless moments and limitless creativity.
            <br /><br />
            With no outside funding and just a clean website, we launched our web-based platform,
            focused on what most companies overlooked: <b>perfect image clarity and top-tier frame quality</b>.
            Customers could upload their photos, select a frame style, and get museum-grade prints shipped directly to their door.
            <br /><br />
            Our secret to success? A deep commitment to doing one thing better than anyone else—never compromising on quality or clarity, no matter the cost.
          </p>
        </div>
      </section>

      {/* ================= GENERAL TEXT SECTION ================= */}
      {/* Replaced .nor-text with container + px-5 */}
      <section className="container my-5 text-center px-5">
        <p>
          With skilled artisans and ethically sourced materials, we take pride in offering frames that not only look beautiful but also feel meaningful. 
          Our attention to detail, quality, and authenticity is at the heart of everything we do.
        </p>
        <p>
          As a brand, we are inspired by the men and women who wear our frames — confident, expressive, and timeless. 
          From everyday elegance to unforgettable occasions, we offer pieces that complement every chapter of your story.
        </p>
      </section>

      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section className="container my-5 text-center">
        <h4 >Why Choose Us?</h4>
        <p >
          We know you have many choices — here’s why our customers choose us time and time again!!!
        </p>

        {/* Two-column layout using Bootstrap row/col */}
        <div className="row mt-4">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="mb-5">
              <h5 className="bg-light py-2 px-2">✨ Exquisite Craftsmanship</h5>
              <p>Each piece is handcrafted with precision and passion by skilled artisans, blending traditional techniques with modern designs.</p>
            </div>
            <div className="mb-5">
              <h5 className="bg-light py-2 px-2">💎 Premium Quality</h5>
              <p>We use only high-quality, ethically sourced materials — from certified gemstones to pure metal, fiber, rubber, and plastic.</p>
            </div>
            <div>
              <h5 className="bg-light py-2 px-2">❤️ Timeless Designs</h5>
              <p>Our collections are thoughtfully curated to suit every occasion — from daily wear to once-in-a-lifetime celebrations.</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="mb-5">
              <h5 className="bg-light py-2 px-2">✅ Trust & Transparency</h5>
              <p>We believe in honest pricing, genuine certifications, and clear communication. No hidden costs, no compromises.</p>
            </div>
            <div className="mb-5">
              <h5 className="bg-light py-2 px-2">⭐ Customer-Centric Approach</h5>
              <p>Your satisfaction is our priority. Our responsive support team is always here to help, guide, and celebrate with you.</p>
            </div>
            <div>
              <h5 className="bg-light py-2 px-2">🎁 Elegant & Sustainable Packaging</h5>
              <p>Every order is carefully packed in eco-friendly, luxurious boxes — perfect for gifting and designed to protect your precious frames.</p>
            </div>
          </div>
        </div>
      </section>

      <hr />
    </>
  );
}
