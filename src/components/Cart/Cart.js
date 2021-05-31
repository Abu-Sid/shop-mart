import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import emptyCart from "../../assets/Images/logo.jpeg";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";


function Cart() {
    const cartProduct = useSelector(state=> state.basket.cart)

  return (
    <div className="cart">
      <h4>Your Total Item {cartProduct.length}</h4>
      {cartProduct.length > 0 ? (
        <div className="cart__inner">
          <div className="cart__items">
            {cartProduct.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div style={{ paddingTop: "1rem" }} className="cart__inner">
          <div className="cart__items">
            <img src={emptyCart} className="cart__empty" alt='' />
          </div>
          <div className="cart__checkout">
            <h4>Your cart feels lonely.</h4>
            <p style={{ marginBottom: "3rem" }}>
              Your shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <div className="buttons">
              <Link to="/">
                <button className="buttonPrimary">Continue Shopping</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;