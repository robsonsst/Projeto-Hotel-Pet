import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { useHistory } from "react-router-dom";
import './style.css';
import Menu from '../barraLateral'


export default function CadastrarPet() {


    const history = useHistory();

    const [usuario, setUsers] = useState([]);


    const initPet = {
        nome: '',
        tipo: '',
        raça: '',
        tamanho: '',
        imagemCaminho: ''
    }
    const [pet, setUser] = useState(initPet);

    useEffect(() => {

        api.get('usuario').then(response => {
            setUsers(response.data);
        })

    }, [])

    function onSubmit(ev) {
        ev.preventDefault();
        api.post('/pet', pet).then((response) => {

            history.push('/pet')
        })

    }

    function onChange(ev) {
        const { id, value } = ev.target;
        setUser({ ...pet, [id]: value });
        console.log(pet);

    }

    return (

        <Menu>
            <div class=" col-sm-12">

                <hr></hr>
                <div class=" painel-componentes">
                    <div class="">

                        <div class="titulo-pagina">
                            <h5> Home/Reserva/Novo Pet</h5>
                        </div>

                        <div class="main">

                            <section>
                                <h3 class="titulo-editar-reserva"> Novo Pet </h3>
                            </section>
                            <section class="foto-ao-lado">

                            </section>

                            <form class="section componentes" onSubmit={onSubmit}>

                                <label for="proprietario"> Proprietario*</label>

                                <select id="tamanho" onChange={onChange} class=" input form-select-sm select-status" aria-label="Default select example-sm">
                                    {usuario.map(user => (
                                        <option value={user.nome}>{user.nome}</option>
                                    ))}
                                </select>



                                <label for="nome"> Nome*</label>
                                <input id="nome" class="input" type="text" onChange={onChange} value={pet.nome}></input>

                                <label for="tipo">Tipo*</label>
                                <select id="tipo" onChange={onChange} value={pet.tipo} class=" input form-select-sm select-status" aria-label="Default select example-sm">

                                    <option selected>Tipo</option>
                                    <option value="Gato">Gato</option>
                                    <option value="Cachorro">Cachorro</option>
                                </select>

                                <label for="raça">Raça*</label>
                                <input id="raça" class="input" type="text" onChange={onChange} value={pet.raça}></input>

                                <label for="tamanho">Tamanho*</label>
                                <select id="tamanho" onChange={onChange} value={pet.tamanho} class=" input form-select-sm select-status" aria-label="Default select example-sm">
                                <div>
                                    <button class="botoes componentes btn btn-primary" type="submit"
                                    ><i class="far fa-save"></i> Salvar</button>

                                    <button class="botoes componentes btn btn-outline-primary"  > <i class="fas fa-redo"></i>Limpar</button>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </Menu>
    )
}