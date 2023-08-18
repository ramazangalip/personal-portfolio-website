import React from "react";

import Navigation from "./navigation-bar";
import IntroContent from "./intro-content";

import "./style.scss";

const Intro = () => {
    return (
        <div className="Intro-section">
            <div
                className="vector-bg"
                id="parallax"
            ></div>
            <div className="content">
                <Navigation />
                <IntroContent />
            </div>
        </div>
    );
};

export default Intro;

