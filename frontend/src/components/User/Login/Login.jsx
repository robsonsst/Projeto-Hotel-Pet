
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../Store/Context';
import './Login.css';

function initialState() {
    return {
        user: '',
        password: ''
    }
}

function login({user, password}){
    if(user === 'admin' && password === 'admin'){
        return {token: '1234'};
    }
    return {error: 'Usuário ou senha inválidos'};
}

const UserLogin = () => {
    const [values, setValues] = useState(initialState);
    const {setToken} = useContext(StoreContext);
    const history = useHistory();

    function onChange(ev) {

        const { value, name } = ev.target;

        setValues({
            ...values, 
            [name]:value,
        })
    }

    function onSubmit(ev){
        ev.preventDefault();

        const {token} = login(values);

        if(token){
            setToken(token);
            return history.push('/');
        }

        setValues(initialState);
    }

    return (

        <div class=" col-sm-12" >

            
            <body>

                <form onSubmit = {onSubmit}>
                    <div class="container" >

                        <div class="container-lado-esquerdo" >
                            <img src="../../../../imagens/pet-shop-login.jpg"
                                alt="Imagem de login"
                                width="1012"
                                height="695" />
                        </div>

                        <div class="container-lado-direito" >
                            <h1> Hotel Pet </h1>

                            <div class="login-senha-enviar" >

                                <input id="login-newsletter" name="user" type="user" class="form-newsletter__campo" onChange={onChange} value={values.user}
                                placeholder="Login" />

                                <div class="password-container" >
                                    <input type="password" id="field-password" name="password" class="field-password" onChange={onChange} value={values.password}
                                    placeholder="Senha" />
                                    <i class="fas fa-eye" id="eye" onclick="showPassword()" > </i> <i class="fas fa-eye-slash " id="eye-slash" onclick="showPassword()" > </i> 
                                </div> 
                                <input type="checkbox"
                                    id="manter-conectado" /> 
                            
                                <span > Mantenha - me conectado </span> 
                                                        
                                <div id="esqueceu-senha" >
                                    <a href="#"> Esqueceu sua senha ? </a> 
                                </div>
                                
                                <button id="botao-enviar" onclick={()=>history.push('/')} > Enviar </button> 
                                <h2 > < span id="ou"> ou </span></h2>
                                
                                <section class="links-container">
                                    
                                    <a href="#" class="fb BTN"> <i class="fa fa-facebook fa-fw" > </i> </a> 
                                    <a href="#" class="twitter BTN"> <i class="fab fa-twitter fa-fw" > </i>  </a> 
                                    <a href="#" class="google BTN"> <i class="fa fa-google fa-fw" > </i> </a> 
                                    
                                </section> 
                                
                                <div id="criar-conta" >
                                    <a href="#" > Criar uma conta </a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </body>
        </div>
    );
};

export default UserLogin;