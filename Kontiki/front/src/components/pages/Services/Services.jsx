import React from 'react';
import progress from './img/progression.jpg';
import ensemble from './img/ensemble.png';
import lesFilles from './img/01.jpg';
import andre from './img/andre.jpg';
import Rova from './img/Rova.jpg';
import '../../scss/pages/_services.scss';

function Services() {
  return (
    <div className="carousel">
      <div className="list">
        <div className="item" style={{ backgroundImage: `url(${progress})` }}>        
        </div>

        <div className="item" style={{ backgroundImage: `url(${Rova})` }}>        
        </div>

        <div className="item" style={{ backgroundImage: `url(${ensemble})` }}>        
        </div>

        <div className="item" style={{ backgroundImage: `url(${lesFilles})` }}>        
        </div>

        <div className="item" style={{ backgroundImage: `url(${andre})` }}>        
        </div>
      </div>
    </div>
  );
}

export default Services;
