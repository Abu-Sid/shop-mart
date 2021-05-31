import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import LabelImportantRoundedIcon from "@material-ui/icons/LabelImportantRounded";
import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from 'react-router';
import TextTruncate from "react-text-truncate";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToBasket, getProducts } from "../../app/slices/basketSlice";
import '../Button.css';
import './SingleProduct.css';
const SingleProduct = () => {
    const { id } = useParams();
    const location = useLocation();
    const dispatch = useDispatch()
    useEffect(() => dispatch(getProducts()), [dispatch])
    const products = useSelector((state) => state.basket.products)
    const productDetail = products.find((pd) => pd?.id == id);
    console.log(productDetail);

    const addProductToBasket = () => {
        dispatch(addToBasket(productDetail))
        toast.success(`Added ${productDetail.title} to cart`, {
            position: toast.POSITION.TOP_CENTER
        });
    }
    return (
        <div className="productSingle">
            <div className="productSingle__inner">

                <motion.div layoutId={id} className="productSingle__image">
                    <img src={productDetail?.image} alt='' />
                </motion.div>
                <div className="productSingle__details">
                    <TextTruncate
                        line={3}
                        element="h1"
                        containerClassName="productSingle__name"
                        truncateText="…"
                        text={productDetail?.title}
                    />
                    <ul className="productSingle__features">
                        <li> <h3>{productDetail?.description}</h3></li>
                    </ul>
                    <span className="productSingle__footer">
                        <p className="productSingle__price">
                            <h4>${productDetail?.price}</h4>
                        </p>
                        {(productDetail?.price > 25) && (
                            <p className="productSingle__deliveryMessage">
                                <LabelImportantRoundedIcon
                                    style={{
                                        fill: "transparent",
                                        stroke: "currentColor",
                                        strokeWidth: 1,
                                        fontSize: 20,
                                    }}
                                />
                             Free Delivery Available - Dhaka,Bangladesh
                            </p>
                        )}
                        <div className="buttons">
                            <button className="buttonPrimary" onClick={addProductToBasket}>
                                <AddShoppingCartRoundedIcon /> Add To Cart
                            </button>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;