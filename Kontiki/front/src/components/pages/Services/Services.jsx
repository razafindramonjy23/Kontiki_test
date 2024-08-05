import React from 'react';
import progress from './img/progression.jpg';
import ensemble from './img/ensemble.png';
import lesFilles from './img/01.jpg';
import andre from './img/andre.jpg';
import Rova from './img/Rova.jpg';
import '../../scss/pages/_services.scss';
//import './Services.js';

function Services() {
  return (
    <>
      <div className="TitrePrincipal">
        <h1>Nos Activité principales</h1>
      </div>

      <div className="carousel">
        <div className="list"> 
          <div className="item" style={{ backgroundImage: `url(${andre})` }}>
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
            <div className="titre">CAMPAGNES EMAILING</div>

            <div className="description">
              Gestion de campagnes emailing, depuis la création de KIT, landing page
              jusqu'à l'envoi et l'analyse des résultats.
            </div>
            <div className="btns">
              <button>Voir plus</button>
            </div>
          </div>
          </div>

          <div className="item" style={{ backgroundImage: `url(${lesFilles})` }}>
            <div className="content">
              <div className="titre">QUALIFICATION DES PROSPECTS</div>

              <div className="description">
                Nous qualifions les contacts pour cibler au plus juste ls prospects de nos clients.
              </div>
              <div className="btns">
                <button>Voir plus</button>
              </div>
            </div>
          </div>

          <div className="item" style={{ backgroundImage: `url(${progress})` }}>
            <div className="content">
              <div className="titre">DEVELOPPONS ENSEMBLE VOTRE AVENIR DIGITAL</div>
              <div className="description">
                Faites-nous confiance.
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


      <div className="nosForces">
        <h1>NOS FORCES</h1>
      </div>
    </>
  );
}

export default Services;
