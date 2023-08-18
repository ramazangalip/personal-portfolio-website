import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                Size En yakın sürede cevap vereceğiz
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+90 506 654 8765</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">ramazansaidgalip@gmail.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;
