import React from 'react';
import './style.css';
import Menu from '../barraLateral'

export default function editarReservaFinalizada() {

    return (

        <Menu>
            
            <div class=" col-sm-12">

                <hr></hr>

                <div class=" painel-componentes">
                    <div class="">
                       

                        <div class="titulo-pagina">
                            <h5> Home/Reserva/Editar Reserva Finalizada</h5>
                        </div>

                        <div class="main">

                            <section>
                                <h3 class="titulo-editar-reserva-finalizada"> Editar Reserva Finalizada</h3>
                            </section>

                            <section class="section componentes">
                                <label for="proprietario"> Proprietario*</label>
                                <input id="proprietario" class="input" type="text"></input>

                                <label for="pet"> Pet*</label>
                                <input id="pet" class="input" type="text"></input>
                            </section>

                            <section class="section-data componentes">
                                <label for="periodo"> Período*</label>
                                <br></br>
                                <input id="periodo" class="input-data" type="date"></input>
                                <input class="input-data" type="date"></input>
                            </section>

                            <section class="section componentes">

                                <label for="notas"> Notas</label>
                                <textarea id="notas" class="input notas" rows="10" cols="30" maxlength="200"></textarea>

                                <label for="select"> Status*</label>
                                <select id="select" class=" input form-select-sm select-status" aria-label="Default select example-sm">
                                        <option selected>Status</option>
                                        <option value="2">Reservado</option>
                                        <option value="1">Em andamento</option>
                                        <option value="2">Cancelado</option>
                                        <option value="2">Finalizado</option>
                                    </select>

                                <label for="anotacoes"> Anotações do Funcionario*</label>
                                <textarea id="anotacoes" class="input notas" rows="10" cols="30" maxlength="200"></textarea>
                            </section>

                            <div>
                                <label class="componentes"> Total das diarias: <a>R$: 40,00 </a></label>
                                <br></br>
                                <br></br>
                                <button class="botoes botao-add componente btn btn-outline-light"><i class="fas fa-sticky-note">Adicionar nota fiscal</i></button>
                                <br></br>
                                <label class="componentes"><i class="fas fa-paperclip">  <a>recibo.pdf </a></i></label>
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