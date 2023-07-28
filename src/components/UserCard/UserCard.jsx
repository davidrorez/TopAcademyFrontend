import React from "react";
import {SlSocialGithub, SlSocialInstagram, SlSocialTwitter} from "react-icons/sl"
import "./UserCard.css"

export default function UserCard({profile, username, title, instagram, github, twiiter}){
    return(
        <div className="user-card">
            <div className="thumbnails">
                <img src={profile} alt={username + "'s avatar"} />
            </div>
            <div className="content">
                <h5 className="username">{username}</h5>
                <span className="title">{title}</span>
                <div className="social-media">
                    <a href={"https://github.com/" + github}>
                        <SlSocialGithub />
                    </a>
                    <a href={"https://instagram.com/" + instagram}>
                        <SlSocialInstagram />
                    </a>
                    <a href={"https://twiiter.com/" + twiiter}>
                        <SlSocialTwitter />
                    </a>
                </div>
            </div>
        </div>
    )
}