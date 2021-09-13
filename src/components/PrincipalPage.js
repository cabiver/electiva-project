import React from 'react'
import './principal-style.css'

function VentanaSesion () {
  return(
    <div id='window-session' className='ventana-session hidden'>
      <form className='window-session__form-session'>
        <div className='ventana-session__titule'>
          usuario
        </div>
        <input type='text' name='usuari'></input>
        <div className='ventana-session__titule'>
          password
        </div>
        <input type='text' name='password'></input>
      </form>
    </div>
  )
}

function PrincipalPage () {
  const handelClickSesion = ()=>{
    let instanciaSesion = document.getElementById('window-session')
    instanciaSesion.classList.toggle('hidden')
  }

  return (
  <>
  <header>
    <nav className='navbar bg-dark bg-gradient heigth-navbar'>
        <img className='icon-principal' src='images/camille-300x300.png'/>
        <div onClick={handelClickSesion} className='text-white'>iniciar sesion</div>
    </nav>
    <VentanaSesion/>
  </header>
  
  </>
  )
}

export default PrincipalPage
// const peticion = async () => {
//   const response = await fetch('/saludos')
//   if (response.ok) {
//     const jsonRes = await response.json()
//     const tex = document.getElementById('h1')
//     tex.innerText = `${tex.innerText} ${jsonRes.nose}`
//     console.log(jsonRes)
//   }
// }
// useEffect(() => {
//   peticion()
// }, [])
