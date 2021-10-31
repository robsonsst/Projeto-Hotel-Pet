import React, { useState, useEffect } from 'react';
import './style.css';

export default function Reserva() {

    return (

        <div>
            <div class=" col-sm-12">

                <hr></hr>

                <div class=" painel-componentes">
                    <div class=""></div>

                            <div class="">
                                <h5> Home/Reservas</h5>
                            </div>
                            <div class=" usuarios-componentes">
                                <section>
                                    <h3 class ="componentes botoes"> Reservas </h3>
                                </section>
    
                                <section>
                                    <button class="componentes botoes btn btn-outline-primary "><i class="fas fa-user-plus"></i> Nova Reserva+</button>
                                </section>

                            </div>
                            <div class=" div-inputs"> 
                            
                            <section>
                                <input class="componentes" placeholder="ID"></input>
        
                                <label>Período:
                                    <input class="componentes" type="date" ></input>
                                </label>
                                <input class="componentes" type="date" ></input>
        
                            </section>
        
                            <section>
                                <input class="componentes" type="text" placeholder="João da silva"></input>
                                <label>Total:
                                    <input class="componentes" type="number" min="0.00" max="10000.00" step="0.01" placeholder="R$ 0,00"></input>
                                </label>
                                <input class="componentes" type="number" min="0.00" max="10000.00" step="0.01" placeholder="R$ 0,00"></input>
                            </section>
        
                            <section>
                                <select class=" componentes form-select-sm select-status" aria-label="Default select example-sm">
                                    <option selected>Status</option>
                                    <option value="1">Ativo</option>
                                    <option value="2">Desativado</option>
                                </select>
                                    
        
                                <input class="componentes" placeholder="Pet"></input>
                            </section>
    
                            <div class=" div-botoes-pesquisa">
    
                                <button class="botoes btn btn-outline-primary"><i class="fas fa-search"></i> Pesquisar</button>
                                <button class="botoes btn btn-outline-primary"> <i class="fas fa-redo"></i> Limpar</button>
        
                            </div>
    
                        </div>
                        <div class="div-tabela"> 
                            <table class="table table-striped table-hover ">
                                <thead class="linha-tabela">
                                  <tr>
                                    <th scope="col"> Id <i class="fas fa-user-circle"></i> </th>
                                    <th scope="col">Pet <i class="fas fa-arrow-down"></i> </th>
                                    <th scope="col">Chegada <i class="fas fa-arrow-down"></i> </th>
                                    <th scope="col">Partida <i class="fas fa-arrow-down"></i> </th>
                                    <th scope="col">Status <i class="fas fa-arrow-down"></i> </th>
                                    <th scope="col">Total <i class="fas fa-arrow-down"></i> </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>123456789</td>
                                    <td>Carlos Targaryan</td>
                                    <td>20/03/1960</td>
                                    <td>21/03/1960</td>
                                    <td>Desativado</td>
                                    <td>R$40,00</td>
                                    <td class="linha-funcoes">Editar</td>
                                    <td class="linha-funcoes">Visualizar</td>
                                  </tr>
                                  <tr>
                                    <td>123456785</td>
                                    <td>Josue Lannister</td>
                                    <td>20/08/2001</td>
                                    <td>20/08/2001</td>
                                    <td>Ativo</td>
                                    <td>R$45,00</td>
                                    <td class="linha-funcoes" cursor>Editar</td>
                                    <td class="linha-funcoes">Visualizar</td>
                                  </tr>
                                  <tr>

                                    <td>0320131198</td>
                                    <td>Larry the Bird</td>
                                    <td>03/11/2013</td>
                                    <td>20/08/2013</td>
                                    <td>Ativo</td>
                                    <td>R$40,00</td>
                                    <td class="linha-funcoes">Editar</td>
                                    <td class="linha-funcoes">Visualizar</td>
                                  </tr>
                                </tbody>
                            </table>
    
                        </div>
                        
                    </div>
                </div>
            
    
        </div>
    )
}