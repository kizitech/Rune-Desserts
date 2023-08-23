import { Link, NavLink } from "react-router-dom";
import React, { useState, useContext } from "react";
import { DataContext } from "/src/components/DataProvider";

import logo from "/src/assets/icons/logo.svg";
import cartIcon from "/src/assets/icons/cart.png";
import openMenu from "/src/assets/icons/open-menu.png";
import closeMenu from "/src/assets/icons/close-menu.svg";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const value = useContext(DataContext);
  const [cart] = value.cart;

  return (
    <header className="header">
      <section className="header__section">
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            <img
              src={logo}
              alt="rune deserts logo"
              className="header__logo-image"
            />
          </Link>
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink to="/" className="header__nav-link">
                Home
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/about" className="header__nav-link">
                About
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/menu" className="header__nav-link">
                Menu
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/blog" className="header__nav-link">
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <ul className="header__actions-list">
            <li className="header__actions-item">
              <NavLink to="/contact" className="header__actions-link">
                Contact
              </NavLink>
            </li>
            <li className="header__cart">
              <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/menu/cart">
                  <img
                    src={cartIcon}
                    alt="view cart"
                    className="header__cart-image"
                  />
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="mobile-section">
          <div
            className={click ? "overlay" : { handleClick }}
            onClick={handleClick}
          />
          <div className="mobile-header__cart menu-icon">
            <div className="cart-icon">
              <span>{cart.length}</span>
              <Link to="/menu/cart">
                <img
                  alt="view cart"
                  src={cartIcon}
                  className="header__cart-image"
                />
              </Link>
            </div>
          </div>

          <div className="menu-icon">
            <img
              onClick={handleClick}
              className="open-icon"
              src={openMenu}
              alt="open menu icon"
            />
          </div>

          <nav
            className={
              click ? "mobile-header__nav active" : "mobile-header__nav"
            }
          >
            <div className="menu-icon">
              <img
                src={closeMenu}
                onClick={handleClick}
                alt="close menu icon"
              />
            </div>
            <ul className="mobile-header__nav-list">
              <NavLink
                to="/"
                className={click ? "mobile-header__nav-link" : { handleClick }}
                onClick={handleClick}
              >
                <li className="mobile-header__nav-item">Home</li>
              </NavLink>
              <NavLink
                to="/about"
                className={click ? "mobile-header__nav-link" : { handleClick }}
                onClick={handleClick}
              >
                <li className="mobile-header__nav-item">About</li>
              </NavLink>
              <NavLink
                to="/menu"
                className={click ? "mobile-header__nav-link" : { handleClick }}
                onClick={handleClick}
              >
                <li className="mobile-header__nav-item">Menu</li>
              </NavLink>
              <NavLink
                to="/blog"
                className={click ? "mobile-header__nav-link" : { handleClick }}
                onClick={handleClick}
              >
                <li className="mobile-header__nav-item">Blog</li>
              </NavLink>
              <NavLink
                to="/contact"
                className={click ? "mobile-header__nav-link" : { handleClick }}
                onClick={handleClick}
              >
                <li className="mobile-header__nav-item">Contact</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
}

export default NavBar;
