import React, { useState, useEffect } from 'react';
import './style.css';
import Menu from '../barraLateral'

export default function verPet() {

    return (

        <Menu>
            <div class=" col-sm-12">

                <hr></hr>
                <div class=" painel-componentes">
                    <div class="">
                        
                        <div class="titulo-pagina">
                            <h5> Home/Pet/Ver Pet</h5>
                        </div>

                        <div class="main">

                            <section>
                                <h3 class="titulo-ver-pet"> Ver Pet </h3>
                            </section>

                            <button class="botoes titulo-ver-pet btn btn-outline-primary"><i class="fas fa-pen"></i>Editar</button>

                            <button class="botoes btn btn-outline-primary"><i class="fas fa-backspace"></i>Deletar</button>
                            <br></br>

                            <section class="section componentes">

                                <label class="label">Proprietario: <p class = "paragrafo">João da Silva</p> </label>

                                <label class="label"> Id: <p class = "paragrafo">1234087965</p> </label>

                                <label class="label"> Nome: <p class = "paragrafo">Max</p></label>

                                <label class="label"> Tipo: <p class = "paragrafo">Cachorro</p></label>

                                <label class="label"> Raça: <p class = "paragrafo">Pastor Alemão</p></label>

                                <label class="label"> <a> Imagens: </a> </label>
                                <button class="botoes botao-add componentes btn btn-outline-light"><i class="far fa-plus-square"></i></button>

                                <label class="label"> Reservas: </label>
                                <p class="paragrafo-reserva">02/05/2021 - 07/05/2021 (completa)</p>
                                <br></br>
                            </section>

                            <button class="btn-voltar btn btn-outline-primary"><i class="fas fa-arrow-left"></i>  Voltar</button>

                        </div>

                    </div>

                </div>

            </div>

        </Menu>
                
    )}