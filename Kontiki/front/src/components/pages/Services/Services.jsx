import React from 'react';
import './Services.css';
import bg1 from './img/1.jpg';
import bg2 from './img/2.jpg';
import bg3 from './img/3.jpg';

function Card({ image, titre, description }) {
  return (
    <div className="principaleService">
      <div className="service-card" style={{ backgroundImage: `url(${image})` }}>
        <div className="content">
        <h3 className="card-titre">{titre}</h3>
        <p className="card-description">{description}</p>
        <button>Voir plus</button>
      </div>
    </div>
    </div>

  );
}

function Services() {
  const servicesData = [
    {
      image: bg1,
      titre: "GENERATION DES LEADS",
      description: "Collecter des prospects qualifiés et générez de nouveaux clients.",
    },
    {
      image: bg2,
      titre: "CAMPAGNES EMAILING",
      description: "Gestion de campagnes emailing, depuis la création de KIT, landing page jusqu'à l'envoi et l'analyse des résultats.",
    },
    {
      image: bg3,
      titre: "QUALIFICATION DES PROSPECTS",
      description: "Nous qualifions les contacts pour cibler au plus juste les prospects de nos clients.",
    },
    
  ];

  return (
    <div className="containerService">
      <div className="slide">
        {servicesData.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
