import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

import './DropNav.css'

const UnderNav = () => {
    return (
        <div className="nav2">
            <ul>
                <li className='nav2__menu'><MenuIcon /><li>All</li></li>
                <li>Clinic</li>
                <li>Customer Service</li>
                <li>Best Sellers</li>
                <li>Amazon Basics</li>
                <li>Today's Deals</li>
                <li>Prime</li>
                <li>New Releases</li>
                <li>Music</li>
                <li>Books</li>
                <li>Registry</li>
                <li>Fashion</li>
                <li className='hide'>Gift Cards</li>
                <li className='hide'>Amazon Home</li>
                <li className='hide'>Pharmacy</li>
                <li className='hide'>Sell</li>
                <li className='hide'>Coupons</li>
                <li className='hide'>Computer</li>
                <li className='hide'>Automotive</li>
                <li className='hide'>Videos Games</li>
            </ul>
        </div>
    )
}

export default UnderNav