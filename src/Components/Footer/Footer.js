import "./Footer.css";
import Logo from "../../img/logo.png";
import { FaFacebookSquare, FaLinkedinIn, FaTwitter, FaInstagram, FaGooglePlusG, FaGithubAlt, FaTelegramPlane, FaWhatsapp, } from "react-icons/fa";
import { NavLink, useHistory } from "react-router-dom";
import axios from "../../api/axios-firebase";
import React, { useState } from "react";

function Footer() {
  const [subscriber, setSubscriber] = useState();
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  function changeHandler(e) {
    setSubscriber({email: e.target.value});
  }

  function subscriberHandler(e) {
    e.preventDefault();
    setLoading(true);

    axios.post("/subscribers.json", subscriber)
    .finally(() => {
      setSubscriber()
      setTimeout(() => {
        setLoading(false);
        history.push("/");
      }, 3000);
    });
  }  

  return (
    <footer className="footer">
      <section className="subscribe">
        <div className="container">
          <div className="sub__content">
            <h1 className="sub__title">Newsletter Signup</h1>
            {loading ? <span className="loader">Loading</span> : <span className="loader">Sent</span>}
            <form onSubmit={subscriberHandler} className="sub__form">
              <input
                type="email"
                name="email"
                className="sub__email"
                placeholder="test@youremail.com"
                onChange={changeHandler}
              />
              <button className="btn sub__btn">SIGNUP</button>
            </form>
          </div>
        </div>
      </section>

      <section className="footer-info">
        <div className="container">
          <div className="footer-info__content">
            <div className="company">
              <h2 className="footer__title">COMPANY</h2>
              <NavLink exact to="/">
                <img src={Logo} alt="logo" className="company__logo" />
              </NavLink>
              <p className="company__text">
              The company "KONSTRUCT" is the leader in the construction market. We build residential multi-storey buildings, commercial facilities, cultural and social facilities, bridges, roads, tunnels, we do the reconstruction of buildings and structures.
              </p>
            </div>

            <div className="footer-links">
              <h2 className="footer__title">LINKS</h2>
              <div className="footer__links">
                <NavLink exact to="/" className="footer__link">
                  Home
                </NavLink>
                <NavLink to="/story" className="footer__link">
                  About
                </NavLink>
                <NavLink to="/services" className="footer__link">
                  Service
                </NavLink>
                <NavLink to="/work" className="footer__link">
                  Projects
                </NavLink>
                <NavLink to="/contact" className="footer__link">
                  Contact us
                </NavLink>
              </div>
            </div>

            <address className="address">
              <h2 className="footer__title">CONTACT US</h2>
              <p className="address__name">
                225 Chui Street, Bishkek City, Kyrgyzstan              </p>
              <p className="address__number">+23 994 233 0422</p>
              <p className="address__email"><span className="blue-email">info@konstruct.com</span></p>
            </address>

            <div className="socials">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="social__link"
              >
                <FaFacebookSquare className="social__icon" />
              </a>
              <a
                href="https://ru.linkedin.com/"
                target="_blank"
                className="social__link"
              >
                <FaLinkedinIn className="social__icon" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="social__link"
              >
                <FaTwitter className="social__icon" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="social__link"
              >
                <FaInstagram className="social__icon" />
              </a>
              <a
                href="https://www.google.ru/"
                target="_blank"
                className="social__link"
              >
                <FaGooglePlusG className="social__icon" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                className="social__link"
              >
                <FaGithubAlt className="social__icon" />
              </a>
              <a
                href="https://web.telegram.org/"
                target="_blank"
                className="social__link"
              >
                <FaTelegramPlane className="social__icon" />
              </a>
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                className="social__link"
              >
                <FaWhatsapp className="social__icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-bottom">
        <div className="container">
          <h3 className="footer-bottom__title">
            © 2021 Konstruct Inc. Designed by Isaev Bekjan
          </h3>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
