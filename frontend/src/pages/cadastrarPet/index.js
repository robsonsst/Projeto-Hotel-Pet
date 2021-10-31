import React from 'react';
import './style.css';
import Usuario from '../Usuario'
import Reserva from '../Reserva'
import Pet from '../Pet'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Routes from '../../routes'


export default function cadastrarPet() {

    return (

        <div>
            <div class=" col-sm-12">

                <hr></hr>
                <div class=" painel-componentes">
                        <div class=""> 
                            
                            <div class="titulo-pagina">
                                <h5> Home/Reserva/Novo Pet</h5>
                            </div>
    
                            <div class="main">
                                
                                <section>
                                    <h3 class ="titulo-editar-reserva"> Novo Pet </h3>
                                </section>
                                <section class ="foto-ao-lado">  
                                    
                                </section>

                                <section class="section componentes">
                                    <label for="proprietario"> Proprietario*</label> 
                                    <input id="proprietario" class="input" type="text"></input>

                                    <label for="pet"> Nome*</label>
                                    <input id="pet" class="input" type="text"></input>

                                    <label for="select"> Tipo*</label>
                                    <select id="select" class=" input form-select-sm select-status" aria-label="Default select example-sm">
                                        <option selected>Tipo</option>
                                        <option value="1">Gato</option>
                                        <option value="2">Cachorro</option>
                                    </select>

                                    <label for="pet"> Raça*</label>
                                    <input id="pet" class="input" type="text"></input>

                                    <label for="select"> Tamanho*</label>
                                    <select id="select" class=" input form-select-sm select-status" aria-label="Default select example-sm">
                                        <option selected>Tamanho</option>
                                        <option value="1">Grande</option>
                                        <option value="2">Pequeno</option>
                                    </select>


                                </section>
                                


                                <div>
                                    <br></br>
                                    <br></br>                   
                                    <button class="botoes componentes btn btn-primary"><i class="far fa-save"></i> Salvar</button>
                                    <button class="botoes componentes btn btn-outline-primary"> <i class="fas fa-redo"></i> Limpar</button>
                                </div>
                                
                            </div>
                              
                        </div>
                        
                    </div>

                </div>
            
            </div>
    )
}