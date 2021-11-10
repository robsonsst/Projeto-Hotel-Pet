import React, { useState} from 'react';
import api from '../../services/api'
import { useHistory } from 'react-router-dom';
import './style.css';
import Menu from '../barraLateral'

export default function FazerReserva() {

    const history = useHistory();

    const initReserva = {

        pet: '',
        dataInicial:'',
        dataFinal:'',
        notas: '',
    }

    const [reserva, setUser] = useState(initReserva);

    function onSubmit(ev) {
        ev.preventDefault();
        api.post('/reserva', reserva).then((response) => {
            history.push('/reserva')
        })
    }

    function onChange(ev) {
        const { id, value } = ev.target;
        setUser({ ...reserva, [id]: value });
        console.log(reserva);
    }

    function limparCampo(){
        
        setUser(initReserva);
    }

    return (

        <Menu>
            <div class=" col-sm-12">

                <hr></hr>
                <div class=" painel-componentes">
                        <div class="">

                            <div class="titulo-pagina">
                                <h5> Home/Reservas/Nova Reserva</h5>
                            </div>
    
                            <div class="main">
                                
                                <section>
                                    <br></br> 
                                    <h3 class ="titulo-editar-reserva"> Fazer Reserva </h3>
                                </section>

                                <form onSubmit={onSubmit}>
                            
                                    <section class="section componentes">
                                        <br></br> 
                                        <label for="pet"> Pet*</label>
                                        <input id="pet" class="input" type="text" onChange={onChange} value={reserva.pet}></input>
                                    </section>

                                    <section class="section-data componentes">
                                        <br></br> 
                                        <label for="periodo"> Período*</label>
                                        <br></br> 
                                        <input id="dataInicial" class="input-data" type="date" onChange={onChange} value={reserva.dataInicial}></input>
                                        <input id="dataFinal" class="input-data" type="date" onChange={onChange} value={reserva.dataFinal}></input>
                                    </section>

                                    <section class="section componentes">
                                        <br></br> 
                                        <label for="notas"> Notas</label>
                                        <textarea id="notas" class="input notas" rows="10" cols="30" maxlength="200" onChange={onChange} value={reserva.notas}></textarea>

                                    </section>

                                    <div>
                                        <br></br> 
                                        <label class="componentes"> total das diarias: <a> R$: 40,00 </a></label> 
                                        <br></br> 
                                        <br></br>       

                                        <button class="botoes componentes btn btn-primary" type="submit"><i class="far fa-save"></i> Salvar</button>
                                        <button class="botoes componentes btn btn-outline-primary" type='button' onClick={ limparCampo}  > <i class="fas fa-redo"></i>Limpar</button>
                                    </div>

                                </form>
                                                            
                            </div>
                            
                        </div>
                        
                    </div>

                </div>
            
        </Menu>                            
    )
}