import React from 'react';
import AnimatedLogo from '../assets/images/logo-animated.gif';

function Loader(props) {
    return (
        <div className={'loader'}>
            <img className={'logo'} src={AnimatedLogo} alt="Loading..." />
        </div>
    );
}

export default Loader;