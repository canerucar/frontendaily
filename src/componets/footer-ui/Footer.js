import React from 'react'
import './index.scss';
import facebook from 'assets/facebook.svg';
import twitter from 'assets/twitter.svg';
import instagram from 'assets/instagram.png';

function Footer() {
  return (
    <div className="f-w">
      <section className="footer-wrapper">
        <div className="footer-wrapper-item">
          <ul className="footer-wrapper-item__title">
            <li className="title">INFO</li>
            <li className="list"><a href="/#">Formats</a></li>
            <li className="list"><a href="/#">Compression</a></li>
            <li className="list"><a href="/#">Pricing</a></li>
            <li className="list"><a href="/#">FAQ</a></li>
            <li className="list"><a href="/#">Status</a></li>
          </ul>
        </div>
        <div className="footer-wrapper-item">
          <ul className="footer-wrapper-item__title">
            <li className="title">RESOURCES</li>
            <li className="list"><a href="/#">Developer API</a></li>
            <li className="list"><a href="/#">Tools</a></li>
            <li className="list"><a href="/#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-wrapper-item">
          <ul className="footer-wrapper-item__title">
            <li className="title">COMPANY</li>
            <li className="list"><a href="/#">About Us</a></li>
            <li className="list"><a href="/#">Sustainability</a></li>
            <li className="list"><a href="/#">Terms of Service</a></li>
            <li className="list"><a href="/#">Privacy</a></li>
          </ul>
        </div>
        <div className="footer-wrapper-item__social">
          <div className="subscribe">
            <p>Subscribe to our email newsletter</p>
            <input name="subscribe" placeholder="Your email" />
            <button>SUBSCRIBE</button>
          </div>
          <div className="social">
            <p>Follow us</p>
            <div className="social-w">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={instagram} alt="instagram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
