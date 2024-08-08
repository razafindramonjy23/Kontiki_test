import React from 'react';
import { Link } from 'react-router-dom';

function Test() {
  return (
    <>
      <h1>Choix du test</h1>
      <div className="Test">
        <ul className="list-test">
            <li className="testdev">
                <Link to="/testDev">TestDev</Link>
            </li>
        </ul>
      </div>
    </>
  )
}

export default Test
