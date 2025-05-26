import React from "react";
import SectionHeader from "../Section-Header/SectionHeader";
import Comment from "../Comment/Comment";
import "./Review.css"
import Avatar1 from "../../assets/Avatar.jpg"
import Avatar2 from "../../assets/Avatar.jpg"
import Avatar3 from "../../assets/Avatar.jpg"

export default function Review() {
    return (
        <div className="review">
            <SectionHeader
                subtitle={"Practice Advice"}
                title={"Every Client Matters"}
                paragraph={"Problems trying to resolve the conflict betweenthe two major realms of Classical physics: Newtonian mechanics "}

            />
            <div className="review-container">
                <Comment username={"Regina Miles"} title={"Designer"} profile_src={Avatar1} />
                <Comment username={"Regina Miles"} title={"Designer"} profile_src={Avatar2}  />
                <Comment username={"Regina Miles"} title={"Designer"} profile_src={Avatar3}  />
            </div>
        </div>
    )
}