import React from 'react';
import '../Assets/css/About.css'
import aboutVideo from '../Assets/video/aboutVid.mp4';
import Images from '../Assets/img/logo.jpeg'
export default function About() {
  return (
    <>


      <div className="ratio ratio-16x9">
        <video className="aboutVid" autoPlay loop muted id="video">
          <source src={aboutVideo} type="video/mp4" style={{
            position:
              'relative'
          }} />
        </video>
        <div>
          <h1 style={{ position: 'absolute', color: "white", fontWeight: "700", paddingTop: "500px", paddingLeft: "50px", fontSize: "80px" }}>Eyewear for All<br />
            More Eyewear for Each</h1>

        </div>

      </div>
      {/* <hr /> */}

      <div className="marque">
        <marquee><h4 className="blinking-text">Frames as Unique as You Are😎</h4></marquee>
      </div>
      <div className="head-about">
        <hr />
        <section className="bg-light">
          <nav className="container" aria-label="breadcrumb ms-5">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">About</li>
            </ol>
          </nav>
        </section>
        <h4>ABOUT OUR JOURNEY</h4>
      </div>
      <hr />
      <section className="success-secrets">
        <h5><center>Success Secrets</center></h5>
        <p className="success-text">
          <center>
            Our secret to success? A deep commitment to doing one thing better than anyone else—never compromising on quality or clarity, no matter the cost.
            We stayed focused on their core values. While others chased trends, they perfected their process.
            We never rushed. Every frame was made with care, because the team believed that quality isn’t just seen.
          </center>
        </p>
      </section>
      <br />
      <section className="About-sec">
        <div className="About-img">
          <img className='ab-img1' src={Images} alt='simple' />
        </div>
        <div className="About">
          <h4>ABOUT US</h4>
          <p>On *15th August 2025, We—Samarth, Shree, Sachin, and Sandeep—turned a shared passion into a bold business idea:
            to create a framing company that delivers more than just frames—it delivers *clarity and quality in every memory.

            We called it *Infinity*—a name that reflects timeless moments and limitless creativity.

            With no outside funding and just a clean website, we launched their web-based platform,
            focused on what most companies overlooked: *perfect image clarity and top-tier frame quality*.
            Customers could upload their photos, select a frame style, and get museum-grade prints shipped directly to their door.

            Our *secret to success? A deep commitment to doing one thing better than anyone else—never compromising on quality or clarity*,
            no matter the cost.

            Word spread quickly. In just weeks, Infinity earned a reputation for delivering frames that didn’t just look good—they felt right.
            Customers returned, not just for products, but for the trust Infinity built around preserving life’s most important moments.

            What started as a shared dream between four friends is now a rising brand built on precision, passion, and a promise:
            *every memory deserves to be framed perfectly*.
          </p>
        </div>
      </section>
      <br />
      <br />
      <div className="nor-text">
        <p><center>With skilled artisans and ethically sourced materials, we take pride in offering frames that not only looks beautiful but also feels meaningful. Our attention to detail, quality, and authenticity is at the heart of everything we do.

          {/* <p><center></center></p> */}
          <br />
          As a brand, we are inspired by the men and women who wear our frames — confident, expressive, and timeless. From everyday elegance to unforgettable occasions, we offer pieces that complement every chapter of your story.
        </center> </p>
      </div>
      <br />








      <section className="container my-5">
        <h4 className="text-center">Why Choose Us?</h4>
        <p className="text-center">We know you have many choices — here’s why our customers choose us time and time again!!!</p>
        <br />
        <div className="row">
          <div className="col-6">
            <div>
              <h5 className="bg-light py-2">✨ Exquisite Craftsmanship</h5>
              <p className="text-dark">Each piece is handcrafted with precision and passion by skilled artisans, blending traditional techniques with modern designs.</p>
            </div>
            <div className="mt-5">
              <h5 className="bg-light py-2">💎 Premium Quality</h5>
              <p className="text-dark">We use only high-quality, ethically sourced materials — from certified gemstones to pure metal, fiber, rubber, and plastic.</p>
            </div>
            <div className="mt-5">
              <h5 className="bg-light py-2">❤️ Timeless Designs</h5>
              <p className="text-dark">Our collections are thoughtfully curated to suit every occasion — from daily wear to once-in-a-lifetime celebrations.</p>
            </div>
          </div>
          <div className="col-6">
            <div>
              <h5 className="bg-light py-2">✅ Trust & Transparency</h5>
              <p className="text-dark">We believe in honest pricing, genuine certifications, and clear communication. No hidden costs, no compromises.</p>
            </div>
            <div className="mt-5">
              <h5 className="bg-light py-2">⭐ Customer-Centric Approach</h5>
              <p className="text-dark">Your satisfaction is our priority. Our responsive support team is always here to help, guide, and celebrate with you.</p>
            </div>
            <div className="mt-5">
              <h5 className="bg-light py-2">🎁 Elegant & Sustainable Packaging</h5>
              <p className="text-dark">Every order is carefully packed in eco-friendly, luxurious boxes — perfect for gifting and designed to protect your precious frames.</p>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}