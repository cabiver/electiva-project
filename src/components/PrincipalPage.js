import React from 'react'

import './principal-style.css'
function PrincipalPage () {
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
  return (
    <div className='first-page container'>
        <h1 id='h1'>hola pelotudos</h1>
        <div className='bg-danger'> has odido pelotudo?</div>
    </div>

  )
}

export default PrincipalPage
