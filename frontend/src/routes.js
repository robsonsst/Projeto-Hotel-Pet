import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Usuario from './pages/Usuario';
import Reserva from './pages/Reserva';
import Pet from './pages/Pet';
import cadastrarPet from './pages/cadastrarPet';
import cadastrarUsuario from './pages/cadastrarUsuario';
import criarConta from './pages/criarConta';
import editarPerfil from './pages/editarPerfil';
import editarPet from './pages/editarPet';
import editarReserva from './pages/editarReserva';
import editarReservaEmAndamento from './pages/editarReservaEmAndamento';
import fazerReserva from './pages/fazerReserva';
import login from './pages/login';
import verPet from './pages/verPet';
import verReserva from './pages/verReserva'


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Usuario}/>
                <Route path='/Reserva' component={Reserva} />
                <Route path='/Pet' component={Pet} />                
                <Route path='/cadastrarPet ' component={cadastrarPet} />
                <Route path='/cadastrarUsuario ' component={cadastrarUsuario} />
                <Route path='/criarConta' component={criarConta} />
                <Route path='/editarPerfil/:id' component={editarPerfil} />
                <Route path='/editarPet/:id' component={editarPet} />
                <Route path='/editarReserva/:id' component={editarReserva} />
                <Route path='/editarReservaEmAndamento' component={editarReservaEmAndamento} />
                <Route path='/fazerReserva' component={fazerReserva} />
                <Route path='/login' component={login} />
                <Route path='/verPet/:id' component={verPet} />
                <Route path='/verReserva/:id' component={verReserva} />

            </Switch>
        </BrowserRouter>
    );
}