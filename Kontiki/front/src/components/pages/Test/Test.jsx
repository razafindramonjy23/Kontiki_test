import React from 'react'
import './Test.css'
import { Link } from 'react-router-dom'

function Presentation() {
  return (
    <div className='container'>
      <div className='presentation'>
        <div className='left'>
          <p>Veuillez vous présenter </p>

        </div>

        <div className='right'>
          <h1>Bonjour et bienvenue!</h1>
          <form action="#" className='form'>
            <input type="text" placeholder='Nom' />
            <input type="text" placeholder='Prenom' />
            <input type="text" placeholder='Age' />
            <input type="text" placeholder='Situation matrimoniale' />
            <input type="text" placeholder='Adresse' />
            <input type="tel" placeholder='numéro de téléphone' />
            <input type="email" placeholder='Email' />
          </form>
          <button type='submit'>Suivant</button>
        </div>
      </div>
    </div>
  )
}

export default Presentation
