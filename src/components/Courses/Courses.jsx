import React from "react";
import SectionHeader from "../Section-Header/SectionHeader";
import UserCard from "../UserCard/UserCard";
import "./Courses.css";
import AvatarMan1 from "../../assets/Avatar-man.jpg";
import AvatarMan2 from "../../assets/Avatar-man.jpg";
import AvatarMan3 from "../../assets/Avatar-man.jpg";
import AvatarMan4 from "../../assets/Avatar-man.jpg";

export default function Courses() {
    return (
        <div className="courses">
            <SectionHeader
                subtitle={"Team"}
                title={"Our Popular Courses"}
                paragraph={
                    "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
                }
            />
            <div className="user-card-container">
                <UserCard
                    profile={AvatarMan1}
                    username={"Julian Jameson"}
                    title={"Profession"}
                    instagram={"Jameson"}
                    github={"Jameson"}
                    twiiter={"Jameson"}
                />
                <UserCard
                    profile={AvatarMan2}
                    username={"Julian Jameson"}
                    title={"Profession"}
                    instagram={"Jameson"}
                    github={"Jameson"}
                    twiiter={"Jameson"}
                />
                <UserCard
                    profile={AvatarMan3}
                    username={"Julian Jameson"}
                    title={"Profession"}
                    instagram={"Jameson"}
                    github={"Jameson"}
                    twiiter={"Jameson"}
                />
                <UserCard
                    profile={AvatarMan4}
                    username={"Julian Jameson"}
                    title={"Profession"}
                    instagram={"Jameson"}
                    github={"Jameson"}
                    twiiter={"Jameson"}
                />
            </div>
        </div>
    );
}
