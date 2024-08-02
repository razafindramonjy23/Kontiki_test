import React from 'react';
import progress from './img/progression.jpg';
import ensemble from './img/ensemble.png';
import lesFilles from './img/01.jpg';
import andre from './img/andre.jpg';
import Rova from './img/Rova.jpg';
import '../../scss/pages/_services.scss';
import './Services.js';

function Services() {
  return (
    <div className="carousel">
      <div className="list">
        <div className="item" style={{ backgroundImage: `url(${progress})` }}>
        </div>

        <div className="item" style={{ backgroundImage: `url(${Rova})` }}>
          <div className="content">
            <div className="titre">GENERATION DES LEADS</div>
            {/* <div className="name">Essaye</div> */}
            <div className="description">
              Collecter des prospects qualifiés et générez de nouveaux clients.
            </div>
            <div className="btns">
              <button>Voir plus</button>
            </div>
          </div>
        </div>

        <div className="item" style={{ backgroundImage: `url(${ensemble})` }}><div className="content">
            <div className="titre">GENERATION DES LEADS</div>

            <div className="description">
              Collecter des prospects qualifiés et générez de nouveaux clients.
            </div>
            <div className="btns">
              <button>Voir plus</button>
            </div>
          </div>
        </div>

        <div className="item" style={{ backgroundImage: `url(${lesFilles})` }}>
        <div className="content">
            <div className="titre">GENERATION DES LEADS</div>

            <div className="description">
              Collecter des prospects qualifiés et générez de nouveaux clients.
            </div>
            <div className="btns">
              <button>Voir plus</button>
            </div>
          </div>
        </div>

        <div className="item" style={{ backgroundImage: `url(${andre})` }}>
        <div className="content">
            <div className="titre">GENERATION DES LEADS</div>
            <div className="description">
              Collecter des prospects qualifiés et générez de nouveaux clients.
            </div>
            <div className="btns">
              <button>Voir plus</button>
            </div>
          </div>
        </div>
      </div>

      <div className="fleches">
        <button className="prev"><img width="20" height="20" src="https://img.icons8.com/flat-round/64/left--v1.png" alt="left--v1" /></button>
        <button className="next"><img width="20" height="20" src="https://img.icons8.com/flat-round/64/right--v1.png" alt="right--v1" /></button>
      </div>

      <div className="timeRunning"></div>



    </div>
  );
}

export default Services;
