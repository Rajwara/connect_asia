import React from 'react'
import homeBanner from './assets/home-banner.jpg'
import './Home.css'
import apple from './assets/Apple-product.jpg'

import Product from './Product'

const Home = () => {
    return (
        <div className='home__container'>
            <img className='home__image' src={homeBanner} alt="" />

            <div className='home__row'>
                <Product
                    title=" Apple iPhone 13 Pro Max, 128 GB  "
                    price={29.99}
                    image={apple}
                    rating={5} />
                <Product
                    title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                    price={109.95}
                    image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                    rating={4}
                />

            </div>

            <div className='home__row'>
                <Product
                    title="Mens Casual Premium Slim Fit T-Shirts "
                    price={50}
                    rating={5}
                    image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
                <Product title="Women Dimaond Slim Fit Band"
                    price={60}
                    rating={5}
                    image="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
                />
                <Product
                    title="Pierced Owl Rose Gold Plated Stainless Steel Double"
                    price={75}
                    rating={4}
                    image="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" />


            </div>
            <div className='home__row'>
                <Product
                    title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED"
                    price={150}
                    rating={5}
                    image="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                />


            </div>

        </div>

    )
}

export default Home