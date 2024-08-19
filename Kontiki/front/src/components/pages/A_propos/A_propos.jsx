import React from 'react'
import { Link } from 'react-router-dom';
import equipe from '../../../assets/equipe.png';
import user1 from "../../../assets/Images/pages/a_propos/user1.jpg"

function A_propos() {
  return (
    <>
      <div className=''>
        {/* <h1 className='container pt-10 mb-32 text-5xl font-semibold mt-14'>A propos de Kontiki</h1> */}
        <section id='about' className='py-20'>
          <div className="flex flex-wrap lg:items-center">
            <div className="pl-10 mb-14 lg:mb-0 lg:w-1/2">
              <h1 className="max-w-xl text-[3rem] leading-none text-blue-800 font-semibold text-center lg:text-5xl lg:text-left lg:leading-tight mb-8 flex items-center  ">
                Nous sommes plus d'une trentaine de collaborateurs.
              </h1>
              <p className="max-w-xl font-semibold text-center text-yellow-500 lg:text-left lg:max-w-md ">
                REJOIGNEZ-NOUS POUR UNE EXPERIENCE DIGITAL INEDITE
              </p>
            </div>

            <div className="flex items-center justify-center lg:w-1/2">
              <img className='h-auto max-w-full pr-10 ml-auto' src={equipe} alt="equipe" srcset="" />
            </div>

          </div>
        </section>

        <section className='container'>
          <div className="pb-10 space-y-4 text-center ">
            <ul>
              <li className='grid grid-cols-2 gap-8 text-5xl'>
                <Link to="/membresKontiki" className='inline-block max-w-sm p-10 mr-8 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100'>Nos membres</Link>
                <Link to="/activites" className="inline-block max-w-sm p-10 mr-8 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100" >Départements</Link>
                {/* <Link to="historiques" className="inline-block max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100" >Historique</Link> */}
              </li>
            </ul>
          </div>
        </section>
      </div>
      
    </>
  )
}

export default A_propos
