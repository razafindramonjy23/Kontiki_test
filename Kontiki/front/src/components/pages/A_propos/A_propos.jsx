import React from 'react'
import { Link } from 'react-router-dom';
import equipe from '../../../assets/equipe.png';
import user1 from '../../../assets/Images/pages/a_propos/user1.jpg'
import user2 from '../../../assets/Images/pages/a_propos/user2.jpg'
import user3 from '../../../assets/Images/pages/a_propos/user3.jpg'
import user4 from '../../../assets/Images/pages/a_propos/user4.jpg'

function A_propos() {
  return (
    <>
      <div className=''>
        {/* <h1 className='container pt-10 mb-32 text-5xl font-semibold mt-14'>A propos de Kontiki</h1> */}
        <section id='about' className='py-24'>
          <div className="flex flex-wrap lg:items-center">
            <div className="flex items-center justify-center pl-10 lg:w-1/2">
              <img className='h-auto max-w-full pr-10 ml-auto' src={equipe} alt="equipe" srcset="" />
            </div>

            <div className="pl-10 pr-2 mb-14 lg:mb-0 lg:w-1/2">
              <h1 className="max-w-xl text-[3rem] leading-none text-blue-950 font-semibold text-center lg:text-5xl lg:text-left lg:leading-tight mb-8 flex items-center  ">
                Nous sommes plus d'une trentaine de collaborateurs.
              </h1>
              <p className="max-w-xl font-semibold text-center text-yellow-500 lg:text-left lg:max-w-md ">
                Spécialiste du marketing digital et du traitement des données massives (Bigdata),
                KONTIKI SERVICE a été créé le 19 mars 2019.
                
              </p>
            </div>

          </div>
        </section>

      </div>

      <section className="py-24">
        <h1 className="text-5xl font-bold text-center">Votre partenaire de service</h1>
        <p className="mt-4 text-lg text-center">Votre texte explicatif ici</p>
      </section>

      <div className="container grid grid-cols-2 gap-8 py-16 mx-auto">
        <img src={user1} alt="" />
        <p className='text-3xl'>L’agence propose à ses clients européens des prestations de publicité digitale,
          de conseil en communication et CRM, de génération de prospects qualifiés et d’animation de bases de contacts.</p>
      </div>

      <section className='py-20'>
        <div className='bg-white'>
          <div className="container px-6 mx-auto md:px-12 lg:px-8">
            <div className="mb-12 space-y-4 text-center">

              <h1 className="text-4xl font-bold text-blue-950 md:text-5xl" >Notre équipe de Superviseurs</h1>
              <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
                Chaque département possède leurs propre Superviseurs.
              </p>
            </div>


            <div className="grid py-20 gap-28 md:gap-12 md:grid-cols-3">
              <div className="space-y-4 text-center border-t-4 group">
                <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden ">
                  <img src={user1} alt="RitaKontiki" loading='lazy' width="640" height="805" className='object-cover w-full h-full mx-auto transition duration-300 scale-125 -rotate-45 ' />
                </div>
                <div className='text-center'>
                  <h5 className='text-xl font-semibold text-gray-800'>Rita Kontiki</h5>
                  <span className='text-sm text-gray-500 '>Marketing</span>
                </div>
                <Link to="/TeamCall" className="block mx-auto text-center text-blue-500 w-max">Département</Link>
              </div>

              <div className="space-y-4 text-center border-t-4 group">
                <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden ">
                  <img src={user2} alt="MamisoaKontiki" loading='lazy' width="640" height="805" className='object-cover w-full h-full mx-auto transition duration-300 scale-125 -rotate-45 ' />
                </div>
                <div className='text-center'>
                  <h5 className='text-xl font-semibold text-gray-800'>Mamisoa Kontiki</h5>
                  <span className='text-sm text-gray-500 '>Affiliète</span>
                </div>
                <Link to="/TeamCall" className="block mx-auto text-center text-blue-500 w-max">Département</Link>
              </div>

              <div className="space-y-4 text-center border-t-4 group">
                <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden ">
                  <img src={user3} alt="AndreKontiki" loading='lazy' width="640" height="805" className='object-cover w-full h-full mx-auto transition duration-300 scale-125 -rotate-45 ' />
                </div>
                <div className='text-center'>
                  <h5 className='text-xl font-semibold text-gray-800'>Andre Kontiki</h5>
                  <span className='text-sm text-gray-500 '>Dévellopeur</span>
                </div>
                <Link to="/TeamDev" className="block mx-auto text-center text-blue-500 w-max">Département</Link>
              </div>

              <div className="mt-20 space-y-4 text-center border-t-4 group">
                <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden ">
                  <img src={user4} alt="DeddyKontiki" loading='lazy' width="640" height="805" className='object-cover w-full h-full mx-auto transition duration-300 scale-125 -rotate-45 ' />
                </div>
                <div className='text-center'>
                  <h5 className='text-xl font-semibold text-gray-800'>Deddy Kontiki</h5>
                  <span className='text-sm text-gray-500 '>Trafic Manager</span>
                </div>
                <Link to="/TeamCall" className="block mx-auto text-center text-blue-500 w-max">Département</Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default A_propos
