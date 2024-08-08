import React from 'react';
import { Link } from 'react-router-dom';

function Test() {
  return (
    <>
      <h1 className='container text-5xl font-semibold'>Choix du test</h1>
      <section className="Test">
        <ul className="list-test">
            <li className="testdev">
                <Link to="/testDev" >TestDev</Link>
            </li>
        </ul>
      </section>
    </>
  )
}

export default Test
