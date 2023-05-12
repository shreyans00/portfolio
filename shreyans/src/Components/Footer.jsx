import React from "react";
import { NavLink } from "react-router-dom";
import fb from "../Images/icons/fb.png";
import insta from "../Images/icons/insta.png";
import twitter from "../Images/icons/twitter.png";
import linkedin from "../Images/icons/linkedin.png";
import github from "../Images/icons/github.png";
import scroller from "../Images/icons/scroll.png";

function Footer() {
  const scrollUp = document.querySelector("#scroll-up");
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="footer">
        <div className="contact">
          <div className="directCon">
            <h1>Connect with Me</h1>
            <i className="fab fa-google"> shreyansraj3@gmail.com</i>
            <br />
            <i className="fa fa-phone" aria-hidden="true">
              +91 6205 839 994
            </i>
            <div className="footer-icons">
              <NavLink to="https://www.facebook.com/shreyans.raj.16/">
                <img src={fb} alt="Facebook" />
              </NavLink>
              <NavLink to="https://www.instagram.com/shreyans_8">
                <img src={insta} alt="Instagram" />
              </NavLink>
              <NavLink to="https://twitter.com">
                <img src={twitter} alt="Twitter" />
              </NavLink>
              <NavLink to="https://www.linkedin.com/in/shreyans-9b462524a/">
                <img src={linkedin} alt="LinkedIn" />
              </NavLink>
              <NavLink to="https://github.com/shreyans00">
                <img src={github} alt="GitHub" />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="query">
          <form action="#" method="">
            <label for="name"></label>
            <input
              className="formcss"
              type="text"
              id="name"
              name="Name"
              placeholder="Your Name"
            />
            <br />
            <label for="email"></label>
            <input
              className="formcss"
              type="email"
              id="email"
              name="Email"
              placeholder="Your Email"
            />
            <br />
            <textarea
              className="formcss"
              id="message"
              name="Message"
              placeholder="Your Message"
            ></textarea>
            <br />
            <input className="submitcss" type="submit" value="Let's Connect" />
          </form>
        </div>
        <i class="scroll-up" id="scroll-up" onClick={handleScrollUp}>
          <img src={scroller} class="socicon up-arrow" alt="scroll-up" />
        </i>
      </div>
    </>
  );
}

export default Footer;
