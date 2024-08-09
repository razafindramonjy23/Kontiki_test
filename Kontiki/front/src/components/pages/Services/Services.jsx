import React, { useEffect, useRef } from 'react';
import progress from './img/progression.jpg';
import ensemble from './img/ensemble.png';
import lesFilles from './img/01.jpg';
import andre from './img/andre.jpg';
import Rova from './img/Rova.jpg';
import '../../scss/pages/_services.scss';

function Services() {
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const runningTimeRef = useRef(null);

  useEffect(() => {
    const nextBtn = nextBtnRef.current;
    const prevBtn = prevBtnRef.current;
    const carousel = carouselRef.current;
    const list = listRef.current;
    const runningTime = runningTimeRef.current;

    const timeRunning = 3000;
    const timeAutoNext = 7000;

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);

    function resetTimeAnimation() {
      if (runningTime) {
        runningTime.style.animation = 'none';
        runningTime.offsetHeight; 
        runningTime.style.animation = null;
        runningTime.style.animation = 'runningTime 7s linear 1 forwards';
      }
    }

    function showSlider(type) {
      let sliderItemsDom = list.querySelectorAll('.item');
      if (type === 'next') {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add('next');
      } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add('prev');
      }

      clearTimeout(runTimeOut);

      runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextBtn.click();
      }, timeAutoNext);

      resetTimeAnimation(); // mamerina ny temps anle animation
    }

    nextBtn.onclick = function() {
      showSlider('next');
    };

    prevBtn.onclick = function() {
      showSlider('prev');
    };

    // manomboka ny animation voalohany
    resetTimeAnimation();

    return () => {
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);

  return (
    <>
      <div className="TitrePrincipal">
        <h1 className='text-4xl py-5 px-5'>Nos Activité principales</h1>
      </div>

      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          <div className="item" style={{ backgroundImage: `url(${andre})` }}>
          </div>

          <div className="item" style={{ backgroundImage: `url(${Rova})` }}>
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

          <div className="item" style={{ backgroundImage: `url(${ensemble})` }}>
            <div className="content">
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

          <div className="item " style={{ backgroundImage: `url(${lesFilles})` }}>
            <div className="content">
              <div className="titre">QUALIFICATION DES PROSPECTS</div>
              <div className="description">
                Nous qualifions les contacts pour cibler au plus juste les prospects de nos clients.
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
          <button className="prev" ref={prevBtnRef}>
            <img width="20" height="20" src="https://img.icons8.com/flat-round/64/left--v1.png" alt="left--v1" />
          </button>
          <button className="next" ref={nextBtnRef}>
            <img width="20" height="20" src="https://img.icons8.com/flat-round/64/right--v1.png" alt="right--v1" />
          </button>
        </div>
        <div className="timeRunning" ref={runningTimeRef}></div>
      </div>

      <div className="nosForces">
        <h1>NOS FORCES </h1>
      </div>
    </>
  );
}

export default Services;
