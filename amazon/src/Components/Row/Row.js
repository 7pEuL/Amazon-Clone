import React from "react";
import Product from "../Product/Product";
import "./Row.css";

import Images from "../../Data/Images";
import images from "../../Data/Images";

const Row = () => {
  return (
    <div className="row">
      <div className="row__Product">
        <Product
          id={47}
          title={`Dell Inspiron 7700 AIO Desktop, 27" FHD Touchscreen, 12th Gen Intel Core i7-1255U Processor, GeForce MX550, 32GB RAM, 2TB SSD, Webcam, HDMI, RJ45, Wi-Fi 6, Wireless KB&Mouse, Windows 11`}
          price="1419.00"
          priceDisplay="1,419"
          supPrice="00"
          productPhoto={Images.DellDesktop}
          star={5}
          NoStar={0}
        />

        {/* <Product
          id={18}
          title={`Lenovo IdeaCentre AIO 5i - 2022 - All-in-One Desktop - 27" QHD Touch Display - 5MP + IR Camera - Windows 11 Home - 8GB Memory - 256 GB Storage - Intel Core i7-12700H - Mouse & Keyboard Included`}
          price="1049.00"
          priceDisplay="1,049"
          supPrice="00"
          productPhoto={Images.LenovoMonitor}
          star={5}
          NoStar={0}
        /> */}

        <Product
          id={17}
          title={`Apple Studio Display - Standard Glass - Tilt- and Height-Adjustable Stand, 12MP Ultra Wide camera with Center Stage for more engaging video calls`}
          price="1973.00"
          priceDisplay="1,973"
          supPrice="00"
          productPhoto={Images.MacStudio}
          star={5}
          NoStar={0}
        />

        <Product
          id={15}
          title={`Microsoft Surface Book 2 HNQ-00001 Detachable 2-IN-1 Business Laptop - 13.5" TouchScreen (3000x2000), 8th Gen Intel Quad-Core i7-8650U, 1TB PCIe SSD, 16GB RAM, Nvidia GTX 1050, Win 10 Pro (Renewed)`}
          price="2300.00"
          priceDisplay="2,300"
          supPrice="00"
          productPhoto={Images.SurfaceBook3}
          star={5}
          NoStar={0}
        />

        <Product
          id={51}
          title={`FOPO 13.3" Triple Laptop Screen Extender - [2023] FHD 1080P IPS Triple Portable Monitor for 14"-17" Laptop, Triple Screen for Dual Screen Display, with HDMI/USB-C (Not for M1 M2 Chip, Chromebook)-S16`}
          price="425.00"
          priceDisplay="425"
          supPrice="00"
          productPhoto={Images.LaptopScreen}
          star={5}
          NoStar={0}
        />
      </div>

      <div className="row__Product">
        <Product
          id={56}
          title={`SAMSUNG Odyssey Ark 55-Inch Curved Gaming Screen, 4K UHD 165Hz 1ms (GTG) Quantum Mini-LED Gamer Monitor w/Cockpit Mode, Sound Dome Technology, Multi View, HDR10+ (S55BG970NN) 2022`}
          price="2799.99"
          priceDisplay="2,799"
          supPrice="99"
          productPhoto={Images.SamsungGamingScreen}
          star={4}
          NoStar={1}
        />

        <Product
          id={25}
          title={`LG 27GP850-B Ultragear Gaming Monitor 27” QHD (2560 x 1440) Nano IPS Display, 1ms Response Tim, 165Hz Refresh Rate, NVIDIA G-SYNC Compatible, AMD FreeSync Premium, Tilt/Height/Pivot Adjustable Stand`}
          price="349.99"
          priceDisplay="349"
          supPrice="99"
          productPhoto={Images.LgMonitor}
          star={5}
          NoStar={0}
        />

        <Product
          id={22}
          title={`BenQ SW321C 32 Inch 4K IPS Photo and Video Editing Computer Monitor with AQCOLOR Tech, 99% AdobeRGB, 100% sRGB, Display P3, Hardware Calibration, Paper Color Sync, Uniformity tech, HLG and USB-C (60W)`}
          price="1999.99"
          priceDisplay="1999"
          supPrice="99"
          productPhoto={Images.BenqMonitor}
          star={2}
          NoStar={3}
        />

        <Product
          id={62}
          title={`SAMSUNG Odyssey G7 Series 32-Inch WQHD (2560x1440) Gaming Monitor, 240Hz, Curved, 1ms, HDMI, G-Sync, FreeSync Premium Pro (LC32G75TQSNXZA)`}
          price="670.00"
          priceDisplay="670"
          supPrice="00"
          productPhoto={Images.SamsungOdysseyG7GamingScreen}
          star={4}
          NoStar={1}
        />
      </div>

      <div className="row__Product">
        <Product
          id={27}
          title={`DLG 34WL600-B 34 Inch 21:9 UltraWide™ 1080p Full HD IPS Monitor`}
          price="279.99"
          priceDisplay="279"
          supPrice="99"
          productPhoto={Images.LgUltraWideTm}
          star={4}
          NoStar={1}
        />

        <Product
          id={17}
          title={`SAMSUNG Odyssey CRG Series 49-Inch Dual QHD (5120x1440) Gaming Monitor, 120Hz, Curved, QLED, HDR, Height Adjustable Stand, Radeon FreeSync (LC49RG90SSNXZA)`}
          price="299.99"
          priceDisplay="299"
          supPrice="99"
          productPhoto={Images.SamsungOdesseyCRG}
          star={5}
          NoStar={0}
        />

        <Product
          id={72}
          title={`Packard Bell AirFrame 24 inch 2 Pack Ultra Slim Bezel Desktop Monitor & 1 Wireless Keyboard and Mouse Combo FHD 1920 x 1080p, 60 Hz, 5 Ms, VESA Mounting, Tilt Adjustment, HDMI and VGA Home and Office`}
          price="259.99"
          priceDisplay="259"
          supPrice="99"
          productPhoto={Images.PackardBellUltraSlim}
          star={4}
          NoStar={1}
        />

        <Product
          id={37}
          title={`LG 35WN65C-B 35-inch-inch Curved UltraWide QHD HDR Monitor with FreeSync (Renewed)`}
          price="299.99"
          priceDisplay="299"
          supPrice="99"
          productPhoto={Images.LgUltraWide}
          star={3}
          NoStar={2}
        />
      </div>

      <div className="row__photo">
        <img src={images.AmazonBannerBlackOwn} alt="" />
      </div>

      <div className="row__Product">
        <Product
          id={33}
          title={`ASUS Zenbook Pro Duo 15 OLED 12th Gen 15.6" Home & Business Laptop (Intel i9-12900H 14-Core, 32GB LPDDR5 4800MHz RAM, 4TB PCIe SSD, GeForce RTX 3060, 60Hz Touch Win 11 Pro) with Hub`}
          price="3199.99"
          priceDisplay="3,199"
          supPrice="99"
          productPhoto={Images.ASUSLaptop}
          star={4}
          NoStar={1}
        />

        <Product
          id={436}
          title={`Apple iPhone 14 Pro Max, 256GB, Gold for T-Mobile (Renewed) Always-On and ProMotion.`}
          price="1399.97"
          priceDisplay="1,399"
          supPrice="97"
          productPhoto={Images.iPhone14ProMax}
          star={3}
          NoStar={2}
        />

        <Product
          id={555}
          title={`MYS Men's 3 Piece Slim Fit Suit Set, One Button Solid Jacket Vest Pants with Tie`}
          price="85.85"
          priceDisplay="85"
          supPrice="85"
          productPhoto={Images.MenSuit}
          star={4}
          NoStar={1}
        />

        <Product
          id={745}
          title={`OUPINKE Watches for Men Luxury Automatic Mechanical Tungsten Steel Casual Luminous Formal Wristwatch Skeleton Waterproof Sapphire Calendar Best Gifts for Men Watch`}
          price="1368.30"
          priceDisplay="368"
          supPrice="30"
          productPhoto={Images.OUPINKEWatch}
          star={3}
          NoStar={2}
        />
      </div>

      <div className="row__Product">
        <Product
          id={689}
          title={`CubiCubi L Shaped Desk with Shleves, 60" Large Corner Desk with Two Storage, Space Saving, Easy to Assemble, Black`}
          price="149.99"
          priceDisplay="149"
          supPrice="99"
          productPhoto={Images.LShapedDesk}
          star={4}
          NoStar={1}
        />

        <Product
          id={777}
          title={`EUREKA ERGONOMIC Gaming Desk with Led Lights, 72" Large Wing-Shaped Studio Desk W Keyboard Tray Monitor Stand Dual Headphone Hanger Cup Holder for Live, Streamer`}
          price="389.99"
          priceDisplay="389"
          supPrice="99"
          productPhoto={Images.GamingDeskTableGreen}
          star={5}
          NoStar={0}
        />

        <Product
          id={61}
          title={`CubiCubi L Shaped Desk with Storage, 59.1 Inch Corner Computer Desk with Shelves, Home Office Workstation for Study or Working, Black`}
          price="189.99"
          priceDisplay="189"
          supPrice="99"
          productPhoto={Images.LShapedDesk1}
          star={5}
          NoStar={0}
        />

        <Product
          id={63}
          title={`Rolanstar Computer Desk with Power Outlets USB Ports & LED Strip, Reversible L Shaped Desk with Monitor Stand & Storage Shelf, Carbon Fiber Surface, L Shaped Gaming Computer Desk with Hooks`}
          price="189.99"
          priceDisplay="189"
          supPrice="99"
          productPhoto={Images.LShapedDeskGreen}
          star={5}
          NoStar={0}
        />

        <Product
          id={37}
          title={`Dell Inspiron 7700 AIO Desktop, 27" FHD Touchscreen, 12th Gen Intel Core i7-1255U Processor, GeForce MX550, 32GB RAM, 2TB SSD, Webcam, HDMI, RJ45, Wi-Fi 6, Wireless KB&Mouse, Windows 11`}
          price="129.99"
          priceDisplay="129"
          supPrice="99"
          productPhoto={Images.GamingDeskTable}
          star={3}
          NoStar={2}
        />
      </div>

      <div className="row__photo">
        <img src={images.AmazonBannerDeskTop} alt="" />
      </div>

      <div className="row__Product">
        <Product
          id={56}
          title={`CubiCubi L Shaped Desk with Storage, 59.1 Inch Corner Computer Desk with Shelves, Home Office Workstation for Study or Working, Black`}
          price="189.99"
          priceDisplay="189"
          supPrice="99"
          productPhoto={Images.LShapedDesk2}
          star={5}
          NoStar={0}
        />

        <Product
          id={65}
          title={`Rolanstar Computer Desk with Power Outlets USB Ports & LED Strip, Reversible L Shaped Desk with Monitor Stand & Storage Shelf, Carbon Fiber Surface, L Shaped Gaming Computer Desk with Hooks`}
          price="189.99"
          priceDisplay="189"
          supPrice="99"
          productPhoto={Images.LShapedDesk4}
          star={5}
          NoStar={0}
        />

        <Product
          id={76}
          title={`CubiCubi L Shaped Desk with Storage, 59.1 Inch Corner Computer Desk with Shelves, Home Office Workstation for Study or Working, Black`}
          price="189.99"
          priceDisplay="189"
          supPrice="99"
          productPhoto={Images.LShapedDesk3}
          star={5}
          NoStar={0}
        />

        <Product
          id={67}
          title={`EUREKA ERGONOMIC Gaming Desk with Led Lights, 72" Large Wing-Shaped Studio Desk W Keyboard Tray Monitor Stand Dual Headphone Hanger Cup Holder for Live, Streamer`}
          price="389.99"
          priceDisplay="389"
          supPrice="99"
          productPhoto={Images.LShapedDesk5}
          star={5}
          NoStar={0}
        />
      </div>
    </div>
  );
};

export default Row;
