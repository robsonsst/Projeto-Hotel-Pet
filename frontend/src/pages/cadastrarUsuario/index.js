import React, { useState, useEffect } from 'react';
import './style.css';

export default function cadastrarUsuario() {

    return (

        <div>
            <div class=" col-sm-12">

                <hr></hr>

                <div class=" painel-componentes">
                    <div class="">
                        

                        <div class="titulo-pagina">
                            <h5> Home/Usuário/Novo Usuário</h5>
                        </div>

                        <div class="main">

                            <section>
                                <h3 class="titulo-cadastrar-usuario"> Cadastrar Usuário</h3>
                            </section>

                            <section class="section componentes">

                                <label for="usuario"> Email*</label>
                                <input id="usuario" class="input" type="text" placeholder="  joaodasilva@pet.com"></input>

                                <label for="usuario"> Nome*</label>
                                <input id="usuario" class="input" type="text" placeholder="  João"></input>

                                <label for="usuario"> Sobrenome*</label>
                                <input id="usuario" class="input" type="text" placeholder="  da Silva"></input>

                                <label for="usuario"> Telefone*</label>
                                <input id="usuario" class="input" type="tel" placeholder="  +55 (73) 99904-0302"></input>

                            </section>

                                <div>
                                    <label class="componentes"><a> Foto </a></label>
                                    <br></br>
                                    <button class="botoes botao-add componentes btn btn-outline-light"><i class="far fa-plus-square"></i></button>
                                    <br></br>
                                    <br></br>
                                    <button class="botoes componentes btn btn-primary"><i class="far fa-save"></i> Salvar</button>
                                    <button class="botoes componentes btn btn-outline-primary"> <i class="fas fa-redo"></i>Limpar</button>
                            </div>

                        </div>

                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}