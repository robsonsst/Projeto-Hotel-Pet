import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../services/api'
import './style.css';
import Menu from '../barraLateral'

export default function EditarReserva() {
    
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var dataAtual = dia + '/' + mes + '/' + ano;

    const { id } = useParams();
    const history = useHistory();

    const initReserva = {
        
        dataInicial:'',
        dataFinal:'',
        notas: '',
        notasFuncionario: "sem valor",
        idPet: '',
        idUsuario: '',
        notasFuncionario: '',
        status: '',
        diaria: 10.0,
        criacaoReserva: dataAtual,
        atualizacaoReserva: dataAtual,
        reciboCaminho: '',
        proprietario: 'sem valor'
    }

    const [reserva, setReserva] = useState(initReserva);
    
    const [pet, setPets] = useState([]);

    const [usuario, setUsers] = useState([]);

    useEffect(() => {
        if (id) {
            api.get(`/reserva/${id}`).then(response => {
                setReserva(...response.data);
            })
        }

    }, []);

    useEffect(() => {
        
        api.get(`/usuario`).then(response => {
            setUsers(...response.data);
        })

    }, []);

    useEffect(() => {
        
        api.get(`/pet`).then(response => {
            setPets(...response.data);
        })

    }, []);

    function onSubmit(ev) {
        
        ev.preventDefault();
        const method = id ? 'put' :'post';
        const url = id ? `/reserva/${id}`: '/reserva';

        api[method](url, reserva).then((response) => {
            history.push('/reserva')
        })

    }

    function onChange(ev) {

        const { id, value } = ev.target;
        setReserva({ ...reserva, [id]: value });
    }

    function limparCampo() {

        setReserva(initReserva);
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

                                    <label for="idPet"> Pet*</label>
                                        
                                    <select id="idPet" onChange={onChange} class=" input form-select-sm select-status" aria-label="Default select example-sm">
                                        
                                        <option value={pet.id}>{pet.nome}</option>
                                        
                                    </select>
                                    <br/> 

                                    <label for="idUsuario"> Proprietario*</label>
                                        
                                    <select id="idUsuario" onChange={onChange} class=" input form-select-sm select-status" aria-label="Default select example-sm">
                                       <option value={usuario.id}>{usuario.nome}</option>
                                    </select>
                                    
                                </section>

                                <section class="section-data componentes">
                                    
                                    <label for="periodo"> Período*</label>
                                    <br></br> 
                                    
                                    <input id="dataInicial" class="input-data" type="date" onChange={onChange} value={reserva.dataInicial}></input>
                                    <input id="dataFinal" class="input-data" type="date" onChange={onChange} value={reserva.dataFinal}></input>

                                </section>

                                <section class="section componentes">

                                    <label for="notas"> Notas</label>
                                    
                                    <textarea id="notas" class="input notas" rows="10" cols="30" maxlength="200" onChange={onChange} value={reserva.notas}></textarea>

                                    <label for="select"> Status*</label>
                                    <select class=" input form-select-sm select-status" aria-label="Default select example-sm" id="status" onChange={onChange} value={reserva.status}>

                                        <option selected>Status</option>
                                        
                                        <option value="reservado">Reservado</option>
                                        <option value="em andamento">Em andamento</option>
                                        <option value="finalizada">Finalizado</option>

                                    </select>

                                    <label for="anotacoes"> Anotações do Funcionario*</label>
                                    <textarea id="anotacoes" class="input notas" rows="10" cols="30" maxlength="200" onChange={onChange} value={reserva.notasFuncionario}></textarea>
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