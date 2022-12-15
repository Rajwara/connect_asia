import React from 'react'
import './Header.css';
import logo from '../src/assets/Lets-Connect-Asia.jpg'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'

const Header = () => {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} />
            <logo />


            <div className='header__search'>

                <input className='header__SearchInput' type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Hello Guests
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign In
                    </span>

                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>

                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
            </div>
            <div className='header__optionBasket'>
                <ShoppingBasketIcon />
                <span className='header__basketCount'>0</span>
            </div>

        </div>


    )
}

export default Header