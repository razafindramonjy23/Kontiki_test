import React from 'react';
import { Link } from 'react-router-dom';
import bois from '../../../assets/Images/pages/test/bg-test-bois.jpg'


function Test() {
  return (
    <>

      <div className="my-8 font-sans text-center ">
        <h2 className="text-6xl font-semibold transition-transform duration-700 ease-in-out text-blue-950 md:text-5xl hover:scale-125">
          KONTIKI TEST
        </h2>
        <div className="flex justify-center mt-2">
          <div className="w-24 h-1 bg-amber-500"></div>
        </div>
      </div>

      <div className='flex justify-around h-screen font-sans bg-blue-300'>
        <section className='pt-60'>
          <Link
            to="/testDev"
            className="block max-w-xs p-6 mx-auto space-y-3 bg-white rounded-lg shadow-lg group ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
          >
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 stroke-sky-500 group-hover:stroke-white"
                fill="none"
                viewBox="0 0 24 24"
              // Ajoutez des attributs nécessaires pour le SVG ici
              >
                {/* Contenu SVG */}
              </svg>
              <h3 className="text-4xl font-semibold transition-transform duration-300 ease-in-out text-blue-950 md:text-3xl hover:scale-125">Test pour les Développeurs</h3>
            </div>
            <p className="text-sm text-slate-500 group-hover:text-white">
              Test pour les dev front veuillez vous inscrire
            </p>
          </Link>
        </section>

        <section className='pt-60'>
          <Link
            to="/testTM"
            className="block max-w-xs p-6 mx-auto space-y-3 bg-white rounded-lg shadow-lg group ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
          >
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 stroke-sky-500 group-hover:stroke-white"
                fill="none"
                viewBox="0 0 24 24"
              // Ajoutez des attributs nécessaires pour le SVG ici
              >
                {/* Contenu SVG */}
              </svg>
              <h3 className="text-4xl font-semibold transition-transform duration-300 ease-in-out text-blue-950 md:text-3xl hover:scale-125">Affiliète Manager</h3>
            </div>
            <p className="text-sm text-slate-500 group-hover:text-white">
              Create a new project from a variety of starting templates.
            </p>
          </Link>
        </section>

        <section className='pt-60'>
          <Link
            to="/testTM"
            className="block max-w-xs p-6 mx-auto space-y-3 bg-white rounded-lg shadow-lg group ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
          >
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 stroke-sky-500 group-hover:stroke-white"
                fill="none"
                viewBox="0 0 24 24"
              // Ajoutez des attributs nécessaires pour le SVG ici
              >
                {/* Contenu SVG */}
              </svg>
              <h3 className="text-4xl font-semibold transition-transform duration-300 ease-in-out text-blue-950 md:text-3xl hover:scale-125">Test Trafics Manager</h3>
            </div>
            <p className="text-sm text-slate-500 group-hover:text-white">
              Create a new project from a variety of starting templates.
            </p>
          </Link>
        </section>
      </div>
    </>
  )
}

export default Test
