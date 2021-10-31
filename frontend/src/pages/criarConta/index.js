import React, { useState, useEffect } from 'react';
import './style.css';
import Menu from '../barraLateral'

export default function criarConta() {

    return (

        <Menu>
            <div class=" col-sm-12">

                <hr></hr>
                
                <head>
                    <meta charset="UTF-8"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <title>Hotel Pet</title>

                    <link rel="stylesheet" href="./css/stylesCriarConta.css"></link>
                    <script> src="./js/criarConta.js"</script>

                    <script src="https://kit.fontawesome.com/3462cd63e9.js" crossorigin="anonymous"></script>
                    
                </head>

                <body>
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                    <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"></link>
                    <form>
                        <div class="container">

                            <div class="container-lado-esquerdo">
                                <img src="imagens/pet-shop-login.jpg" alt="Imagem de login" width="1012" height="695" ></img>
                            </div>
                
                            <div class="container-lado-direito">
                                <h1>Hotel Pet</h1>
                
                                <div class="login-senha-criar">
                                    <input id="login-newsletter" name="login-newsletter" type="login" class="form-newsletter__campo" placeholder="Login"></input>        
                                    
                                    <div class="password-container">
                                        <input type="password" id="field-password" class="field-password" placeholder="Senha"></input>
                                        <i class="fas fa-eye" id="eye" onclick="showPassword()" ></i>
                                        <i class="fas fa-eye-slash " id="eye-slash" onclick="showPassword()" ></i>
                                    </div>
                                    <div>
                                        <button id="botao-criar">Criar conta</button>
                                    </div>
                                    
                                    <div class="link-container">
                                        <a href="#"> Já tem conta? Login</a>
                                    </div>
                                        

                                </div>

                            </div>

                        </div>

                    </form>

                </body>

            </div>
            
        </Menu>

    )}