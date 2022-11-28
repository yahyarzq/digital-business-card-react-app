import React from "react";
import fb_icon from "../images/Facebook-Icon.png"
import github_icon from "../images/GitHub-Icon.png"
import ig_icon from "../images/Instagram-Icon.png"
import twitter_icon from "../images/Twitter-Icon.png"

const Footer = () => (
    <div className="footer--container">
        <img src={fb_icon} alt="Facebook"/>
        <img src={github_icon} alt="Gihub"/>
        <img src={ig_icon} alt="Instagram"/>
        <img src={twitter_icon} alt="Twitter"/>
    </div>
)

export default Footer