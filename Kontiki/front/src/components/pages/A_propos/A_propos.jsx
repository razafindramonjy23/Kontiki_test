import React from 'react'
import { Link } from 'react-router-dom';
import equipes from '../../../assets/equipe.png';
import user1 from '../../../assets/Images/pages/a_propos/user1.jpg'
import user2 from '../../../assets/Images/pages/a_propos/user2.jpg'
import user3 from '../../../assets/Images/pages/a_propos/user3.jpg'
import user4 from '../../../assets/Images/pages/a_propos/user4.jpg'
import nous from '../../../assets/Images/pages/a_propos/nous.jpg'
import europeens from '../../../assets/Images/pages/a_propos/europeens.jpg'

function A_propos() {
  return (
    <>
      <div className='font-sans'>
        <section className="relative p-16 mb-10 bg-blue-50 text-blue-950 h-96">
          <div className="absolute top-0 left-0 right-0 bg-center bg-cover opacity-30 h-96 equipe"
          // style={{ backgroundImage: `url(${equipes})` }} // Replace with your background image path
          >
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-5xl font-bold">Qui sommes nous?</h1>
            <p className="mb-6 text-3xl">
              Spécialiste du marketing digital et du traitement des données massives (Bigdata),
              KONTIKI SERVICE a été créé le 19 mars 2019.
            </p>
            <p className="text-lg">
              Située à Antsahavola, KONTIKI SERVICE compte aujourd’hui plus de 30 collaborateurs.
            </p>
          </div>
        </section>

        {/* <section id='about' className='py-24'>
          <div className="flex flex-wrap lg:items-center">
            <div className="flex items-center justify-center pl-10 lg:w-1/2">
              <img className='max-w-full pr-10 ml-auto h-96 ' src={nous} alt="equipe" srcset="" />
            </div>

            <div className="pl-10 pr-2 mb-14 lg:mb-0 lg:w-1/2">
              <h1 className="max-w-xl text-[3rem] leading-none text-blue-950 font-semibold text-center lg:text-5xl lg:text-left lg:leading-tight mb-8 flex items-center  ">
                Nous sommes plus d'une trentaine de collaborateurs.
              </h1>
            </div>

          </div>
        </section> */}

        <section className="py-16 bg-white">
          <div className="container flex flex-col items-center px-4 mx-auto lg:flex-row">
            <div className="text-center lg:text-left lg:w-1/2">
              <h2 className="mb-4 text-5xl font-bold text-gray-800">KONTIKI SERVICES</h2>
              <p className="mb-6 text-lg text-green-600 transition-transform duration-300 ease-in-out hover:scale-110">
                La première Application de Kontiki Sevices à Madagascar
              </p>
              <p className="mb-8 text-gray-600">
                En quelques clics, accédez facilement à nos services
              </p>
              
              <div className="flex justify-center space-x-4 lg:justify-start">
                <p className="flex items-center px-4 py-2 text-white bg-gray-800 rounded-lg">
                  {/* <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.3 2.7 8.1 6.5 9.5.5.1.7-.2.7-.5v-1.7c-2.7.5-3.2-1.3-3.2-1.3-.4-1-.9-1.2-.9-1.2-.7-.4.1-.4.1-.4.8.1 1.2.8 1.2.8.7 1.3 2.1 1 2.6.8.1-.5.3-.8.5-1-2.2-.3-4.5-1.1-4.5-4.7 0-1 .4-1.9 1-2.6-.1-.3-.4-1.4.1-2.9 0 0 .8-.3 2.6 1 .8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 1.8-1.3 2.6-1 2.6-1 .5 1.5.2 2.6.1 2.9.7.7 1 1.6 1 2.6 0 3.7-2.3 4.4-4.5 4.7.3.3.6.7.6 1.3v2c0 .3.2.6.7.5C19.3 20.1 22 16.3 22 12c0-5.5-4.5-10-10-10z" />
                  </svg> */}
                  Télécharger dans Apple Store
                </p>
                <p className="flex items-center px-4 py-2 text-white bg-gray-800 rounded-lg">
                  {/* <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.3 2.7 8.1 6.5 9.5.5.1.7-.2.7-.5v-1.7c-2.7.5-3.2-1.3-3.2-1.3-.4-1-.9-1.2-.9-1.2-.7-.4.1-.4.1-.4.8.1 1.2.8 1.2.8.7 1.3 2.1 1 2.6.8.1-.5.3-.8.5-1-2.2-.3-4.5-1.1-4.5-4.7 0-1 .4-1.9 1-2.6-.1-.3-.4-1.4.1-2.9 0 0 .8-.3 2.6 1 .8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 1.8-1.3 2.6-1 2.6-1 .5 1.5.2 2.6.1 2.9.7.7 1 1.6 1 2.6 0 3.7-2.3 4.4-4.5 4.7.3.3.6.7.6 1.3v2c0 .3.2.6.7.5C19.3 20.1 22 16.3 22 12c0-5.5-4.5-10-10-10z" />
                  </svg> */}
                  Disponible sur Google Play
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2">
              <img
                src="./mobile_app_mockup.png"
                alt="KONTIKI Digital app"
                className="w-full"
              />
            </div>
          </div>
        </section>

      </div>

      <section className="py-24">
        <h1 className="text-5xl font-bold text-center">Notre partenaire de service</h1>
        <p className="mt-4 text-lg text-center">Votre texte explicatif ici</p>
      </section>

      <div className="container grid grid-cols-2 gap-20 py-16 mx-auto">
        <img src={europeens} alt="" />
        <p className='text-3xl'>L’agence propose à ses clients européens des prestations de publicité digitale,
          de conseil en communication et CRM, de génération de prospects qualifiés et d’animation de bases de contacts.</p>
      </div>

      <section className='py-20'>
        <div className='bg-white'>
          <div className="container px-6 mx-auto md:px-12 lg:px-8">
            <div className="mt-20 mb-12 space-y-4 text-center">
              <h1 className="text-4xl font-bold text-blue-950 md:text-5xl" >Notre équipe de Superviseurs</h1>
              <p className="px-5 py-5 mt-10 mb-10 text-gray-600 lg:w-8/12 lg:mx-auto">
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
