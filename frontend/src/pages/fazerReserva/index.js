import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import './style.css';
import Menu from '../barraLateral';

export default function FazerReserva() {

    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var dataAtual = dia + '/' + mes + '/' + ano;

    const history = useHistory();

    const initReserva = {

        dataInicial:'',
        dataFinal:'',
        notas: '',
        notasFuncionario: "sem valor",
        idPet: '',
        idUsuario: '',
        notasFuncionario: '',
        status: 'reservado',
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

        api.get('usuario').then(response => {
            setUsers(response.data);
        })

    }, [])

    useEffect(() => {

        api.get('pet').then(response => {
            setPets(response.data);
        })

    }, [])

    function onSubmit(ev) {
        ev.preventDefault();
        api.post('/reserva', reserva).then((response) => {
            history.push('/reserva')
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
                        <div class="">

                            <div class="titulo-pagina">
                                <h5> Home/Reservas/Nova Reserva</h5>
                            </div>
    
                            <div class="main">
                                
                                <section>
                                    <br></br> 
                                    <h3 class ="titulo-editar-reserva"> Fazer Reserva </h3>
                                </section>

                                <form onSubmit={onSubmit}>
                            
                                    <section class="section componentes">
                                        <br></br> 
                                        <label for="idPet"> Pet*</label>
                                        <select id="idPet" onChange={onChange} class=" input form-select-sm select-status" aria-label="Default select example-sm">
                                            {pet.map(pet => (
                                                <option value={pet.id}>{pet.nome}</option>
                                            ))}
                                        </select>
                                        <br/>
                                        
                                        <label for="idUsuario"> Proprietario*</label>
                                        <select id="idUsuario" onChange={onChange} class=" input form-select-sm select-status" aria-label="Default select example-sm">
                                            {usuario.map(user => (
                                                <option value={user.id}>{user.nome}</option>
                                            ))}
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

                                    </section>

                                    <div>    

                                        <button class="botoes componentes btn btn-primary" type="submit"><i class="far fa-save"></i> Salvar</button>
                                        <button class="botoes componentes btn btn-outline-primary" onClick={ limparCampo} > <i class="fas fa-redo"></i>Limpar</button>
                                    </div>

                                </form>
                                                            
                            </div>
                            
                        </div>
                        
                    </div>

                </div>
            
        </Menu>                            
    )
}