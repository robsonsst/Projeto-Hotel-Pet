import React from 'react';
import './style.css';
import Usuario from '../Usuario'
import Reserva from '../Reserva'
import Pet from '../Pet'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




export default function Componente() {

    function usuario() {
        
    }

    return (
        <div class=" m-4 container-fluid grid ">
            <div class="  row ">
                <div class=" painel-lado-esquerdo col-sm-4 d-flex flex-column bd-highlight mb-2 ">

                    <div class=" painel-esquerdo">
                        <h1 class="d-flex justify-content-center" >HOTEL PET</h1>
                    </div>

                    <div class=" d-grid gap-3" >
                        <button type="button" class="btn btn-primary btn-sm botao-esquerdo "  onClick={Pet}> <i class="fas fa-paw p-1"></i> Pet</button>
                        <button type="button" class="btn btn-secondary btn-sm botao-esquerdo " onClick={Usuario}> <i class="fas fa-user p-1"></i> Usuário</button>
                        <button type="button" class="btn btn-success btn-sm botao-esquerdo " onClick={Reserva}> <i class="fas fa-book-reader p-1"></i> Reservas</button>
                    </div>

                </div>

                <div class=" col-sm-8">

                    <div class=" div-bar-usuario-nome">

                        <a class="nome-usuario"> <i class="fas fa-user-circle"></i> Joao da silva</a>

                    </div>

                    <Router>
                        <Switch>
                            <Route path='/' exact component={Usuario} />
                            <Route path='/reserva' component={Reserva} />
                            <Route path='/pet' component={Pet} />
                        </Switch>
                    </Router>
                </div>

            </div>

        </div>

    );

}