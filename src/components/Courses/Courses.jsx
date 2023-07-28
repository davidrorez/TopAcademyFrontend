import React from "react";
import SectionHeader from "../Section-Header/SectionHeader"
import UserCard from "../UserCard/UserCard"
import "./Courses.css"

export default function Courses(){
    return(
        <div className="courses">
            <SectionHeader
            subtitle={"Team"}
            title={"Our Popular Courses"}
            paragraph={"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "}
             />
            <div className="user-card-container">
                <UserCard
                profile={"Avatar-man.jpg"}
                username={"Julian Jameson"}
                title={"Profession"}
                instagram={"Jameson"}
                github={"Jameson"}
                twiiter={"Jameson"}
                />
                <UserCard
                profile={"Avatar-man.jpg"}
                username={"Julian Jameson"}
                title={"Profession"}
                instagram={"Jameson"}
                github={"Jameson"}
                twiiter={"Jameson"}
                />
                <UserCard
                profile={"Avatar-man.jpg"}
                username={"Julian Jameson"}
                title={"Profession"}
                instagram={"Jameson"}
                github={"Jameson"}
                twiiter={"Jameson"}
                />
                <UserCard
                profile={"Avatar-man.jpg"}
                username={"Julian Jameson"}
                title={"Profession"}
                instagram={"Jameson"}
                github={"Jameson"}
                twiiter={"Jameson"}
                />
            </div>
            
        </div>
    )
}