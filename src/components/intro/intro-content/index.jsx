import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";


import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Merhaba</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">,Ben</span>
                        </span>
                        <span className="big-text">Ramazan Said Galip</span>
                    </h1>
                    <p className="title">
                        Ben HTML,CSS,JS VE REACT BİLİYORUM
                    </p>
                    <CallToAction
                        text="Contact me"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    />
                </div>
                <div className="right-col">
                    

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">En İyi Tasarım Ödülü</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>1k</span>
                            Memnun Müşteri
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;