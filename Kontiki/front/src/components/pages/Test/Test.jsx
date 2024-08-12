import React from 'react';
import { Link } from 'react-router-dom';
import bois from '../../../assets/Images/pages/test/bg-test-bois.jpg'


function Test() {
  return (
    <>

      <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
        <main className='py-52 '>
          <h1 className='container text-6xl flex flex-col
      items-center justify-center text-center '>Choix du test</h1>
          <section className="container flex flex-col
      items-center justify-center text-center py-4">
            <ul>
              <li className="container ">
                <Link to="/testDev" className='text-4xl border rounded-lg inline-block p-4 border-slate-800 mb-4 mr-5 mt-5 hover:bg-amber-200'>
                  Test Développeur
                </Link>
                <Link to="/testTM" className=' text-4xl border rounded-lg inline-block p-4 border-slate-800 mb-4 hover:bg-amber-200
                '>Test Trafic Manager</Link>
              </li>
            </ul>
          </section>
        </main>
      </div>


    </>
  )
}

export default Test
