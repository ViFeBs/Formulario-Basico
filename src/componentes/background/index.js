


import React from 'react'
import { toast , ToastContainer} from 'react-toastify'
import './background.css'

export default function Background(){
    const sendClick = () => {
        alert("Salvo Com Sucesso")
    }
    return(
        <div>
            <div className='background'>
                <div>
                    Nome <input type='text' /><br />
                    <br />
                    Email <input type='email' /><br />
                    <br />
                    Senha <input type='password' /><br />
                    <br />
                    <button onClick={sendClick}>Enviar</button>
                </div>
            </div>        
        </div>
    )
}