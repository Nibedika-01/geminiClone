import React from "react";
import "./Main.css"
import { assets } from "../../assets/assets";

const Main = () => {
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="mainContainer">
                <div className="greet">
                    <p><span>Hello, Riya</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest a brand new iphone to me</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Hello this is nibedika</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>New text is generating</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                <div className="mainBottom">
                    <div className="searchBox">
                        <input type="text" placeholder="Enter a prompt here" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottomInfo">Gemini may generate incorrect information in some cases
                        so you should consider your own knowledge dumb!!!</p>
                </div>
            </div>
        </div>
    )
}

export default Main