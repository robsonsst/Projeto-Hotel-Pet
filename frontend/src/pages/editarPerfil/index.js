import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './style.css';
import Menu from '../barraLateral';
import api from '../../services/api';


export default function EditarPerfil() {

    const { id } = useParams();
    const history = useHistory();

    const initUser = {

        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        status: '',
        criado_em: '',
        funcao: ''
    }

    const [usuario, setUser] = useState(initUser);

    useEffect(() => {
        if (id) {
            api.get(`/usuario/${id}`).then(response => {
                setUser(...response.data);
            })
        }

    }, []);

    function onSubmit(ev) {
        ev.preventDefault();
        const method = id ? 'put' :'post';
        const url = id ? `/usuario/${id}`: '/usuario';

        api[method](url, usuario).then((response) => {
            history.push('/')
        })

    }

    function onChange(ev) {
        const { id, value } = ev.target;
        setUser({ ...usuario, [id]: value });
    }

    function limparCampo() {

        setUser(initUser);
    }

    return (

        <Menu>
            <div class=" col-sm-12">

                <hr></hr>
                <div class=" painel-componentes">
                    <div class="">

                        <div class="titulo-pagina">
                            <h5> Home/Editar Perfil</h5>
                        </div>

                        <div class="main">

                            <section>
                                <br></br>
                                <h3 class="titulo-editar-reserva"> Editar Perfil </h3>
                            </section>

                            <form class="section componentes" onSubmit={onSubmit}>


                                <label for="email"> Email*</label>
                                <input id="email" class="input" type="email" onChange={onChange} placeholder="joaodasilva@pet.com" value={usuario.email} />

                                <label for="nome"> Nome*</label>
                                <input id="nome" class="input" type="text" onChange={onChange} placeholder="João" value={usuario.nome} />

                                <label for="sobrenome"> Sobrenome*</label>
                                <input id="sobrenome" class="input" type="text" onChange={onChange} placeholder="da Silva" value={usuario.sobrenome} />

                                <label for="telefone"> Telefone*</label>
                                <input id="telefone" class="input" type="tel" onChange={onChange} placeholder="(73) 99904-0302" value={usuario.telefone} />

                                <label for="funcao"> Função*</label>
                                <select id="funcao" class=" componentes form-select-sm select-status" aria-label="Default select example-sm" onChange={onChange} value={usuario.funcao}>

                                    <option value="cliente">Cliente</option>
                                    <option value="gerente">Gerente</option>
                                    <option value="funcionario">Funcionario</option>
                                </select>

                                <div>
                                    <label class="componentes"><a> Foto </a></label>
                                    <br></br>
                                    <button class="botoes botao-add componentes btn btn-outline-light" type='button'><i class="far fa-plus-square"></i></button>
                                    <br></br>
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