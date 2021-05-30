import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";
import { motion } from "framer-motion";
import React from "react";
import { useHistory } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import defaultImage from "../../assets/Images/logo.jpeg";
import { pageTransition, pageZoom } from "../../util";
import "./Products.css";

function Products({data}) {
  const  { title,price,id,category,image }= data
  const history = useHistory();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageZoom}
      transition={pageTransition}
      layout
      onClick={() => history.push(`/product/${id}`, { product:data })}
      className="product"
    >
      <motion.div layoutId={id} className="product__image">
        <img src={image || defaultImage} alt="" />
      </motion.div>
      <div className="product__details">
        <span className="product__category">{category}</span>
        <TextTruncate
          line={3}
          element="h6"
          containerClassName="product__name"
          truncateText="…"
          text={title}
        />
        <div className="product__footer">
          <p className="product__price">
            <b>${price}</b>{" "}
          </p>
          <div className="product__rating">
            <StarRateRoundedIcon style={{ color: "#f90" }} />5
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Products;