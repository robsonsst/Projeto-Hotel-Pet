import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import './style.css';

export default function Usuario(){
    const [usuarios, setUsers] = useState([]);
    useEffect(()=>{
        api.get('usuarios').then(response =>{
            setUsers(response.data);
        })
        console.log(usuarios, "...")
    }, [usuarios])
    console.log(usuarios, "...")
    
    return(
        <div id = "usuario-container">
            <h1>
               List de usuários 
            </h1>
            <ul className="usuario-list">
                {usuarios.map(usuario => (
                    <li key = {usuarios.id}>
                        <strong>Nome</strong>
                        <p>{usuario.nome} </p>
                        <strong>Sobrenome</strong>
                        <p>{usuario.sobrenome} </p>
                        <strong>Email</strong>
                        <p>{usuario.email} </p>
                        <strong>Telefone</strong>
                        <p>{usuario.telefone} </p>
                        <strong>Status</strong>
                        <p>{usuario.status} </p>
                        <strong>Criado em</strong>
                        <p>{usuario.criado_em} </p>
                        <strong>Função</strong>
                        <p>{usuario.funcao} </p>
                        <strong>Usuario</strong>
                        <p>{usuario.usuario} </p>
                        <strong>Senha</strong>
                        <p>{usuario.senha} </p>
                        <div className="actions">
                            <button className = "button" type="button">Deletar</button>
                            <button className = "button" type="button">Acessar</button>
                        </div>
                    </li>                   
                ))}
            </ul>   
        </div>
    )
}