import React from 'react'
import { Link } from 'react-router-dom'

function A_propos() {
  return (
    <>
      <main >
        <div className='container px-6 mx-auto md:px-12 lg:px-8'>
          <div className="text-center text-blue-900  ImageApropos">
            <p className='pt-10 mb-8 mb-20 font-semibold text-8xl mt-14'>A propos de Kontiki Service</p>
            <p className="text-3xl text-black">N'hésitez pas à visiter tous les sections pour nous connaitre un peu plus</p>
          </div>

          <div className="pb-10 space-y-4 text-center ">
            <ul>
              <li className='container text-4xl'>
                <Link to="/membresKontiki" className='inline-block max-w-sm p-10 mr-8 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>Nos membres</Link>
                <Link to="/activites" className="inline-block max-w-sm p-10 mr-8 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >Activités</Link>
                <Link to="historiques" className="inline-block max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 " >Historique</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>


    </>
  )
}

export default A_propos
