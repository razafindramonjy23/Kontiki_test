import React from 'react';
import { Link } from 'react-router-dom';


function Accueil() {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className='kontiki'>Kontiki Service</span>
        <span className="introTexte"> est spécialiste du <br /></span>
        <span className='introMarketing'> marketing relationnel digital </span>
        <p className="introPara">
          Nous accompagnons nos clients internationaux pour l'acquisition, la qualification et la fidélisation de leurs prospects et clients. <br />
          Notre approche résolument omnicanal mêle emailing, SMS, télémarketing, Google Ads, Facebook Ads...
        </p>

        <Link to='/contact' smooth={true} duration={500} >
          <button className='px-8 py-3 mx-auto font-semibold bg-blue-500 rounded-full dark:bg-gray-800 dark:text-gray-100'> <span>Contactez-nous &nbsp;</span> </button>
        </Link>
      </div>
    </section>
  )
}

export default Accueil
