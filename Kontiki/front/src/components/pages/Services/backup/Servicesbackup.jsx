import React, { useState } from 'react';
import lead from './img/lead.jpg';
import bg3 from './img/3.jpg';
import bg4 from './img/4.jpg'
import progress from './img/progression.jpg';
import bigdata from './img/bigdata.jpg';

function Card({ image, titre, description }) {
  return (
    <div className="service-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="content">
        <h3 className="card-titre">{titre}</h3>
        <p className="card-description">{description}</p>
        <button>Voir plus</button>
      </div>
      <div className="btns">
        <button className="prev" ><img width="20" height="20" src="https://img.icons8.com/flat-round/64/left--v1.png" alt="left--v1"/></button>
        <button className="next"><img width="20" height="20" src="https://img.icons8.com/flat-round/64/right--v1.png" alt="right--v1"/></button>
      </div>
    </div>
  );
}

function Services() {
  const servicesData = [
    {
      image: lead,
      titre: "GENERATION DES LEADS",
      description: "Collecter des prospects qualifiés et générez de nouveaux clients.",
    },
    {
      image: bg3,
      titre: "CAMPAGNES EMAILING",
      description: "Gestion de campagnes emailing, depuis la création de KIT, landing page jusqu'à l'envoi et l'analyse des résultats.",
    },
    {
      image: bigdata,
      titre: "QUALIFICATION DES PROSPECTS",
      description: "Nous qualifions les contacts pour cibler au plus juste les prospects de nos clients.",
    },
    {
      image: progress,
      titre: "Img4",
      description: "Nous qualifions les contacts pour cibler au plus juste les prospects de nos clients.",
    },
    {
      image: bg4,
      titre: "QUALIFICATION DES PROSPECTS",
      description: "Nous qualifions les contacts pour cibler au plus juste les prospects de nos clients.",
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? servicesData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === servicesData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="containerService">
        <div className="slide">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              {...service}
              isActive={index === currentIndex}
            />
          ))}
        </div>
        <div className="navigation">
          <button className="prev" onClick={handlePrevClick}>
            <img width="20" height="20" src="https://img.icons8.com/flat-round/64/left--v1.png" alt="left--v1" />
          </button>
          <button className="next" onClick={handleNextClick}>
            <img width="20" height="20" src="https://img.icons8.com/flat-round/64/right--v1.png" alt="right--v1" />
          </button>
        </div>
      </div>

    </>
  );
}

export default Services;
