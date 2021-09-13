import React from 'react'
import './headerStyle.css'
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
        <img className='icon-principal' src='images/camille-300x300.png'/>
        <div onClick={handelClickSesion} className='text-white'>iniciar sesion</div>
    </nav>
    <VentanaSesion/>
  </header>
  
  </>
  )
}

export default Header