import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../Context/shop-context";
import logo from "../assets/logo.png";

import "./navbar.css";

const NavBar = () => {
  const { cartItems, getTotalCartItems } = useContext(ShopContext);
  const totalItems = getTotalCartItems();

  return (
    <>
      <div className="navbar">
        <a href="/">
          <img
            className="me-auto ms-5"
            src={logo}
            style={{ height: "70px", width: "70px" }}
          />
        </a>
        <div className="links">
          <Link to="/">Shop</Link>
          <Link to="/cart">
            <ShoppingCart size={32} />{" "}
            {totalItems > 0 ? <> ({totalItems}) </> : <></>}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
