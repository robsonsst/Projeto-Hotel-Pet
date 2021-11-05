import React, { useState, useEffect } from 'react';
import './style.css';

export default function Login() {


    function initialState() {
        return {
            login: '',
            password: ''
        }
    }

    const UserLogin = () => {
        const [values, setValues] = useState(initialState);

        function onChange(ev) {

            const { value, name } = ev.target;

            setValues({
                ...values, 
                [name]:value,
            })
        }
    }

    return (

        <div class=" col-sm-12" >

            <hr/>
            <body>

                <form>
                    <div class="container" >

                        <div class="container-lado-esquerdo" >
                            <img src="../../../../imagens/pet-shop-login.jpg"
                                alt="Imagem de login"
                                width="1012"
                                height="695" > </img> 
                        </div>

                        <div class="container-lado-direito" >
                            <h1> Hotel Pet </h1>

                            <div class="login-senha-enviar" >

                                <input id="login-newsletter" name="login" type="login" class="form-newsletter__campo" onChange={onChange} value={values.login}
                                placeholder="Login" > </input>

                                <div class="password-container" >
                                    <input type="password" id="field-password" name="password" class="field-password" onChange={onChange} value={values.password}
                                    placeholder="Senha" > </input> 
                                    <i class="fas fa-eye" id="eye" onclick="showPassword()" > </i> <i class="fas fa-eye-slash " id="eye-slash" onclick="showPassword()" > </i> 
                                </div> 
                                <input type="checkbox"
                                    id="manter-conectado" > 
                                </input> 
                                <span > Mantenha - me conectado </span> 
                                                        
                                <div id="esqueceu-senha" >
                                    <a href="#" > Esqueceu sua senha ? </a> 
                                </div>
                                
                                <button id="botao-enviar" > Enviar </button> 
                                <h2 > < span id="ou"> ou </span></h2>
                                
                                <section class="links-container">
                                    
                                    <a href="#" class="fb BTN" > <i class="fa fa-facebook fa-fw" > </i> </a> <a href="#" class="twitter BTN" > <i class="fab fa-twitter fa-fw" > </i>  </a> 
                                    <a href="#" class="google BTN" > <i class="fa fa-google fa-fw" > </i> </a> 
                                    
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
    )
}