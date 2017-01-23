import React from 'react';
import { Link } from 'react-router';

const logoSrc = require('../assets/octosight.png');


const MainHeader = (props) => {
    return (
        <div className="header-container">
            <div className="header-left">
                <Link to="/">
                    <img className="header-logo" src={logoSrc} height={33} />
                </Link>
            </div>

            <div className="header-center">
                <Link to="/repousers">
                    <i className="fa fa-group"></i> Top Contributors
                </Link>
            </div>

            <div className="header-right">
            </div>
        </div>
    );
};

export default MainHeader;
