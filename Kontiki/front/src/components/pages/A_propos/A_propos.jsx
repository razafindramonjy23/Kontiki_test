import React from 'react'
import { Link } from 'react-router-dom'

function A_propos() {
  return (
    <>
      <div className='bg-white '>
        <div className="container mx-auto px-6 md:px-12 lg:px-8">
        <div className="mb-12 space-y-4 text-center">
          <h1 className="text-4xl font-bold text-blue-950 md:text-5xl">A propos de Kontiki Service</h1>
          <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
            N'hésitez pas à visiter tous les sections pour nous connaitre un peu plus
          </p>
        </div>
        </div>

        <div className="container flex flex-col
          items-center justify-center text-center p-4">
          <ul>
            <li className='container py-6 px-10 text-5xl'>
              <Link to="/membresKontiki" className="rounded-md p-8 m-8 bg-zinc-100 shadow-lg border-zinc-300" >Nos membres</Link>
              <Link to="/activites" className="m-7">Activités</Link>
              <Link to="historiques" className="m-7">Historique</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default A_propos
