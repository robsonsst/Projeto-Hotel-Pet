import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Usuario from './pages/Usuario';
import Reserva from './pages/Reserva';
import Pet from './pages/Pet';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route  exact path="/" component={Usuario}/>
                <Route  exact path="/" component={Reserva}/>
                <Route  exact path="/" component={Pet}/>
                <Route path="/create" component={Reserva}/>
                <Route path="/update/:id" component={Reserva}/>
            </Switch>
        </BrowserRouter>
    );
}