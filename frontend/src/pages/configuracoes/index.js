import React, { useState, useEffect } from 'react';
import './style.css';
import Menu from '../barraLateral'

export default function configuracoes() {

    return (

        <Menu>
            <div class=" col-sm-12">

                <hr></hr>

                <div class=" painel-componentes">
                    <div class="">
                      

                        <div class="titulo-pagina">
                            <h5> Home/Configurações</h5>
                        </div>

                        <div class="main">

                            <section>
                                <h3 class="titulo-configuracoes"> Configurações</h3>
                            </section>

                            <section class="section componentes">
                                <label for="valorDiaria"> Valor da diária</label>
                                <input id="valorDiaria" class="input" type="text"></input>

                                <br></br>

                                <label for="vagasDisponiveis"> Vagas disponíveis</label>
                                <input id="vagasDisponiveis" class="input" type="text"></input>
                            </section>
                            <br></br>
                            <br></br>
                            <div>
                                <button class="botoes componentes btn btn-primary"><i class="far fa-save"></i> Salvar</button>
                                <button class="botoes componentes btn btn-outline-primary"> <i class="fas fa-redo"></i> Limpar</button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </Menu>
    )}