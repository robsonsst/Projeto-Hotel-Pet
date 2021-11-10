import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import Menu from '../barraLateral'

export default function Reserva() {

    const initReserva = {

        id: '',
        nome: '',
        pet: '',
        chegada: '',
        partida: '',
        status: '',
        total: ''
    }

    const history = useHistory();
    const [reserva, setUsers] = useState([]);
    const [user, setUser] = useState(initReserva);

    useEffect(() => {

        api.get('reserva').then(response => {
            setUsers(response.data);
        })
        
    }, [])

    function onChange(ev) {
        const { id, value } = ev.target;
        setUser({ ...reserva, [id]: value });
        console.log(reserva);
    }

    function limparCampo(){  
        setUser(initReserva);
    }

    return (

        <Menu>
            <div>

                <div class=" col-sm-12">

                    <hr />

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
                                <input class="componentes"id="id" onChange={onChange} placeholder="ID" value={user.id}></input>

                                <label>Período:
                                    <input class="componentes" id="chegada" onChange={onChange} type="date" value={user.chegada}> </input>
                                </label>
                                <input class="componentes" id="partida" onChange={onChange} type="date" value={user.partida}> </input>

                            </section>

                            <section>
                                <input class="componentes" id="nome" onChange={onChange} type="text" placeholder="João da silva" value={user.nome}></input>
                                <label>Total:
                                    <input class="componentes" onChange={onChange} type="number" min="0.00" max="10000.00" step="0.01" value={user.total} placeholder="R$ 0,00"></input>
                                </label>
                            </section>

                            <section>
                                <select class=" componentes form-select-sm select-status" aria-label="Default select example-sm">
                                    <option selected>Status</option>
                                    <option value="ativado">Ativo</option>
                                    <option value="desativado">Desativado</option>
                                </select>


                                <input class="componentes" id="pet" onChange={onChange} placeholder="Pet" value={user.pet}></input>
                            </section>

                            <div class=" div-botoes-pesquisa">

                                <button class="botoes btn btn-outline-primary"><i class="fas fa-search"></i> Pesquisar</button>
                                <button class="botoes btn btn-outline-primary" type="button" onClick={ limparCampo} > <i class="fas fa-redo"></i> Limpar</button>

                            </div>

                        </div>
                        <div class="div-tabela">
                            <table class="table table-striped table-hover ">
                                <thead class="linha-tabela">
                                    <tr>
                                        <th scope="col"> Id <i class="fas fa-user-circle"></i> </th>
                                        <th scope="col">Pet <i class="fas fa-arrow-down"></i> </th>
                                        <th scope="col">Nome <i class="fas fa-arrow-down"></i> </th>
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
                                            <td>{user.pet}</td>
                                            <td>{user.dataInicial}</td>
                                            <td>{user.dataFinal}</td>
                                            <td>{user.status}</td>
                                            <td>{user.diaria}</td>
                                            <td class="linha-funcoes"><Link to={`/reserva/editar/${user.id}`}>Editar </Link></td>
                                            <td class="linha-funcoes"><Link to={`/reserva/ver/${user.id}`}>Visualizar </Link></td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
            </div>
        </Menu>
    )
}