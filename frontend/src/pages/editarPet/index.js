import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../services/api'
import './style.css';
import Menu from '../barraLateral'

export default function EditarPet() {

    const { id } = useParams();
    const history = useHistory();

    const initPet = {

        nome: '',
        tipo: '',
        raça: '',
        tamanho: ''
    }

    const [pets, setPets] = useState(initPet);

    useEffect(() => {
        if (id) {
            api.get(`/pet/${id}`).then(response => {
                setPets(...response.data);
            })
        }

    }, []);

    function onSubmit(ev) {
        ev.preventDefault();
        const method = id ? 'put' :'post';
        const url = id ? `/pet/${id}`: '/pet';

        api[method](url, pets).then((response) => {
            history.push('/pet')
        })

    }

    function onChange(ev) {
        const { id, value } = ev.target;
        setPets({ ...pets, [id]: value });
    }

    function limparCampo() {

        setPets(initPet);
    }

    return (

        <Menu>
            <div class=" col-sm-12">

                <hr></hr>
                <div class=" painel-componentes">
                    <div class="">

                        <div class="titulo-pagina">
                            <h5> Home/Pet/Editar Pet</h5>
                        </div>

                        <form onSubmit={onSubmit} class="main">

                            <section>
                                
                                <h3 class="titulo-editar-reserva"> Editar Pet </h3>
                            </section>
                            <section class="foto-ao-lado">

                            </section>

                            <section class="section componentes">

                               
                                <label for="nome"> Nome*</label>
                                <input id="nome" class="input" onChange={onChange} value={pets.nome} type="text"></input>
                                
                                <label for="tipo"> Tipo*</label>
                                <select id="tipo" class=" input form-select-sm select-status" onChange={onChange} value={pets.tipo} aria-label="Default select example-sm">
                                    <option selected>Tipo</option>
                                    <option value="gato">Gato</option>
                                    <option value="cachorro">Cachorro</option>
                                </select>
                              
                                <label for="raça"> Raça*</label>
                                <input id="raça" class="input" onChange={onChange} value={pets.raça} type="text"></input>
                             
                                <label for="tamanho"> Tamanho*</label>
                                <select id="tamanho" class=" input form-select-sm select-status" onChange={onChange} value={pets.tamanho} aria-label="Default select example-sm">
                                    <option selected>Tamanho</option>
                                    <option value="grande">Grande</option>
                                    <option value="pegueno">Pequeno</option>
                                </select>


                            </section>



                            <div>
                                
                                <button class="botoes componentes btn btn-primary" type='submit'><i class="far fa-save"></i> Salvar</button>
                                <button class="botoes componentes btn btn-outline-primary" type='button' onClick={limparCampo}> <i class="fas fa-redo"></i> Limpar</button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </Menu>

    )
}