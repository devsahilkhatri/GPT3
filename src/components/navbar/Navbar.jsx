import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#wgpt3">What is GPT?</a>
      </li>
      <li>
        <a href="#possibility">Open AI</a>
      </li>
      <li>
        <a href="#features">Case Studies</a>
      </li>
      <li>
        <a href="#blog">Library</a>
      </li>
    </>
  );

  return (
    <nav className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <a href="#home">
            <img src={logo} alt="gpt3 logo" />
          </a>
        </div>
        <ul className="gpt3__navbar-links_container">
          <Menu />
        </ul>
      </div>

      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button>Sign up</button>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}{" "}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <ul className="gpt3__navbar-menu_container-links">
              <Menu />
            </ul>
            <div className="gpt3__navbar-menu_container-sign">
              <p>Sign in</p>
              <button>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
