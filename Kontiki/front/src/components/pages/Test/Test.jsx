import React from 'react';
import { Link } from 'react-router-dom';
import bois from '../../../assets/Images/pages/test/bg-test-bois.jpg'
import avatar from '../../../assets/Images/pages/a_propos/avatar/avatar.jpg'


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

      <div className='flex justify-around h-screen font-sans bg-slate-100'>

        <motion.section

          variants={FadeRight(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}

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
          viewport={{ once: true }}

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
          viewport={{ once: true }}

          className='pt-60'>
          <Link
            to="/testTM"
            className="block max-w-xs p-6 mx-auto space-y-3  rounded-lg shadow-lg group ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
          >
            <div className="bg-white shadow-md rounded-lg px-6 py-4">
              <div className="text-gray-900 font-bold text-xl mb-2">Affiliète Manager</div>
              <p className="text-gray-700">asdasdf alskdjf as;dlk fajsdkf </p>
              <a href="#" className="text-blue-500 hover:underline">Aller à la page →</a>
            </div>
          </Link>
        </motion.section>
      </div>



      <div class="container mx-auto font-sans py-20 my-20 flex flex-col items-center justify-center h-screen">
        <h2 class="box-border h-20 text-xl font-semibold transition-all duration-700 ease-in-out text-blue-950 md:text-5xl text-center">
          Entretien à distance
        </h2>
        <div class="flex justify-center mt-2 ">
          <div class="w-24 h-1 bg-amber-500"></div>
        </div>
        <div class="flex justify-center space-x-20 mt-32">
          <img width="96" height="96" src="https://img.icons8.com/cute-clipart/128/skype.png" alt="skype" className='transition-all hover:scale-75' />
          <img width="96" height="96" src="https://img.icons8.com/color/144/google-meet--v1.png" alt="google-meet--v1" className='transition-all hover:scale-75' />
          <img width="96" height="96" src="https://img.icons8.com/color/144/microsoft-teams.png" alt="microsoft-teams" className='transition-all hover:scale-75' />
        </div>
        <p class="text-gray-700 pt-32 text-2xl text-center">Facilitez le travail à distance en utilisant nos intégrations Skype, Google Meet ou Teams</p>
      </div>

      {/* <div class="bg-blue-100 p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
        <div class="flex items-center mb-4">
          <img src={avatar} alt="avatar" class="w-16 h-16 rounded-full mr-4" />
          <div>
            <h3 class="text-lg font-bold">avatar</h3>
            <p class="text-gray-500">hey</p>
          </div>
        </div>
        <p class="text-gray-700 text-center">hello how are you?</p>
      </div> */}

      {/* <div className="bg-white shadow-md rounded-lg px-6 py-4">
        <div className="text-gray-900 font-bold text-xl mb-2">asdfasdfasdfasdfadsf</div>
        <p className="text-gray-700">asdasdf alskdjf as;dlk fajsdkf </p>
        <a href="#" className="text-blue-500 hover:underline">Aller à la page →</a>
      </div> */}
    </>
  )
}

export default Test
