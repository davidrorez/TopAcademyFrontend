import React from "react";
import SectionHeader from "../Section-Header/SectionHeader";
import Product from "../Product/Product";
import "./Experts.css"

export default function Experts() {
    return (
        <div className="experts">
            <SectionHeader
                subtitle="Practice Advice"
                title="Our Experts Teacher"
                paragraph="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
            />
            <div className="products-container">
                <Product
                    thumbnails={"product-thumbnails.jpg"}
                    category={"Training Courses"}
                    title={"Get Quality Education"}
                    description={"We focus on ergonomics and meeting you where you work. It's only a keystroke away."}
                    price={"16.48"}
                    disscount={"6.48"}
                    saleCount={"15"}
                    badge={"80%"}
                    stars={"4.7"}

                />
                <Product
                    thumbnails={"product-thumbnails-2.jpg"}
                    category={"2,769 online courses	"}
                    title={"Our Popular Courses"}
                    description={"We focus on ergonomics and meeting you where you work. It's only a keystroke away."}
                    price={"24.48"}
                    disscount={"12.99"}
                    saleCount={"35"}
                    badge={"50%"}
                    stars={"4.9"}

                />
                <Product
                    thumbnails={"product-thumbnails-3.jpg"}
                    category={"Expert instruction"}
                    title={"Most Popular Courses"}
                    description={"We focus on ergonomics and meeting you where you work. It's only a keystroke away."}
                    price={"89.99"}
                    disscount={"49.99"}
                    saleCount={"32"}
                    badge={"45%"}
                    stars={"4.8"}

                />
            </div>

        </div>
    )
}