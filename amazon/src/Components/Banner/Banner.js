import React from "react";

import Images from '../../Data/Images';

const Banner = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img src={Images.AmazonLogoWifi} alt="" className="home__image" />
            </div>
        </div>
    );
};

export default Banner;
