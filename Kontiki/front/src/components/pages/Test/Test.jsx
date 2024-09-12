import React from 'react';
import { Link } from 'react-router-dom';
import bois from '../../../assets/Images/pages/test/bg-test-bois.jpg'


import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';
import { FadeRight } from '../../utility/animation';
import { FadeUp } from '../../utility/animation';


function Test() {
  return (
    <>

      <div className="my-8 font-sans text-center ">
        <h2 className="box-border h-20 text-xl font-semibold transition-all duration-700 ease-in-out text-blue-950 md:text-5xl ">
          KONTIKI TEST
        </h2>
        <div className="flex justify-center mt-2">
          <div className="w-24 h-1 bg-amber-500"></div>
        </div>
      </div>

      <div className='flex justify-around h-screen font-sans bg-blue-300'>
        
        <motion.section 
        
        variants={FadeRight(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{  once: true  }}
        
        className='pt-60'>
          <Link
            to="/testDev"
            className="block max-w-xs p-6 mx-auto space-y-3 bg-white rounded-lg shadow-lg group ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
          >
            <div className="flex items-center space-x-3">
              <img src="https://img.icons8.com/ios/50/ios-development.png" alt="ios-development" />
              <h3 className="text-4xl font-semibold transition-transform duration-300 ease-in-out text-blue-950 md:text-3xl hover:scale-125">Test pour Developpeurs</h3>
            </div>
            <p className="text-sm text-slate-500 group-hover:text-white">
              Test pour les dev front veuillez vous inscrire
            </p>
          </Link>
        </motion.section>

        <motion.section 
        
        variants={FadeUp(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{  once: true  }}
        
        className='pt-60'>
          <Link
            to="/testTM"
            className="block max-w-xs p-6 mx-auto space-y-3 bg-white rounded-lg shadow-lg group ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
          >
            <div className="flex items-center space-x-3">
              <img width="64" height="64" src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/external-Affiliate-business-and-marketing-bearicons-glyph-bearicons.png" alt="external-Affiliate-business-and-marketing-bearicons-glyph-bearicons" />
              <h3 className="text-4xl font-semibold transition-transform duration-300 ease-in-out text-blue-950 md:text-3xl hover:scale-125">Affiliète Manager</h3>
            </div>
            <p className="text-sm text-slate-500 group-hover:text-white">
              Create a new project 
            </p>
          </Link>
        </motion.section>

        <motion.section 
        
        variants={FadeLeft(1.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{  once: true  }}
        
        className='pt-60'>
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
              Create a new project 
            </p>
          </Link>
        </motion.section>
      </div>
    </>
  )
}

export default Test
