import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import LabelImportantRoundedIcon from "@material-ui/icons/LabelImportantRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useLocation, useParams } from 'react-router';
import TextTruncate from "react-text-truncate";
const SingleProduct = () => {
    const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch()
  const [productDetails, setProductDetails] = useState(null);
  const [showAdd, setShowAdd] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const found = data.filter(product => product.id == id)
        setProductDetails(found)
        console.log(found);
      });
  }, [id]);
  const addToBasket = () => {
    dispatch(addToBasket({...cart, title: productDetails.name,quantity: 1,}))
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
}
    console.log(id);
    return (
        <div className="productSingle">
      <div className="productSingle__inner">
        <motion.div layoutId={id} className="productSingle__image">
          <img src={productDetails?.image} alt=''/>
        </motion.div>
        <div className="productSingle__details">
          <TextTruncate
            line={3}
            element="h5"
            containerClassName="productSingle__name"
            truncateText="…"
            text={productDetails?.name}
          />
          <ul className="productSingle__features">
            {productDetails?.feature?.map((features) => (
              <li>{features}</li>
            ))}
          </ul>
          <span className="productSingle__footer">
            <p className="productSingle__price">
              <h4>${productDetails?.price}</h4>{" "}
            </p>
            {(productDetails?.price > 25) && (
              <p className="productSingle__deliveryMessage">
                <LabelImportantRoundedIcon
                  style={{
                    fill: "transparent",
                    stroke: "currentColor",
                    strokeWidth: 1,
                    fontSize: 20,
                  }}
                />
                Free Delivery Available - Salem, India 636006
              </p>
            )}
            <div className="buttons">
              {isAdded ? (
                <button className="buttonPrimary">
                  <ShoppingCartRoundedIcon /> Added
                </button>
              ) : (
                <button className="buttonPrimary" onClick={addToBasket}>
                  <AddShoppingCartRoundedIcon /> Add To Cart
                </button>
              )}
              
            </div>
          </span>
        </div>
      </div>
    </div>
    );
};

export default SingleProduct;