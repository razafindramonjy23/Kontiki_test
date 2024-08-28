import React from 'react';
import { Link } from 'react-scroll';
// import '../../../App.scss';

function Accueil() {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className='kontiki'>Feno Fitiavana</span>
        <span className="introTexte"> est spécialiste du <br/></span>
        <span className='introMarketing'> marketing relationnel digital</span>
        <p className="introPara">
          Nous accompagnons nos clients internationaux pour l'acquisition, la qualification et la fidélisation de leurs prospects et clients. <br />
          Notre approche résolument omnicanal mêle emailing, SMS, télémarketing, Google Ads, Facebook Ads...
        </p>

        <Link to='/Contact' smooth={true} duration={500} ><button className='btn'>
          <span>Contactez-nous &nbsp;</span></button></Link>
      </div>
    </section>
  )
}

export default Accueil
