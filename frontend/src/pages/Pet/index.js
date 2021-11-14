import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import Menu from '../barraLateral'

export default function Pet() {

    const initPet = {

        nome: '',
        tipo: '',
        raça: '',
        tamanho: ''
    }

    const history = useHistory();
    const [pets, setPets] = useState([]);
    const [pet, setPet] = useState(initPet);


    useEffect(() => {

        api.get('pet').then(response => {
            setPets(response.data);
        })
        
    }, [])

    function onSubmit(ev) {
        ev.preventDefault();
        api.post('/pet/pesquisa', pet).then((response) => {
            setPets(response.data)
        })
    }

    function onChange(ev) {
        const { id, value } = ev.target;
        setPet({ ...pet, [id]: value });
        console.log(pet)
    }

    function limparCampo(){  
        setPet(initPet);
    }

    return (
        <Menu>

            <div class=" col-sm-12">

                <hr></hr>

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
    
                        <form onSubmit={onSubmit} class=" div-inputs"> 
                            
                            <section>
                                <input id="nome" class="componentes" onChange={onChange} placeholder="Nome" value={pet.nome}  ></input>
                            </section>
        
                            <section>
                                <input id="tipo" class="componentes" onChange={onChange} type="text" placeholder="Tipo" value={pet.tipo} ></input>
                            </section>
        
                            <section>
                                <input id="raça" class="componentes" onChange={onChange} type="text" placeholder="Raça" value={pet.raça} ></input>
        
                                <input id="tamanho" class="componentes" onChange={onChange} placeholder="Tamanho" value={pet.tamanho} ></input>
                            </section>
    
                            <div class=" div-botoes-pesquisa">
    
                                <button class="botoes btn btn-outline-primary" type="submit" ><i class="fas fa-search"></i> Pesquisar</button>
                                <button class="botoes btn btn-outline-primary"type="button" onClick={ limparCampo} > <i class="fas fa-redo"></i> Limpar</button>
        
                            </div>
    
                        </form>
                        
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
                                    {pets.map( pet =>(
                                        <tr key={pet.id}>
                                            <th scope="row"><i class="fas fa-address-card"></i></th>
                                            <td>{pet.nome}</td>
                                            <td>{pet.tipo}</td>
                                            <td>{pet.raça}</td>
                                            <td>{pet.tamanho}</td>
                                            <td class="linha-funcoes"><Link to={`/pet/editar/${pet.id}`}>Editar </Link></td>
                                            <td class="linha-funcoes"><Link to={`/pet/ver/${pet.id}`}>Visualizar </Link></td>
                                        </tr>
                                    ))}                        
                                </tbody>
                            </table>
    
                        </div>
                        
                    </div>
                </div>
            
        </Menu>
    )
}