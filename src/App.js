import React from 'react';

import MainHeader from './components/MainHeader';

import './styles/main.scss';

const App = (props) => {
    return (
        <div className="app">
            <div className="app-top">
                <MainHeader />
            </div>
            <div className="app-content">
                {props.children}
            </div>
        </div>
    );
};

// App.propTypes = {
//     children: React.PropTypes.element
// };

export default App;
