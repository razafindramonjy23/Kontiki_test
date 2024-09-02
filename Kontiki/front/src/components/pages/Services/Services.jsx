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

    nextBtn.onclick = function () {
      showSlider('next');
    };

    prevBtn.onclick = function () {
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
      <div className="my-8 mb-20 font-sans text-center">
        <h2 className="text-5xl font-semibold ">
          NOTRE ACTIVITES
        </h2>
        <div className="flex justify-center mt-2">
          <div className="w-24 h-1 bg-amber-500"></div>
        </div>
      </div>

      <div className="carousel " ref={carouselRef}>
        <div className="list" ref={listRef}>
          <div className="item" style={{ backgroundImage: `url(${progress})` }}>
          </div>

          <div className="item" style={{ backgroundImage: `url(${Rova})` }}>
            <div className="content">
              <div className="titre">GENERATION DES LEADS</div>
              <div className="description">
                Collecter des prospects qualifiés et générez de nouveaux clients.
              </div>
              {/* <div className="btns">
              <button>Voir plus</button>
              </div> */}
            </div>
          </div>

          <div className="item" style={{ backgroundImage: `url(${ensemble})` }}>
            <div className="content">
              <div className="titre">CAMPAGNES EMAILING</div>
              <div className="description">
                Gestion des campagnes emailing, depuis la création de KIT, landing page jusqu'à l'envoi et l'analyse des résultats.
              </div>
              {/* <div className="btns">
                <button>Voir plus</button>
              </div> */}
            </div>
          </div>

          <div className="item " style={{ backgroundImage: `url(${lesFilles})` }}>
            <div className="content">
              <div className="titre">QUALIFICATION DES PROSPECTS</div>
              <div className="description">
                Nous qualifions les contacts pour cibler au plus juste les prospects de nos clients.
              </div>
              {/* <div className="btns">
                <button>Voir plus</button>
              </div> */}
            </div>
          </div>

          <div className="item" style={{ backgroundImage: `url(${andre})` }}>
            <div className="content">
              <div className="titre">DEVELOPPONS ENSEMBLE VOTRE AVENIR DIGITAL</div>
              <div className="description">
                Faites-nous confiance.
              </div>
              {/* <div className="btns">
                <button>Voir plus</button>
              </div> */}
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

      {/* <div className="my-8 mb-20 font-sans text-center">
        <h2 className="text-5xl font-semibold ">
          NOS FORCES
        </h2>
        <div className="flex justify-center mt-2">
          <div className="w-24 h-1 bg-amber-500"></div>
        </div>
      </div> */}



      <section className="py-20 bg-white">
        <div className="container flex flex-col items-center px-4 mx-auto lg:flex-row">
          <div className="text-center lg:text-left lg:w-1/2">
            <div className="my-8 mb-20 font-sans text-center">
              <h2 className="text-5xl font-semibold ">
                NOS FORCES
              </h2>
              <div className="flex justify-center mt-2">
                <div className="w-24 h-1 bg-amber-500"></div>
              </div>
            </div>
            <p className="mb-6 text-lg transition-transform duration-300 ease-in-out text-black-600 hover:scale-110">
              Equipe jeune, dynamique et compétente
            </p>

            <p className="mb-6 text-lg transition-transform duration-300 ease-in-out text-black-600 hover:scale-110">
              Large éventail de métiers intéressants
            </p>

            <p className="mb-6 text-lg transition-transform duration-300 ease-in-out text-black-600 hover:scale-110">
              Ambiance conviviale et professionnelle
            </p>

            <div className="flex justify-center space-x-4 lg:justify-start">
              <p className="flex items-center px-5 py-2 rounded-lg text-blue-950 bg-amber-400">
                {/* <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.3 2.7 8.1 6.5 9.5.5.1.7-.2.7-.5v-1.7c-2.7.5-3.2-1.3-3.2-1.3-.4-1-.9-1.2-.9-1.2-.7-.4.1-.4.1-.4.8.1 1.2.8 1.2.8.7 1.3 2.1 1 2.6.8.1-.5.3-.8.5-1-2.2-.3-4.5-1.1-4.5-4.7 0-1 .4-1.9 1-2.6-.1-.3-.4-1.4.1-2.9 0 0 .8-.3 2.6 1 .8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 1.8-1.3 2.6-1 2.6-1 .5 1.5.2 2.6.1 2.9.7.7 1 1.6 1 2.6 0 3.7-2.3 4.4-4.5 4.7.3.3.6.7.6 1.3v2c0 .3.2.6.7.5C19.3 20.1 22 16.3 22 12c0-5.5-4.5-10-10-10z" />
                  </svg> */}
                EN PLEIN CROISSANCE
              </p>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <img
              src=""
              alt="Jeunes"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
