import React from 'react';
import { Link } from 'react-router-dom';

function Test() {
  return (
    <>
      <h1 className='container text-5xl font-semibold'>Choix du test</h1>
      <section className="container">
        <ul className="list-test">
            <li className="container">
                <Link to="/testDev" className='max-w-xs text-3xl text-gray-300 px-5 py-5'>Test Développeur</Link>
                <Link to="/testDev" className='max-w-xs text-3xl text-gray-300 px-5 py-5 '>Test Trafic Manager</Link>
            </li>
        </ul>
      </section>
    </>
  )
}

export default Test
