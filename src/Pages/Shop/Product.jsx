import React from "react";
import "./shop.css";
import { ShopContext } from "../../Context/shop-context";
import { useContext } from "react";

const Product = (props) => {
  const { id, image, title, description, price } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div
      class="card shadow-sm p-3 bg-white rounded"
      style={{ width: "19rem", border: "none", height: "520px" }}
    >
      <img
        src={image}
        class="card-img-top shadow-lg mb-2 p-3 bg-white rounded"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">
          {description}
          <p className="pt-3">
            <b>Rs. {price}</b>
          </p>
        </p>

        <button className="addToCartBtn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
      </div>
    </div>
  );
};

export default Product;
