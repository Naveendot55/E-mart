import React from 'react';

/**
 * Footer - 4-column responsive footer with social links and newsletter
 * Columns: About Us, Customer Service, Categories, Follow Us
 * Includes newsletter signup and copyright with dynamic year
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="emart-footer">
      <div className="footer-grid">
        {/* About Us */}
        <div className="footer-col">
          <h4>About E‑mart</h4>
          <p>
            Your premier destination for premium fashion, lifestyle, and gourmet
            products. We curate the best from around the world to bring you
            quality you can trust.
          </p>
        </div>

        {/* Customer Service */}
        <div className="footer-col">
          <h4>Customer Service</h4>
          <ul className="footer-links">
            <li><a href="#"><i className="fas fa-headset"></i> Contact Us</a></li>
            <li><a href="#"><i className="fas fa-truck"></i> Shipping Info</a></li>
            <li><a href="#"><i className="fas fa-undo"></i> Returns & Exchanges</a></li>
            <li><a href="#"><i className="fas fa-question-circle"></i> FAQ</a></li>
            <li><a href="#"><i className="fas fa-ruler"></i> Size Guide</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-col">
          <h4>Categories</h4>
          <ul className="footer-links">
            <li><a href="#">Women's Fashion</a></li>
            <li><a href="#">Men's Fashion</a></li>
            <li><a href="#">Gourmet Food</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Sale Items</a></li>
          </ul>
        </div>

        {/* Follow Us & Newsletter */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <h4>Newsletter</h4>
          <p style={{ marginBottom: '0.5rem' }}>Get exclusive deals and updates</p>
          <div className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Your email"
              aria-label="Email for newsletter"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © {currentYear} <span>E‑mart</span>. All rights reserved. Crafted with{' '}
        <i className="fas fa-heart" style={{ color: 'var(--warm)' }}></i> by E‑mart Team.
      </div>
    </footer>
  );
}

export default Footer;
