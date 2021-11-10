import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import Menu from '../barraLateral'

export default function Pet() {

    const initPet = {

        id: '',
        nome: '',
        tipo: '',
        raca: '',
        tamanho:''
    }

    const history = useHistory();
    const [pet, setUsers] = useState([]);
    const [user, setUser] = useState(initPet);

    useEffect(() => {

        api.get('pet').then(response => {
            setUsers(response.data);
        })
        
    }, [])


    function onChange(ev) {
        const { id, value } = ev.target;
        setUser({ ...pet, [id]: value });
        console.log(pet);
    }

    function limparCampo(){  
        setUser(initPet);
    }

    return (
        <Menu>
            <div>

                <div class=" col-sm-12">

                    <hr />

                    <div class=" painel-componentes">
                            <div class=""> 
                                
                                <div class="">
                                    <h5> Home/Pets</h5>
                                </div>
        
                                <div class=" usuarios-componentes">
                                    <section>
                                        <h3 class ="componentes botoes"> Pets </h3>
                                    </section>
        
                                    <section>
                                        <button class="componentes botoes btn btn-outline-primary " onClick={()=>history.push('/pet/cadastrar')}> <i class="fas fa-user-plus"></i> Novo Pet</button>
                                    </section>

                                </div>
                                
        
                            </div>
        
                            <div class=" div-inputs">                                                         
                                <section>
                                    <input class="componentes" id="id" onChange={onChange} placeholder="ID" value={user.id}> </input>
                            
                                    <input class="componentes" id="nome" onChange={onChange} type="text" placeholder="João da silva" value={user.nome}> </input>
                                </section>
            
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
        
                                <div class=" div-botoes-pesquisa">
        
                                    <button class="botoes btn btn-outline-primary" type="submit"><i class="fas fa-search"></i> Pesquisar</button>
                                    <button class="botoes btn btn-outline-primary" type="button" onClick={ limparCampo}> <i class="fas fa-redo"></i> Limpar</button>
            
                                </div>
        
                            </div>
                            <div class="div-tabela">
                                <table class="table table-striped table-hover ">
                                    <thead class="linha-tabela">
                                    <tr>
                                        
                                        <th scope="col"> Id <i class="fas fa-user-circle"></i> </th>
                                        <th scope="col">Nome <i class="fas fa-arrow-down"></i> </th>
                                        <th scope="col">Tipo <i class="fas fa-arrow-down"></i> </th>
                                        <th scope="col">Raça <i class="fas fa-arrow-down"></i> </th>
                                        <th scope="col">Tamano <i class="fas fa-arrow-down"></i> </th>
                                    
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {pet.map( user =>(
                                            <tr key={user.id}>
                                                <th scope="row"><i class="fas fa-address-card"></i></th>
                                                <td>{user.nome}</td>
                                                <td>{user.tipo}</td>
                                                <td>{user.raça}</td>
                                                <td>{user.tamanho}</td>
                                                <td class="linha-funcoes"><Link to={`/pet/editar/${user.id}`}>Editar </Link></td>
                                                <td class="linha-funcoes"><Link to={`/pet/ver/${user.id}`}>Visualizar </Link></td>
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