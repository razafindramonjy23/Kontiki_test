import React from 'react';
import { Link } from 'react-router-dom';
import bois from '../../../assets/Images/pages/test/bg-test-bois.jpg'


function Test() {
  return (
    <>
      <div className='container flex justify-around h-screen bg-red-100'>
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
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-white">Test pour les Développeurs</h3>
            </div>
            <p className="text-sm text-slate-500 group-hover:text-white">
              Create a new project from a variety of starting templates.
              pour les dev front veuillez vous inscrire
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
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-white">Test pour les Trafics Manager</h3>
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
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-white">Test pour les Trafics Manager</h3>
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
