import React, { useState, useEffect } from 'react';
import './style.css';
import Menu from '../barraLateral'

export default function fazerReserva() {

    return (

        <Menu>
            <div class=" col-sm-12">

                <hr></hr>
                <div class=" painel-componentes">
                        <div class="">

                            <div class="titulo-pagina">
                                <h5> Home/Reservas/Nova Reserva</h5>
                            </div>
    
                            <div class="main">
                                
                                <section>
                                    <br></br> 
                                    <h3 class ="titulo-editar-reserva"> Fazer Reserva </h3>
                                </section>

                                <section class="section componentes">
                                    <br></br> 
                                    <label for="pet"> Pet*</label>
                                    <input id="pet" class="input" type="text"></input>
                                </section>

                                <section class="section-data componentes">
                                    <br></br> 
                                    <label for="periodo"> Período*</label>
                                    <br></br> 
                                    <input id="periodo" class="input-data" type="date"></input>
                                    <input class="input-data" type="date"></input>
                                </section>

                                <section class="section componentes">
                                    <br></br> 
                                    <label for="notas"> Notas</label>
                                    <textarea id="notas" class="input notas" rows="10" cols="30" maxlength="200"></textarea>

                                </section>

                                <div>
                                    <br></br> 
                                    <label class="componentes"> total das diarias: <a>R$: 40,00 </a></label> 
                                    <br></br> 
                                    <br></br>                     
                                    <button class="botoes componentes btn btn-primary"><i class="far fa-save"></i> Salvar</button>
                                    <button class="botoes componentes btn btn-outline-primary"> <i class="fas fa-redo"></i> Limpar</button>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>

                </div>
            
        </Menu>
                
                
    )}