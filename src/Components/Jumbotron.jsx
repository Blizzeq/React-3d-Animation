import React from 'react';
import iphone from '../assets/images/iphone-14.jpg';
import iphonehand from '../assets/images/iphone-hand.png';

const Jumbotron = () => {
    return (
        <div className={'jumbotron-section wrapper'}>
            <h2 className={'title'}>New</h2>
            <img className={'logo'} src={iphone} alt={'iPhone 14 Pro'}/>
            <p className={'text'}>Big and bigger.</p>
            <span className={'description'}>
                From $39.89/mo. for 24 mo. or $999 before trade-in
            </span>
            <ul className={'links'}>
                <li>
                    <button className={'button'}>Buy</button>
                </li>
                <li>
                    <a className={'link'} href={'#'}>Learn more</a>
                </li>
            </ul>
            <img className={'iphone-img'} src={iphonehand} alt={'iPhone 14 Pro'}/>
        </div>
    );
};

export default Jumbotron;
