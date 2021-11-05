import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import Menu from '../barraLateral'


export default function Usuario() {

    const history = useHistory();
    const [usuario, setUsers] = useState([]);

    useEffect(() => {

        api.get('usuario').then(response => {
            setUsers(response.data);
        })

    }, [])

    return (
        <Menu>

            <div>
                <div class=" col-sm-12">

                    <hr />

                    <div class=" painel-componentes">
                        <div class="">
                            <div class=""></div>

                            <div class="">
                                <h5> Home/Usuários</h5>
                            </div>

                            <div class=" usuarios-componentes">
                                <section>
                                    <h3 class="componentes botoes"> Usuário </h3>
                                </section>

                                <section>
                                    <button class="componentes botoes btn btn-outline-primary " onClick={() => history.push('/usuario/cadastrar')}> <i class="fas fa-user-plus"></i> Novo</button>
                                    <button class="componentes botoes btn btn-outline-primary "> <i class="fas fa-user-minus"></i> Remover</button>
                                    <button class="componentes botoes btn btn-outline-primary "><i class="fas fa-check"></i> Mudar Status</button>
                                </section>

                                <section>
                                    <label class="componentes botoes">Visualizar Por:</label>
                                    <button class="componentes botoes btn btn-outline-danger">Usuário</button>
                                    <button class="componentes botoes btn btn-outline-primary">Função</button>

                                </section>
                            </div>


                        </div>

                        <div class=" div-inputs">
                            <section>
                                <input class="componentes" placeholder="ID"></input>

                                <label>Criado em:
                                    <input class="componentes" type="date" ></input>
                                </label>

                            </section>

                            <section>
                                <input class="componentes" type="email" placeholder="exemple@gmail.com"></input>
                                <input class="componentes" type="text" placeholder="João da silva"></input>
                            </section>

                            <section>
                                <select class=" componentes form-select-sm select-status" aria-label="Default select example-sm">
                                    <option selected>Status</option>
                                    <option value="1">Ativo</option>
                                    <option value="2">Desativado</option>
                                </select>


                                <input class="componentes" placeholder="Função"></input>
                            </section>

                            <div class=" div-botoes-pesquisa">

                                <button class="botoes btn btn-outline-primary"><i class="fas fa-search"></i> Pesquisar</button>
                                <button class="botoes btn btn-outline-primary"> <i class="fas fa-redo"></i> Limpar</button>

                            </div>

                        </div>

                        <div class="div-tabela">
                            <table class="table table-striped table-hover">
                                <thead class="linha-tabela">
                                    <tr>
                                        <th scope="col"> <i class="fas fa-user-circle"></i> Foto </th>
                                        <th scope="col">E-mail <i class="fas fa-arrow-down"></i> </th>
                                        <th scope="col">Nome <i class="fas fa-arrow-down"></i> </th>
                                        <th scope="col">Função <i class="fas fa-arrow-down"></i> </th>
                                        <th scope="col">Status <i class="fas fa-arrow-down"></i> </th>
                                        <th scope="col">Criado em <i class="fas fa-arrow-down"></i> </th>
                                    </tr>
                                </thead>
                                <tbody class="">

                                    {usuario.map( user =>(
                                        <tr key={user.id}>
                                            <th scope="row"><i class="fas fa-address-card"></i></th>
                                            <td>{user.email}</td>
                                            <td>{user.nome+" "+ user.sobrenome}</td>
                                            <td>{user.funcao}</td>
                                            <td>{user.status}</td>
                                            <td>{user.criado_em}</td>
                                            <td class="linha-funcoes"><Link to={`/perfil/editar/${user.id}`}>Editar </Link></td>
                                            <td class="linha-funcoes"><Link to={`/reserva/ver/${user.id}`}>Visualizar </Link></td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>

            </div>
        </Menu>
    )
}