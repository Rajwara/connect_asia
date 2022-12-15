import React from 'react'
import apple from './assets/Apple-product.jpg'
import StarIcon from '@mui/icons-material/Star';

import './Product.css'

const Product = ({ image, title, price, rating }) => {
    return (
        <div className='product'>
            <img className='product__image' src={image} alt="" />
            <div className='product__info'>
                <p>{title}</p>
                <div className='product__rating'>

                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p><StarIcon className='product__ratingIcon' /></p>
                            ))
                    }

                </div>
                <div className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>

                </div>
                <button> Add to Basket </button>
            </div>



        </div>
    )
}

export default Product