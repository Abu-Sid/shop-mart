import RemoveShoppingCartRoundedIcon from "@material-ui/icons/RemoveShoppingCartRounded";
import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import { toast } from "react-toastify";
import { addToBasket, removeAllFromBasket, removeFromBasket } from "../../app/slices/basketSlice";
import { errorAnim } from "../../util";
import "./CartItem.css";

function CartItem({ item }) {
    console.log(item);
    const dispatch = useDispatch()
  const addBasket = () => {
    dispatch(addToBasket(item))
    toast.success("Increased item");
  };

  const removeBasket = () => {
    dispatch(removeFromBasket(item));
    toast.error("Removed item");    
  };

  const removeAll = () => {
    dispatch(removeAllFromBasket(item));
    toast.error("Removed item");
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={errorAnim}
      className="cartItem"
      key={item.id}
      id={item.id}
    >
      <motion.div layoutId={item.id} className="cartItem__image">
        <img src={item.image} alt=""/>
      </motion.div>
      <div className="cartItem__details">
        <Link
          to={{ pathname: `/product/${item.id}`, state: { product: item } }}
        >
          <TextTruncate
            line={2}
            element="p"
            containerClassName="cartItem__name"
            truncateText="…"
            text={item.title}
          />
        </Link>
        <div className="cartItem__footer">
          <p className="cartItem__price">
            ${item.price}
          </p>
          <div className="cartItem__buttons">
            <button onClick={removeBasket}>-</button>
            <span>1</span>
            <button onClick={addBasket}>+</button>
          </div>
          <div className="cartItem__remove">
            <button
              onClick={removeAll}
              data-for="removeTooltip"
              data-tip="Remove from Cart"
              className="buttonRed"
            >
              <RemoveShoppingCartRoundedIcon style={{ fontSize: 16 }} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CartItem;