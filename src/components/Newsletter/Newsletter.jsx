import React from "react";
import "./Newsletter.css"

export default function Newsletter(){
    return(
        <div className="newsletter">
            <div className="section-title">
                <h6 className="subtitle">Newsletter</h6>
                <h3 className="title">Join Our Newsletter</h3>
                <p className="pargraph">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="email-box">
                <input type="text" id="newsletter-email-input" placeholder="Your Email" />
                <input type="button" value="Subscribe" id="subscribe-button" />
            </div>
        </div>
    )
}