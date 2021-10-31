import React, { useState, useEffect } from 'react';
import './style.css';
import Menu from '../barraLateral'

export default function verReserva() {

    return (

        <Menu>
            <div class=" col-sm-12">

                <hr></hr>
                <div class=" painel-componentes">
                    <div class="">
                       
                        <div class="titulo-pagina">
                            <h5> Home/Reserva/Ver Reserva</h5>
                        </div>

                        <div class="main">

                            <section>
                                <h3 class="titulo-editar-reserva"> Ver Reserva </h3>
                            </section>

                            <section class="section componentes">

                                <label class="label"> Id: <p class = "paragrafo">1234087965</p> </label>

                                <label class="label">Proprietario: <p class = "paragrafo">Daenerys targaryen</p> </label>

                                <label class="label"> Pet: <p class = "paragrafo">Drogon</p></label>

                                <label class="label"> Chegada: <p class = "paragrafo">02/05/2021</p></label>

                                <label class="label"> Partida: <p class = "paragrafo">07/05/2021</p></label>

                                <div class="div-anotacoes">
                                    <label for="notas" class="label"> Notas:</label>
                                    <p id="notas" class="paragrafo"> Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus.</p>
                                </div>

                                <div class="div-anotacoes">
                                    <label for="anotacao-funcionario" class="label"> Anotações do Funcionario:</label>
                                    <p id="anotacao-funcionario" class="paragrafo"> Copo furadis é disculpa de bebadis, arcu quam euismod magna. </p>
                                </div>

                                <label class="label"> <a> Imagens: </a></label>
                                 <button class="botoes botao-add btn btn-outline-light"><i class="far fa-plus-square"></i></button>

                                    <label class="label"> Status: <button class="botoes btn btn-light">Finalizado</button>  </label>

                                    <label class="label"> total das diarias: <a class="paragrafo">R$: 40,00 </a></label>

                                    <label class="label"> Recibo: <p class = "paragrafo"><i class="fas fa-paperclip"></i>recibo.pdf</p></label>

                                    <label class="label"> Criada em: <p class = "paragrafo">02/05/2021</p></label>

                                    <label class="label"> Chegada em: <p class = "paragrafo">07/05/2021</p></label>

                            </section>

                            <button class="btn-voltar btn btn-outline-primary"><i class="fas fa-arrow-left"></i>  Voltar</button>

                        </div>

                    </div>

                </div>

            </div>
            
        </Menu>

    )}