import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../services/api';
import './style.css';
import Menu from '../barraLateral';

export default function VerPet() {

    const { id } = useParams();
    const history = useHistory();

    const initPet = {

        nome: '',
        tipo: '',
        raça: '',
        tamanho: '',
        idUsuario: ''
    }

    const initUser ={
        id: '',
        nome: ''
    }

    const [pets, setPets] = useState(initPet);
    const [usuario, setUser] = useState(initUser);

    useEffect(() => {
        if (id) {
            api.get(`/pet/${id}`).then(response => {
                setPets(...response.data);
            })
        }
    }, []);

    useEffect(() => {
       
        api.get(`/usuario/${pets.idUsuario}`).then(response => {
            setUser(...response.data);
        })

    }, []);

    async function handleDelete(id){

        try{
            await api.delete(`/pet/${id}`)
            history.push('/pet');
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
                            <h5> Home/Pet/Ver Pet</h5>
                        </div>

                        <div class="main">

                            <section>
                                <h3 class="titulo-ver-pet"> Ver Pet </h3>
                            </section>

                            <button class="botoes titulo-ver-pet btn btn-outline-primary"><i class="fas fa-pen"></i>Editar</button>

                            <button class="botoes btn btn-outline-primary" onClick={ ()=> handleDelete(id) }><i class="fas fa-backspace"></i>Deletar</button>
                            <br></br>

                            <section class="section componentes">

                                <label class="label" >Proprietario: <p class = "paragrafo" >{usuario.nome} </p> </label>
                                <label class="label"> Id: <p class = "paragrafo">{id}</p> </label>

                                <label class="label"> Nome: <p class = "paragrafo">{pets.nome}</p></label>

                                <label class="label"> Tipo: <p class = "paragrafo">{pets.tipo}</p></label>

                                <label class="label"> Raça: <p class = "paragrafo">{pets.raça}</p></label>

                                <label class="label"> <a> Imagens: </a> </label>
                                <button class="botoes botao-add componentes btn btn-outline-light"><i class="far fa-plus-square"></i></button>

                                <label class="label"> Reservas: </label>
                                <p class="paragrafo-reserva">02/05/2021 - 07/05/2021 (completa)</p>
                                <br></br>
                            </section>

                            <button class="btn-voltar btn btn-outline-primary" onClick={()=>{ history.push('/pet')}}><i class="fas fa-arrow-left"></i>  Voltar</button>

                        </div>

                    </div>

                </div>

            </div>

        </Menu>
                
    )}