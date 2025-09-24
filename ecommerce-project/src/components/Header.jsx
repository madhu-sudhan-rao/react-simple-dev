import React, { useContext, useRef } from "react";
import "./Header.css";
import { Link } from "react-router";
import { ThemeContext } from "../App";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const searchBoxRef = useRef(null);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const onSearchButtonClick = () => {
    searchBoxRef.current.focus();
  }

  return (
    <>
      <div className="header">
        <div className="left-section">
          <Link to="/" className="header-link">
            <img className="logo" src="images/logo-white.png" />
            <img className="mobile-logo" src="images/mobile-logo-white.png" />
          </Link>
        </div>

        <div className="middle-section">
          <button onClick={onSearchButtonClick}>
            Search
          </button>
          <input ref={searchBoxRef} className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <Link className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </Link>

          <Link className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">3</div>
            <div className="cart-text">Cart</div>
          </Link>

          <button onClick={toggleTheme}>{theme}</button>
        </div>
      </div>
    </>
  );
}

export default Header;
