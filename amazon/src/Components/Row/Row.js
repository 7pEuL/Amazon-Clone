import React from 'react'
import Product from '../Product/Product'
import './Row.css'

import Images from '../../Data/Images'

const Row = () => {
  return (
    <div className='row'>
      <div className="row__Product">
        <Product title={`Dell Inspiron 7700 AIO Desktop, 27" FHD Touchscreen, 12th Gen Intel Core i7-1255U Processor, GeForce MX550, 32GB RAM, 2TB SSD, Webcam, HDMI, RJ45, Wi-Fi 6, Wireless KB&Mouse, Windows 11`} price="1,419" supPrice="00" productPhoto={Images.DellDesktop} star={5} NoStar={0} />

        <Product title={`LG 27GP850-B Ultragear Gaming Monitor 27” QHD (2560 x 1440) Nano IPS Display, 1ms Response Tim, 165Hz Refresh Rate, NVIDIA G-SYNC Compatible, AMD FreeSync Premium, Tilt/Height/Pivot Adjustable Stand`} price="1,419" supPrice="00" productPhoto={Images.LgMonitor} star={5} NoStar={0} />
      </div>

      <div className="row__Product">
        <Product title={`ASUS Zenbook Pro Duo 15 OLED 12th Gen 15.6" Home & Business Laptop (Intel i9-12900H 14-Core, 32GB LPDDR5 4800MHz RAM, 4TB PCIe SSD, GeForce RTX 3060, 60Hz Touch Win 11 Pro) with Hub`} price="3199" supPrice="99" productPhoto={Images.ASUSLaptop} star={4} NoStar={1} />

        <Product title={`Apple iPhone 14 Pro Max, 256GB, Gold for T-Mobile (Renewed)`} price="1,399" supPrice="97" productPhoto={Images.iPhone14ProMax} star={3} NoStar={2} />

        <Product title={`Dell Inspiron 7700 AIO Desktop, 27" FHD Touchscreen, 12th Gen Intel Core i7-1255U Processor, GeForce MX550, 32GB RAM, 2TB SSD, Webcam, HDMI, RJ45, Wi-Fi 6, Wireless KB&Mouse, Windows 11`} price="1,419" supPrice="00" productPhoto={Images.DellDesktop} star={4} NoStar={1} />
      </div>

      <div className="row__Product">
        <Product title={`Dell Inspiron 7700 AIO Desktop, 27" FHD Touchscreen, 12th Gen Intel Core i7-1255U Processor, GeForce MX550, 32GB RAM, 2TB SSD, Webcam, HDMI, RJ45, Wi-Fi 6, Wireless KB&Mouse, Windows 11`} price="1,419" supPrice="00" productPhoto={Images.DellDesktop} star={4} NoStar={1} />
      </div>
    </div>
  )
}

export default Row