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
import verPet from './pages/verPet';
import verReserva from './pages/verReserva'
import editarReservaFinalizada from './pages/editarReservaFinalizada'
import configuracoes from './pages/configuracoes';
import UserLogin from './components/User/Login/Login';



export default function Routes(){

    return (
        
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Usuario}/>
                <Route exact path='/reserva' component={Reserva} />
                <Route exact path='/pet' component={Pet} />                
                <Route exact path='/pet/cadastrar' component={cadastrarPet} />
                <Route exact path='/usuario/cadastrar' component={cadastrarUsuario} />
                <Route exact path='/conta/criar' component={criarConta} />
                <Route exact path='/perfil/editar/:id' component={editarPerfil} />
                <Route exact path='/pet/editar/:id' component={editarPet} />
                <Route exact path='/reserva/editar/:id' component={editarReserva} />
                <Route exact path='/reservaEmAndamento/editar' component={editarReservaEmAndamento} />
                <Route exact path='/reserva/cadastrar' component={fazerReserva} />
                <Route exact path='/login' component={UserLogin} />
                <Route exact path='/configuracoes' component={configuracoes} />
                <Route exact path='/pet/ver/:id' component={verPet} />
                <Route exact path='/reserva/ver/:id' component={verReserva} />
                <Route exact path='/reservaFinalizada/editar' component={editarReservaFinalizada} />

            </Switch>
        </BrowserRouter>
    );
}