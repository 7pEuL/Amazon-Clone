import React from "react";
import images from "../../Data/Images";
import RelItem from "./Item";

import "./RelatedItems.css";

const RelatedItems = () => {
  return (
    <>
      <div className="related">
        <div className="related__title">
          <b>Your recently viewed items</b>
        </div>
        <div className="related__Sponsored">
          <small>Sponsored</small>
        </div>

        <RelItem
          id={35}
          title="FOPO 13.3inch Triple Laptop Screen Extender - [2023] FHD 1080P IPS Triple Portable Monitor"
          itemPhoto={images.LaptopScreen}
          star="4"
          NoStar="1"
          rate="2750"
          price="1425.00"
        />

        <RelItem
          id={42}
          title="LG 27GP850-B Gaming Monitor"
          itemPhoto={images.DellDesktop}
          star="4"
          NoStar="1"
          rate="2750"
          price="1419.99"
        />

        <RelItem
          id={45}
          title="SAMSUNG Odyssey Ark 55-Inch Curved Gaming Screen, 4K UHD 165Hz 1ms (GTG) Quantum Mini-LED Gamer"
          itemPhoto={images.SamsungGamingScreen}
          star="3"
          NoStar="2"
          rate="1370"
          price="2799.99"
        />

        <RelItem
          id={79}
          title="SAMSUNG Odyssey CRG Series 49-Inch Dual QHD (5120x1440) Gaming Monitor, 120Hz, Curved, QLED"
          itemPhoto={images.GamingDeskTableGreen}
          star="4"
          NoStar="1"
          rate="7310"
          price="389.00"
        />

        <RelItem
          id={65}
          title="MYS Men's 3 Piece Slim Fit Suit Set"
          itemPhoto={images.MenSuit}
          star="4"
          NoStar="1"
          rate="3170"
          price="85.99"
        />

        <RelItem
          id={82}
          title="OUPINKE Luxury Diamond Watch"
          itemPhoto={images.OUPINKEWatch}
          star="3"
          NoStar="2"
          rate="1370"
          price="368.00"
        />

        <RelItem
          id={89}
          title="SAMSUNG Odyssey CRG Series 49-Inch Dual QHD (5120x1440) Gaming Monitor, 120Hz, Curved, QLED"
          itemPhoto={images.LShapedDesk}
          star="4"
          NoStar="1"
          rate="7310"
          price="189.00"
        />

        <RelItem
          id={48}
          title="LG 27GP850-B Ultragear Gaming Monitor 27” QHD (2560 x 1440) Nano IPS Display, 1ms Response Tim, 165."
          itemPhoto={images.LgMonitor}
          star="3"
          NoStar="2"
          rate="1370"
          price="349.00"
        />

        <RelItem
          id={95}
          title="Ross-Simons 0.25 ct. t.w. Diamond Twist Ring in 18kt Gold Over Sterling. Size 8"
          itemPhoto={images.DiamondTwistRing}
          star="4"
          NoStar="1"
          rate="7310"
          price="136.00"
        />

        <RelItem
          id={29}
          title="SAMSUNG Odyssey CRG Series 49-Inch Dual QHD (5120x1440) Gaming Monitor, 120Hz, Curved, QLED"
          itemPhoto={images.SamsungOdesseyCRG}
          star="4"
          NoStar="1"
          rate="7310"
          price="299.00"
        />

        <RelItem
          id={97}
          title="SAMSUNG Odyssey CRG Series 49-Inch Dual QHD (5120x1440) Gaming Monitor, 120Hz, Curved, QLED"
          itemPhoto={images.LShapedDesk1}
          star="4"
          NoStar="1"
          rate="7310"
          price="189.00"
        />
      </div>
    </>
  );
};

export default RelatedItems;
