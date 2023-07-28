import React from "react";
import {
    AiOutlineHeart,
    AiOutlineEye,
    AiOutlineShoppingCart,
    AiFillStar,
    AiOutlineDownload,
    AiOutlineArrowRight,
} from "react-icons/ai"

import "./Product.css"

export default function Product({thumbnails, category, title, description, saleCount,price, disscount, stars, badge }) {
    return (
        <div className="product">
            <div className="top">
                <div className="thumbnails">
                    <img src={thumbnails} alt={title + " product thumbnails"} />
                </div>
                <div className="actions">
                    <div className="top-badge">{badge}</div>
                    <div className="action-button">
                        <div className="like">
                            <AiOutlineHeart />
                        </div>
                        <div className="basket">
                            <AiOutlineShoppingCart />
                        </div>
                        <div className="watch">
                            <AiOutlineEye />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="category">
                    <a href={"/" + category} className="product-category">{category}</a>
                    <div className="rate">
                        <AiFillStar className="star-icon" />
                        <span className="digit">{stars}</span>
                    </div>
                </div>
                <h5 className="product-title">{title}</h5>
                <p className="product-description">{description}</p>
                <div className="sale">
                    <AiOutlineDownload className="download-icon" />
                    <h6 className="sale-count">{saleCount} Sales</h6>
                </div>
                <div className="price">
                    <h5 className="main">${price}</h5>
                    <h5 className="disscount">${disscount}</h5>
                </div>

                <button className="learn-more">
                    <span>Learn More</span>
                    <AiOutlineArrowRight className="arrow-right-icon" />
                </button>
            </div>
        </div>
    )
}