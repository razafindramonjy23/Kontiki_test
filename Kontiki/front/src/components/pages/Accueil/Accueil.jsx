import React from 'react';
import './Accueil.css'
import equipe from './img/equipe.png';

function Accueil() {
  return (
    <div className='container'>
      <div className="presentation">
        <section>
          <h1 className='titreH1'>Kontiki Services</h1>
          <img src={equipe} alt="equipe"/>
          <div className="description">
            <p>
              Nous accompagnons nos clients internationaux pour l'acquisition, la qualification et la fidélisation de leurs prospects et clients.
              Notre approche résolument omnicanal mêle emailing, SMS, télémarketing, Google Ads, Facebook Ads...
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Accueil
