import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainHeader from './components/MainHeader';

import './styles/main.scss';

const App = (props) => {
    return (
        <MuiThemeProvider>
            <div className="app">
                <div className="app-top">
                    <MainHeader />
                </div>
                <div className="app-content">
                    {props.children}
                </div>
            </div>
        </MuiThemeProvider>
    );
};

// App.propTypes = {
//     children: React.PropTypes.element
// };

export default App;
