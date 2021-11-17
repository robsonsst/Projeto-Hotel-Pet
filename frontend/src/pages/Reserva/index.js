import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import Menu from '../barraLateral'

export default function Reserva() {

    const initReserva = {

        id: '',
        pet: '',
        chegada: '',
        partida: '',
        status: '',
        total: ''
    }

    const history = useHistory();
    const [reservas, setReservas] = useState([]);
    const [reserva, setReserva] = useState(initReserva);


    useEffect(() => {

        api.get('reserva').then(response => {
            setReservas(response.data);
        })
        
    }, [])

    function onSubmit(ev) {

        ev.preventDefault();
        api.post('/reserva/pesquisa', reserva).then((response) => {
            setReservas(response.data)
        })
    }

    function onChange(ev) {
        const { id, value } = ev.target;
        setReserva({ ...reserva, [id]: value });
        console.log(reserva)
    }

    function limparCampo(){  
        setReserva(initReserva);
    }

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

                    <form onSubmit={onSubmit} class=" div-inputs"> 

                        <section>

                            <input class="componentes"id="id" onChange={onChange} placeholder="ID" value={reserva.id}></input>
                            
                            <label>Período:

                                <input class="componentes" id="chegada" type="date" onChange={onChange} value={reserva.chegada}></input>
                                                                
                            </label>
                            
                            <input class="componentes" id="partida" type="date" onChange={onChange} value={reserva.partida}></input>

                        </section>

                        <section>
                            <input class="componentes" type="text" placeholder="João da silva"></input>

                            <label>Total:
                                <input class="componentes" type="number" min="0.00" max="10000.00" step="0.01" placeholder="R$ 0,00" id = "total" onChange={onChange} value={reserva.total}></input>
                            </label>
                            
                            <input class="componentes" type="number" min="0.00" max="10000.00" step="0.01" placeholder="R$ 0,00"></input>
                        </section>

                        <section>
                            <select class=" componentes form-select-sm select-status" aria-label="Default select example-sm" id="status" onChange={onChange} value={reserva.status}>
                                <option selected>Status</option>
                                <option value="ativado">Ativo</option>
                                <option value="desativado">Desativado</option>
                            </select>

                            <input class="componentes"id="pet" onChange={onChange} placeholder="Pet" value={reserva.pet}></input>
                            
                        </section>

                        <div class=" div-botoes-pesquisa">

                                <button class="botoes btn btn-outline-primary" type="submit" ><i class="fas fa-search"></i> Pesquisar</button>
                                <button class="botoes btn btn-outline-primary"type="button" onClick={ limparCampo} > <i class="fas fa-redo"></i> Limpar</button>

                        </div>

                    </form>
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
                                
                                {reservas.map( reserv =>(
                                    <tr key={reserv.id}>
                                        
                                        <th scope="row"><i class="fas fa-address-card"></i></th>
                                        <td>{reserv.idPet}</td>
                                        <td>{reserv.dataInicial}</td>
                                        <td>{reserv.dataFinal}</td>
                                        <td>{reserv.status}</td>
                                        <td>{reserv.diaria}</td>
                                        <td class="linha-funcoes"><Link to={`/reserva/editar/${reserv.id}`}>Editar </Link></td>
                                        <td class="linha-funcoes"><Link to={`/reserva/ver/${reserv.id}`}>Visualizar </Link></td>
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