import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import { useHistory} from "react-router-dom";
import './style.css';
import Menu from '../barraLateral'


export default function CadastrarPet() {
    
    const history = useHistory();

    const initUser={
        proprietario: '',
        nome: '',
        tipo: '',
        raça: '',
        tamanho: ''
    }
    
    const [usuario, setUser] = useState(initUser);

    function onSubmit(ev) {
        ev.preventDefault();
        api.post('/pet', usuario).then((response) => {
            history.push('/pet')
        })

    }

    function onChange(ev) {
        const { id, value } = ev.target;
        setUser({ ...usuario, [id]: value });
        console.log(usuario);
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

                            <form class="section componentes" onSubmit = {onSubmit}>
                                
                                <label for="proprietario"> Proprietario*</label>
                                <input id="proprietario" class="input" type="text" onChange={onChange} value={usuario.proprietario}></input>

                                <label for="pet"> Nome*</label>
                                <input id="nome" class="input" type="text" onChange={onChange} value={usuario.nome}></input>

                                <label for="select">Tipo*</label>
                                <select id="tipo"  onChange={onChange} value={usuario.tipo} class=" input form-select-sm select-status" aria-label="Default select example-sm">
                                    <option selected>Tipo</option>
                                    <option value="1">Gato</option>
                                    <option value="2">Cachorro</option>
                                </select>

                                <label for="pet">Raça*</label>
                                <input id="raça" class="input" type="text"onChange={onChange} value={usuario.raça}></input>

                                <label for="select">Tamanho*</label>
                                <select id="tamanho"onChange={onChange} value={usuario.tamanho} class=" input form-select-sm select-status" aria-label="Default select example-sm">
                                    <option selected>Tamanho</option>
                                    <option value="1">Grande</option>
                                    <option value="2">Pequeno</option>
                                </select>

                                <div>
                                    <br></br>
                                    <br></br>
                                    
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