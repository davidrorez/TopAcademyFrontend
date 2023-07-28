import React from "react"
import {AiFillStar} from "react-icons/ai"
import "./Comment.css"

export default function Comment({username, title, profile_src}) {
    return (
        <div className="comment">
            <div className="content">
                <div className="stars">
                    <AiFillStar className="star-fill-icon" />
                    <AiFillStar className="star-fill-icon" />
                    <AiFillStar className="star-fill-icon" />
                    <AiFillStar className="star-fill-icon" />
                    <AiFillStar className="star-fill-icon" />
                </div>
                <p className="paragraph">
                    Slate helps you see
                    how many more days
                    you need to work to
                    reach your financial
                    goal for the month
                    and year.
                </p>
            </div>
            <div className="avatar">
                <div className="profile-photo">
                    <img src={profile_src} alt={username + " 's profile"} />
                </div>
                <div className="user-info">
                    <h4 className="username">{username}</h4>
                    <h6 className="usertitle">{title}</h6>
                </div>
            </div>
        </div>
    )
}