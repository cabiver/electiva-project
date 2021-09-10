import React, { useEffect } from 'react'

function PrincipalPage () {
  const peticion = async () => {
    const response = await fetch('/saludos')
    if (response.ok) {
      const jsonRes = await response.json()
      const tex = document.getElementById('h1')
      tex.innerText = `${tex.innerText} ${jsonRes.nose}`
      console.log(jsonRes)
    }
  }
  useEffect(() => {
    peticion()
  }, [])
  return (
        <h1 id='h1'>hola pelotudos</h1>
  )
}

export default PrincipalPage
