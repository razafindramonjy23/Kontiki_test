import React from 'react';
import './Accueil.css'
import equipe from './img/equipe.png';
import bois from './img/bois.jpg';
import { Link } from 'react-scroll';

function Accueil() {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className='kontiki'>Kontiki Service</span>
        <span className="introTexte"> est spécialiste du <br/></span>
        <span className='introMarketing'> marketing relationnel digital</span>
        <p className="introPara">
          Nous accompagnons nos clients internationaux pour l'acquisition, la qualification et la fidélisation de leurs prospects et clients. <br />
          Notre approche résolument omnicanal mêle emailing, SMS, télémarketing, Google Ads, Facebook Ads...
        </p>

        <Link to='contact' smooth={true} duration={500} ><button className='btn'>
          <span>Contactez-nous &nbsp;</span></button></Link>
      </div>
      {/* <img className='bg' src={bois} alt="" srcset="" /> */}
    </section>
  )
}

export default Accueil
