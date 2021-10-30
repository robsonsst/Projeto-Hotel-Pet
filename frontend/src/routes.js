import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Usuario from './pages/Usuario';
import Profile from '/.pages/Profile'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route  exact path="/" component={Usuario}/>
                <Route path="/create" component={Profile}/>
                <Route path="/update/:id" component={Profile}/>
            </Switch>
        </BrowserRouter>
    );
}