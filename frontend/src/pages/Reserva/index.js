import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { useHistory } from 'react-router-dom';
import './style.css';
import Menu from '../barraLateral'

export default function Reserva() {

    const history = useHistory();
    const [reserva, setUsers] = useState([]);

    useEffect(() => {

        api.get('reserva').then(response => {
            setUsers(response.data);
        })
        
    }, [])

    return (

        <Menu>
            <div class=" col-sm-12">

                <hr></hr>

                <div class=" painel-componentes">
                    <div class=""></div>

                    <div class="">
                        <h5> Home/Reservas</h5>
                    </div>
                    <div class=" usuarios-componentes">
                        <section>
                            <h3 class="componentes botoes"> Reservas </h3>
                        </section>

                        <section>
                            <button class="componentes botoes btn btn-outline-primary " onClick={() => history.push('/reserva/cadastrar')}><i class="fas fa-user-plus"></i> Nova Reserva</button>
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
                            <tbody class="">
                                
                                {reserva.map( user =>(
                                    <tr key={user.id}>
                                        <th scope="row"><i class="fas fa-address-card"></i></th>
                                        <td>{user.proprietario}</td>
                                        <td>{user.dataInicial}</td>
                                        <td>{user.dataFinal}</td>
                                        <td>{user.status}</td>
                                        <td>{user.diaria}</td>
                                        <td class="linha-funcoes">Editar</td>
                                        <td class="linha-funcoes">Visualizar</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>

                </div>
            </div>


        </Menu>
    )
}