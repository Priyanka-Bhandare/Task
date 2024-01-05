import React, { useContext } from "react";
import { ShopContext } from "../../Context/shop-context";

const CartItem = (props) => {
  const { id, image, title, description, price } = props.data;

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={image} />

      <div className="description">
        <p className="TitleFont">
          <b>{title}</b>
        </p>
        <p>Rs. {price * cartItems[id]}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => {
              updateCartItemCount(Number(e.target.value), id);
            }}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
