import React from 'react'

function VentanaSesion () {
    const handelLogin= async() =>{
        let formdata = new FormData(document.getElementById('login-register'))
        let response = await fetch('/api/sesiones',{
            method: 'POST',
            body: formdata
        })
        let resJSON=await response.json()
        if(resJSON.ok){
            console.log(resJSON.data.mensaje)
        }else{
            console.log(resJSON)
        }
    }
    const handelRegister = async ()=>{
        let formdata = new FormData(document.getElementById('login-register'))
        let response = await fetch('/api/register',{
            method: 'POST',
            body: formdata
        })
        let resJSON=await response.json()
        if(resJSON.ok){
            console.log(resJSON.data.mensaje)
        }else{
            console.log(resJSON)
        }
    }

    return(
      <div id='window-session' className='ventana-session hidden'>
        <form id='login-register' className='window-session__form-session'>
          <div className='ventana-session__titule'>
            usuario
          </div>
          <input type='text' name='usuari'></input>
          <div className='ventana-session__titule'>
            password
          </div>
          <input type='text' name='password'></input>
          <div className='ventana-session__button-container'>
              <button type='button' onClick={handelRegister} className='ventana-session__buttons'>registrar</button>
              <button type='button' onClick={handelLogin} className='ventana-session__buttons'>logiar</button>
          </div>
        </form>
      </div>
    )
}
export default VentanaSesion