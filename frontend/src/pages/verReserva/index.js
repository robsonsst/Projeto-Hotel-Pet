import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../services/api';
import './style.css';
import Menu from '../barraLateral';

export default function VerReserva() {

    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var dataAtual = dia + '/' + mes + '/' + ano;

    const { id } = useParams(); 
    const history = useHistory();

    const initReserva = {

        dataInicial: '',
        dataFinal: '',
        notas: '',
        notasFuncionario: 'AAA',
        idPet: '',
        idUsuario: '',
        notasFuncionario: '',
        status: '',
        diaria: 10.0,
        criacaoReserva: dataAtual,
        atualizacaoReserva: dataAtual
    }

    const initUser ={
        id: '',
        nome: ''
    }

    const [reservas, setReservas] = useState(initReserva);
    const [usuario, setUser] = useState(initUser);

    useEffect(() => {
        if (id) {
            api.get(`/reserva/${id}`).then(response => {
                setReservas(...response.data);
            })
        }
    }, []);

    useEffect(() => {
       
        api.get(`/usuario/${reservas.idUsuario}`).then(response => {
            setUser(...response.data);
        })

    }, []);

    async function handleDelete(id){

        try{
            await api.delete(`/reserva/${id}`)
            history.push('/reserva');
        }catch(err){
            
            alert('erro ao deletar');
        }
    }

    return (

        <Menu>
            <div class=" col-sm-12">

                <hr></hr>
                <div class=" painel-componentes">
                    <div class="">
                       
                        <div class="titulo-pagina">
                            <h5> Home/Reserva/Ver Reserva</h5>
                        </div>

                        <div class="main">

                            <section>
                                <h3 class="titulo-editar-reserva"> Ver Reserva </h3>
                            </section>

                            <button class="botoes titulo-ver-pet btn btn-outline-primary"><i class="fas fa-pen"></i>Editar</button>                            

                            <button class="botoes btn btn-outline-primary" onClick={ ()=> handleDelete(id) }><i class="fas fa-backspace"></i>Deletar</button>
                            <br></br>

                            <section class="section componentes">

                                <label class="label"> Id: <p class = "paragrafo">{id}</p> </label>

                                <label class="label" >Proprietario: <p class = "paragrafo" >{usuario.nome} </p> </label>

                                <label class="label"> Pet: <p class = "paragrafo">{reservas.idPet}</p></label>

                                <label class="label"> Chegada: <p class = "paragrafo">{reservas.dataInicial}</p></label>

                                <label class="label"> Partida: <p class = "paragrafo">{reservas.dataFinal}</p></label>

                                <div class="div-anotacoes">
                                    <label for="notas" class="label"> Notas:</label>
                                    <p id="notas" class="paragrafo"> {reservas.notas}</p>
                                </div>

                                <div class="div-anotacoes">
                                    <label for="anotacao-funcionario" class="label"> Anotações do Funcionario:</label>
                                    <p id="anotacao-funcionario" class="paragrafo"> {reservas.notasFuncionario}</p>
                                </div>

                                <label class="label"> <p> Imagens: </p></label>
                                 <button class="botoes botao-add btn btn-outline-light"><i class="far fa-plus-square"></i></button>

                                    <label class="label"> Status: <button class="botoes btn btn-light">{reservas.status}</button>  </label>

                                    <label class="label"> total das diarias: <p class="paragrafo">{reservas.diaria} </p></label>

                                    <label class="label"> Recibo: <p class = "paragrafo"><i class="fas fa-paperclip"></i>recibo.pdf</p></label>

                                    <label class="label"> Criada em: <p class = "paragrafo">{reservas.dataInicial}</p></label>

                                    <label class="label"> Chegada em: <p class = "paragrafo">{reservas.dataInicial}</p></label>

                            </section>

                            <button class="btn-voltar btn btn-outline-primary"><i class="fas fa-arrow-left"></i>  Voltar</button>

                            <button class="btn-<button btn-voltar btn btn-outline-primary" onClick={()=>{ history.push('/reserva')}}><i class="fas fa-arrow-left"></i>  Voltar</button>


                        </div>

                    </div>

                </div>

            </div>
            
        </Menu>

    )}