import React from 'react';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import StoreProvider from '../components/Store/Provider';
import RoutesPrivate from '../components/Routes/Private/Private';
import Login from './login/Login'; 
import Usuario from './Usuario/index';

const PagesRoot = () => ( 
    <StoreProvider>
        <Router> 
            <Switch> 
                <Route path="/login" component={Login} /> 
                <RoutesPrivate path="/" component={Usuario} />     
            </Switch> 
        </Router>
    </StoreProvider>
) 

export default PagesRoot;