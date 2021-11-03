import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { useHistory } from 'react-router-dom';
import './style.css';
import Menu from '../barraLateral'

export default function CadastrarUsuario() {
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var dataAtual = dia + '/' + mes + '/' + ano;

    const history = useHistory();

    const initUser = {

        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        criado_em: dataAtual
    }

    const [usuario, setUser] = useState(initUser);

    function onSubmit(ev) {
        ev.preventDefault();
        api.post('/usuario', usuario).then((response) => {
            history.push('/')
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
                            <h5> Home/Usuário/Novo Usuário</h5>
                        </div>

                        <div class="main">

                            <section>
                                <h3 class="titulo-cadastrar-usuario"> Cadastrar Usuário</h3>
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



                                <div>
                                    <label class="componentes"><a> Foto </a></label>
                                    <br></br>
                                    <button class="botoes botao-add componentes btn btn-outline-light" type='button' ><i class="far fa-plus-square"></i></button>
                                    <br></br>
                                    <br></br>
                                    <button class="botoes componentes btn btn-primary" type="submit"  ><i class="far fa-save"></i> Salvar</button>
                                    <button class="botoes componentes btn btn-outline-primary" type='reset' onClick={() => history.push('/')} > <i class="fas fa-redo"></i>Limpar</button>
                                    
                                </div>

                                
                            </form>
                        </div>

                    </div>

                </div>

            </div>
        </Menu>
    )
}