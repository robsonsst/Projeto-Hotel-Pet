import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../services/api'
import './style.css';
import Menu from '../barraLateral'

export default function EditarReserva() {
    
    const { id } = useParams();
    const history = useHistory();

    const initReserva = {
        
        pet: '',
        chegada: '',
        partida: '',
        status: '',
        total: ''
    }

    const [reservas, setReservas] = useState(initReserva);

    useEffect(() => {
        if (id) {
            api.get(`/reserva/${id}`).then(response => {
                setReservas(...response.data);
            })
        }

    }, []);

    function onSubmit(ev) {
        
        ev.preventDefault();
        const method = id ? 'put' :'post';
        const url = id ? `/reserva/${id}`: '/reserva';

        api[method](url, reservas).then((response) => {
            history.push('/reserva')
        })

    }

    function onChange(ev) {

        const { id, value } = ev.target;
        setReservas({ ...reservas, [id]: value });
    }

    function limparCampo() {

        setReservas(initReserva);
    }

    return (

        <Menu>
            <div class=" col-sm-12">

                <hr></hr>
                <div class=" painel-componentes">
                        <div class=""> 

                            <div class="titulo-pagina">
                                <h5> Home/Reserva/Editar Reserva</h5>
                            </div>
    
                            <form onSubmit={onSubmit} class="main">
                                
                                <section>
                                    <h3 class ="titulo-editar-reserva"> Editar Reserva </h3>
                                </section>

                                <section class="section componentes">

                                    <label for="idUsuario"> Proprietario*</label>
                                    <input class="input" type="text"></input>

                                    <label for="pet"> Pet*</label>
                                    <input id="pet" class="input" onChange={onChange} value={reservas.pet} type="text"></input>
                                </section>

                                <section class="section-data componentes">
                                    <label for="periodo"> Período*</label>
                                    <br></br>
                                    <input class="componentes" id="chegada" type="date" onChange={onChange} value={reservas.chegada}></input>
                                    
                                    <input class="componentes" id="partida" type="date" onChange={onChange} value={reservas.partida}></input>
                                </section>

                                <section class="section componentes">

                                    <label for="notas"> Notas</label>
                                    <textarea id="notas" class="input notas" rows="10" cols="30" maxlength="200" onChange={onChange} value={reservas.notas}></textarea>

                                    <label for="select"> Status*</label>
                                    <select class=" input form-select-sm select-status" aria-label="Default select example-sm" id="status" onChange={onChange} value={reservas.status}>
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
                                    <label class="componentes"> total das diarias: <a>R$: 10,00 </a></label> 
                                    <br></br>
                                    <br></br>                        
                                    <button class="botoes componentes btn btn-primary" type="submit"><i class="far fa-save"></i> Salvar</button>
                                    <button class="botoes componentes btn btn-outline-primary" onClick={ limparCampo} > <i class="fas fa-redo"></i>Limpar</button>
                                </div>
                                
                            </form>
                            
                        </div>
                        
                    </div>

                </div>
        </Menu>
    )
}