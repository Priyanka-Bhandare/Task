import React, { useContext } from "react";
import Products from "../../products";
import Product from "../Shop/Product";
import { ShopContext } from "../../Context/shop-context";
import CartItem from "./CartItem";
import { useNavigate, Navigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const Navigate = useNavigate();

  return (
    <div className="cart">
      <div className="Title">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {Products.map((val) => {
          if (cartItems[val.id] !== 0) {
            return <CartItem data={val} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="total">Total : Rs. {totalAmount} </p>
          <button onClick={() => Navigate("/")}>Continue Shopping</button>
          <button>Ckeckout</button>
        </div>
      ) : (
        <div className="checkout  text-success" id="divCenter">
          <h4>Your Cart is Empty</h4>
          <button onClick={() => Navigate("/")}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
