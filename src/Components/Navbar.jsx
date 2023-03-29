import React from 'react';
import logo from '../assets/images/logo.svg';
import search from '../assets/images/search.svg';
import store from '../assets/images/store.svg';

const Navbar = () => {
    return (
        <nav className={'nav-wrapper'}>
            <div className={'nav-content'}>
                <ul className={'list-styled'}>
                    <li>
                        <img src={logo} alt={'logo'}/>
                    </li>
                    <li>
                        <a className={'link-styled'} href={'#'}>Store</a>
                    </li>
                    <li>
                        <a className={'link-styled'} href={'#'}>Mac</a>
                    </li>
                    <li>
                        <a className={'link-styled'} href={'#'}>iPad</a>
                    </li>
                    <li>
                        <a className={'link-styled'} href={'#'}>iPhone</a>
                    </li>
                    <li>
                        <a className={'link-styled'} href={'#'}>Watch</a>
                    </li>
                    <li>
                        <a className={'link-styled'} href={'#'}>AirPods</a>
                    </li>
                    <li>
                        <a className={'link-styled'} href={'#'}>Tv & Home</a>
                    </li>
                    <li>
                        <a className={'link-styled'} href={'#'}>Entertainment</a>
                    </li>
                    <li>
                        <a className={'link-styled'} href={'#'}>Accessories</a>
                    </li>
                    <li>
                        <a className={'link-styled'} href={'#'}>Support</a>
                    </li>
                    <li>
                        <img src={search} alt={'search'}/>
                    </li>
                    <li>
                        <img src={store} alt={'store'}/>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
