import React from "react";
import profile_photo from "../images/profile_photo.png"


const Info = () => (
    <div className="info--container">
        <img src={profile_photo} alt="profile pic" className="info--picture"/>
        <h1 className="">Laura Smith</h1>
        <h4>Frontend Developer</h4>
        <h5> MyWebsite.com</h5>
        <div className="info--button_container">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="info--email_link">
                <span>
                    <ion-icon name="mail"></ion-icon>
                </span>
                <span>E-Mail</span>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="info--linkedin_link">
                <span>
                <ion-icon name="logo-linkedin"></ion-icon>
                </span>
                <span>LinkedIn</span>
            </a>
        </div>
    </div>
)

export default Info