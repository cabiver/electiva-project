import React from 'react'
import './headerStyle.scss'
import VentanaSesion from './VentanaSesion'

function Header () {
    const handelClickSesion = ()=>{
        let instanciaSesion = document.getElementById('window-session')
        instanciaSesion.classList.toggle('hidden')
      }

  return (
  <>
  <header>
    <nav className='navbar bg-dark bg-gradient heigth-navbar'>
        <img className='icon-principal' src='favicon.ico'/>
        <div onClick={handelClickSesion} className='text-button-session'>iniciar sesion</div>
    </nav>
    <VentanaSesion/>
  </header>
  
  </>
  )
}

export default Header