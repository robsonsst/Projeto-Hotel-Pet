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
                <Route path='/reserva' component={Reserva} />
                <Route path='/pet' component={Pet} />                
                <Route path='/pet/cadastrar' component={cadastrarPet} />
                <Route path='/usuario/cadastrar' component={cadastrarUsuario} />
                <Route path='/conta/criar' component={criarConta} />
                <Route path='/perfil/editar/:id' component={editarPerfil} />
                <Route path='/pet/editar/:id' component={editarPet} />
                <Route path='/reserva/editar/:id' component={editarReserva} />
                <Route path='/reservaEmAndamento/editar' component={editarReservaEmAndamento} />
                <Route path='/reserva/cadastrar' component={fazerReserva} />
                <Route path='/login' component={login} />
                <Route path='/pet/ver/:id' component={verPet} />
                <Route path='/reserva/ver/:id' component={verReserva} />

            </Switch>
        </BrowserRouter>
    );
}