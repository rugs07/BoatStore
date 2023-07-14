import React from "react";
import "./Footer.scss";

import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
          The boAt has an astonishing collection of earphones, earbuds, headphones, and wireless speakers that stands apart due to the quality, affordability, and world-class designs that the company offers. Founded in 2016, boAt is hailed as India's no. 1 earwear audio brand. The company allows users to experience both spirit and energy at the same time.
          BoAt has been dubbed the 5th largest wearables brand globally since December 2020.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-items">
            <div className="text">
              <FaLocationArrow /> {'  '}
              Washington DC
            </div>
          </div>
          <div className="c-items">
            <div className="text">
              <FaMobileAlt />{'  '}
              Phone: 0245 2745816
            </div>
          </div>
          <div className="c-items">
            <div className="text">
              <FaEnvelope />{'  '}
              Email: boat-store@gmail.com
            </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Airdopes</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projector</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            BUY SPEAKERS,EARPHONES,SMARTWATCHES AT INDIA'S NO.1 EARWEAR BRAND.
          </div>
          <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
