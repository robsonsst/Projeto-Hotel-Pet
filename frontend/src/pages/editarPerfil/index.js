import React, { useState, useEffect } from 'react';
import './style.css';

export default function editarPerfil() {

    return (

        <div>
            <div class=" col-sm-12">

                <hr></hr>
                <div class=" painel-componentes">
                        <div class=""> 
                            
                            <div class="titulo-pagina">
                                <h5> Home/Editar Perfil</h5>
                            </div>
    
                            <div class="main">
                                
                                <section>
                                    <br></br>
                                    <h3 class ="titulo-editar-reserva"> Editar Perfil </h3>
                                </section>

                                <section class="section componentes">
                                    <br></br>
                                    <label for="proprietario"> Email*</label>
                                    <input id="proprietario" class="input" type="email"></input>
                                    <br></br>
                                    <label for="pet"> Nome*</label>
                                    <input id="pet" class="input" type="text"></input>
                                    <br></br>
                                    <label for="proprietario"> Sobrenome*</label>
                                    <input id="proprietario" class="input" type="text"></input>
                                    <br></br>
                                    <label for="pet"> Telefone*</label>
                                    <input id="pet" class="input" type="tel"></input>
                                </section>


                                <div>
                                    <label class="componentes"><a> Foto </a></label> 
                                    <br></br>
                                    <button class="botoes botao-add componentes btn btn-outline-light"><i class="far fa-plus-square"></i></button>
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
    )}