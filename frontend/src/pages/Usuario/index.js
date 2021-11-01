import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import Menu from '../barraLateral'

export default function Usuario() {

    const history=useHistory();

    return (
        <Menu cachorro = 'viralata' >
            
            <div>
                <div class=" col-sm-12">

                    <hr></hr>

                    <div class=" painel-componentes">
                        <div class="">

                            <div class="">
                                <h5> Home/Usuários</h5>
                            </div>

                            <div class=" usuarios-componentes">
                                <section>
                                    <h3 class="componentes botoes"> Usuário </h3>
                                </section>

                                <section>
                                    <button class="componentes botoes btn btn-outline-primary " onClick={()=>history.push('/cadastrarUsuario')}> <i class="fas fa-user-plus"></i> Novo</button>
                                    <button class="componentes botoes btn btn-outline-primary "> <i class="fas fa-user-minus"></i> Remover</button>
                                    <button class="componentes botoes btn btn-outline-primary "><i class="fas fa-check"></i> Mudar Status</button>
                                </section>

                                <section>
                                    <label class="componentes botoes">Visualizar Por:</label>
                                    <button class="componentes botoes btn btn-outline-danger">Usuário</button>
                                    <button class="componentes botoes btn btn-outline-primary">Função</button>

                                </section>
                            </div>


                        </div>

                        <div class=" div-inputs">
                            <section>
                                <input class="componentes" placeholder="ID"></input>
            
                                <label>Criado em:
                                    <input class="componentes" type="date" ></input>
                                </label>
                                <input class="componentes" type="date" ></input>
            
                            </section>

                            <section>
                                    <input class="componentes" type="email" placeholder="exemple@gmail.com"></input>
                                    <input class="componentes" type="text" placeholder="João da silva"></input>
                            </section>

                            <section>
                                <select class=" componentes form-select-sm select-status" aria-label="Default select example-sm">
                                        <option selected>Status</option>
                                        <option value="1">Ativo</option>
                                        <option value="2">Desativado</option>
                                </select>
                                        
            
                                <input class="componentes" placeholder="Função"></input>
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
                                        <th scope="col"> <i class="fas fa-user-circle"></i> Foto </th>
                                        <th scope="col">E-mail <i class="fas fa-arrow-down"></i> </th>
                                        <th scope="col">Nome <i class="fas fa-arrow-down"></i> </th>
                                        <th scope="col">Função <i class="fas fa-arrow-down"></i> </th>
                                        <th scope="col">Status <i class="fas fa-arrow-down"></i> </th>
                                        <th scope="col">Criado em <i class="fas fa-arrow-down"></i> </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row"><i class="fas fa-address-card"></i></th>
                                        <td>exemple@gmail.com</td>
                                        <td>Carlos Targaryan</td>
                                        <td>rei de westero</td>
                                        <td>Desativado</td>
                                        <td>20/03/1960</td>
                                        <td class="linha-funcoes">Editar</td>
                                        <td class="linha-funcoes">Visualizar</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><i class="fas fa-address-card"></i></th>
                                        <td>Exemplo@yahoo.com</td>
                                        <td>Josue Lannister</td>
                                        <td>Guarda</td>
                                        <td>Ativo</td>
                                        <td>20/08/2001</td>
                                        <td class="linha-funcoes" cursor>Editar</td>
                                        <td class="linha-funcoes">Visualizar</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><i class="fas fa-address-card"></i></th>
                                        <td colspan="1"></td>
                                        <td>Larry the Bird</td>
                                        <td>Feiticeira real</td>
                                        <td>Ativo</td>
                                        <td>03/11/2013</td>
                                        <td class="linha-funcoes">Editar</td>
                                        <td class="linha-funcoes">Visualizar</td>
                                    </tr>
                                    </tbody>
                            </table>

                        </div>

                    </div>

                </div>

            </div>
    </Menu>
    )
}