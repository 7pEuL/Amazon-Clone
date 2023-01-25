import React from 'react'
import PlaceOutlined from '@mui/icons-material/PlaceOutlined';
import "./Header.css"

import Images from '../../Data/Images';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={Images.AmazonLogo} alt="" />
            </div>

            <div className="header__location">
                < PlaceOutlined className="header__optionLocationColor" />
            </div>

            <div className="header__option header__optionHello">
                <span className="header__optionLineOne">Hello</span>
                <span className="header__optionLineTwo">Select your address</span>
            </div>

            <div className="header__search">
                <div className='header__searchAll'>All</div>
                {/* <Button className="header__searchText" variant="contained">All</Button> */}
                <input id="search" className='header__searchInput' type="text" placeholder='Search Amazon' />
                <SearchIcon id="search" className='header__searchIcon' />
            </div>

            <div className="header__nav">
                <div className="header__optionEN">
                    <img src={Images.USAFlag} alt="" />
                    <span>EN</span>
                </div>

                <div className="header__option header__optionSign">
                    <span className="header__optionLineOne">Hello, sign in</span>
                    <span className="header__optionLineTwo">Account & List</span>
                </div>

                <div className="header__option header__optionReturns">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </div>

            <div className="header__Cart">
                <img src={Images.Cart} alt="" />
                <span className="header__optionLineTwo">Cart</span>
            </div>
        </div>
    )
}

export default Header

// import * as React from 'react';
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';

// function notificationsLabel(count: number) {
//     if (count === 0) {
//         return 'no notifications';
//     }
//     if (count > 99) {
//         return 'more than 99 notifications';
//     }
//     return `${count} notifications`;
// }

// export default function AccessibleBadges() {
//     return (
//         <IconButton aria-label={notificationsLabel(100)}>
//             <Badge badgeContent={100} color="secondary">
//                 <MailIcon />
//             </Badge>
//         </IconButton>
//     );
// }