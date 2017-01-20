import React from 'react';
import { Link } from 'react-router';

const logoSrc = require('../assets/octosight.png');


const MainHeader = (props) => {
    return (
        <div className="header-container">
            <Link to="/">
                <img className="header-logo" src={logoSrc} height={33} />
            </Link>

            <Link to="/repousers">
                Top Contributors
            </Link>
        </div>
    );
};

export default MainHeader;
