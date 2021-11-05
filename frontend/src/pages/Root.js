import React from 'react';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import Login from './Login/Login'; 
import Usuario from './Usuario/index';

const PagesRoot = () => ( 
    <StoreProvider>
        <Router> 
            <Switch> 
                <Route path="/login" component={Login} /> 
                <Route path="/" component={Usuario} />     
            </Switch> 
        </Router>
    </StoreProvider>
) 

export default PagesRoot;