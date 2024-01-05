import React from "react";
import { createContext } from "react";
import { useState } from "react";
import Products from "../products";

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const Item in cartItems) {
      if (cartItems[Item] > 0) {
        let itemInfo = Products.find((product) => product.id == Number(Item));
        totalAmount += cartItems[Item] * itemInfo.price;
      }
    }

    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const Item in cartItems) {
      if (cartItems[Item] > 0) {
        totalItems += cartItems[Item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
