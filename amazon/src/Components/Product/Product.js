import React from 'react';
import './Product.css'

// import Star from './Star/Star';
import { Box, Fab } from '@mui/material';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import StarSharpIcon from '@mui/icons-material/StarSharp';
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';

const Product = ({ title, price, supPrice, productPhoto, star, NoStar }) => {

    return (
        <>
            <div className="product">
                <div className="product__info">
                    <p className='product__title'>{title}</p>
                    <p className="product__price">
                        <small><sup>$</sup></small>
                        <strong>{price}</strong><sup>{supPrice}</sup>
                    </p>

                    <div className="product__rating">
                        {/* <Star /> */}
                        {Array(star).fill().map((_, i) => (
                            <StarSharpIcon />
                        ))}
                        {Array(NoStar).fill().map((_, i) => (
                            <StarBorderPurple500SharpIcon />
                        ))}
                    </div>
                </div>

                <div className='product__img'>
                    <img src={productPhoto} alt="" />
                </div>

                <div className="product__button">
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab variant="extended">
                            Add To Basket
                            <MapsUgcRoundedIcon sx={{ ml: .3, pb: 3 }} />
                        </Fab>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default Product