import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle"
import TitleWithIcon from "./TitleWithIcon"
import {AiOutlinePhone,AiOutlineMail } from "react-icons/ai"
import {BiMap } from "react-icons/bi"
import "./Footer.css"

export default function footer(){
    return(
        <div className="footer">
            <div className="section sec-1">
                <Title innerText={"Company Info"} />
                <Subtitle innerText={"About Us"} href={"#"} />
                <Subtitle innerText={"Carrier"} href={"#"} />
                <Subtitle innerText={"We are hiring"} href={"#"} />
                <Subtitle innerText={"Blog"} href={"#"} />
            </div>
            <div className="section sec-2">
                <Title innerText={"Legal"} />
                <Subtitle innerText={"About Us"} href={"#"} />
                <Subtitle innerText={"Carrier"} href={"#"} />
                <Subtitle innerText={"We are hiring"} href={"#"} />
                <Subtitle innerText={"Blog"} href={"#"} />
            </div>
            <div className="section sec-3">
                <Title innerText={"Features"} />
                <Subtitle innerText={"Business Marketing"} href={"#"} />
                <Subtitle innerText={"User Analytic"} href={"#"} />
                <Subtitle innerText={"Live Chat"} href={"#"} />
                <Subtitle innerText={"Unlimited Support"} href={"#"} />
            </div>
            <div className="section sec-4">
                <Title innerText={"Resources"} />
                <Subtitle innerText={"IOS & Android"} href={"#"} />
                <Subtitle innerText={"Watch a Demo"} href={"#"} />
                <Subtitle innerText={"Customers"} href={"#"} />
                <Subtitle innerText={"API"} href={"#"} />
            </div>
            <div className="section sec-5">
                <Title innerText={"Get In Touch"} />
                <TitleWithIcon innerText={"(480) 555-0103"} Icon={<AiOutlinePhone />} />
                <TitleWithIcon innerText={"Washington Ave"} Icon={<BiMap />} />
                <TitleWithIcon innerText={"debra.holt@example.com"} Icon={<AiOutlineMail />} />
            </div>
        </div>
    )
}