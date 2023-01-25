import React from "react";
import './Banner.css'

import Images from '../../Data/Images';


const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__container">
                <img className="banner__image" src={Images.AmazonBanner} alt="" />
            </div>
        </div>
    );
};

export default Banner;
