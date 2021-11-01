import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import Menu from '../barraLateral'

export default function Pet() {

    const history=useHistory();

    return (
        <Menu>

            <div class=" col-sm-12">

                <hr></hr>

                <div class=" painel-componentes">
                        <div class=""> 
                            
                            <div class="">
                                <h5> Home/Pets</h5>
                            </div>
    
                            <div class=" usuarios-componentes">
                                <section>
                                    <h3 class ="componentes botoes"> Pets </h3>
                                </section>
    
                                <section>
                                    <button class="componentes botoes btn btn-outline-primary " onClick={()=>history.push('/cadastrarPet')}> <i class="fas fa-user-plus"></i> Novo Pet</button>
                                </section>

                            </div>
                            
    
                        </div>
    
                        <div class=" div-inputs"> 
                            
                            

                            <section>
                                <input class="componentes" placeholder="ID"></input>
                            </section>
        
                            <section>
                                <input class="componentes" type="text" placeholder="João da silva"></input>
                            </section>
        
                            <section>
                                <input class="componentes" type="text" placeholder="Raça"></input>
        
                                <input class="componentes" placeholder="Tamanho"></input>
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
                                    <th scope="col">Nome <i class="fas fa-arrow-down"></i> </th>
                                    <th scope="col">Tipo <i class="fas fa-arrow-down"></i> </th>
                                    <th scope="col">Raça <i class="fas fa-arrow-down"></i> </th>
                                    <th scope="col">Tamano <i class="fas fa-arrow-down"></i> </th>
                                   
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>123456789</td>
                                    <td>Carlos Targaryan</td>
                                    <td>Cachorro</td>
                                    <td>Pastor Alemão</td>
                                    <td>Grande</td>
                                    <td class="linha-funcoes">Editar</td>
                                    <td class="linha-funcoes">Visualizar</td>
                                  </tr>
                                  <tr>
                                    <td>123456785</td>
                                    <td>Josue Lannister</td>
                                    <td>Gato</td>
                                    <td>Sphynx</td>
                                    <td>Pequeno</td>
                                    <td class="linha-funcoes" cursor>Editar</td>
                                    <td class="linha-funcoes">Visualizar</td>
                                  </tr>
                        
                                </tbody>
                            </table>
    
                        </div>
                        
                    </div>
                </div>
            
        </Menu>
    )
}