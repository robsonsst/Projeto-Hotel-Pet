import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './style.css';
import Menu from '../barraLateral';
import api from '../../services/api';

export default function EditarPet() {

    const { id } = useParams();
    const history = useHistory();

    const initPet = {

        id: '',
        nome: '',
        tipo: '',
        raca: '',
        tamanho:''
    }

    const [user, setUser] = useState(initPet);

    useEffect(() => {
        if (id) {
            api.get(`/pet/${id}`).then(response => {
                setUser(...response.data);
            })
        }

    }, []);

    function onSubmit(ev) {
        ev.preventDefault();
        const method = id ? 'put' :'post';
        const url = id ? `/pet/${id}`: '/pet';

        api[method](url, user).then((response) => {
            history.push('/pet')
        })

    }

    function onChange(ev) {
        const { id, value } = ev.target;
        setUser({ ...user, [id]: value });
    }

    function limparCampo() {

        setUser(initPet);
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

                        <div class="main">

                            <section>
                                <br></br>
                                <h3 class="titulo-editar-reserva"> Editar Pet </h3>
                            </section>
                            <section class="foto-ao-lado">

                            </section>

                            <form class="section componentes" onSubmit={onSubmit}>

                    
                                <input class="componentes" id="nome" onChange={onChange} type="text" placeholder="João da silva" value={user.nome}> </input>
                                
                                <section>
                                    <select class=" componentes form-select-sm select-status" aria-label="Default select example-sm">

                                        <option selected>Tipo</option>
                                        <option value="Gato">Gato</option>
                                        <option value="Cachorro">Cachorro</option>
                                    </select> 
                                </section>   
                                
                                <section>
                                        <input class="componentes" id="raca" onChange={onChange} type="text" placeholder="Raça" value={user.raca}> </input>            
                                </section>

                                <section>
                                    <select class=" componentes form-select-sm select-status" aria-label="Default select example-sm">

                                        <option selected>Tamanho</option>
                                        <option value="pegueno">Pequeno</option>
                                        <option value="medio">Medio</option>
                                        <option value="grande">Grande</option>
                                    </select> 

                                </section>

                                <div>
                                    <br></br>
                                    <button class="botoes componentes btn btn-primary" type="submit"  ><i class="far fa-save"></i> Salvar</button>
                                    <button class="botoes componentes btn btn-outline-primary" type='button' onClick={limparCampo}  > <i class="fas fa-redo"></i>Limpar</button>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </Menu>

    )
}