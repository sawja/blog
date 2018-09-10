import React from 'react';
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

import NavbarContainer from './containers/NavbarContainer'

const App = (props) => {
    return (
        <Router>
            <React.Fragment>
                <NavbarContainer/>
                <AppRoutes/>   
            </React.Fragment>
        </Router>
    )
}

export default App;