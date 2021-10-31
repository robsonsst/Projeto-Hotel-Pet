import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Usuario from './pages/Usuario';
import Reserva from './pages/Reserva';
import Pet from './pages/Pet';


export default function Routes(){
    return (
        
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Usuario}/>
                <Route path='/reserva' component={Reserva} />
                <Route path='/pet' component={Pet} />

                <Route path="/create" component={Reserva}/>
                <Route path="/update/:id" component={Reserva}/>
                <Route path="/delete/:id" component={Reserva}/>
                
                <Route path="/create/pet" component={Pet}/>
                <Route path="/update/:id" component={Pet}/>
                <Route path="/delete/:id" component={Pet}/>
            </Switch>
        </BrowserRouter>
    );
}