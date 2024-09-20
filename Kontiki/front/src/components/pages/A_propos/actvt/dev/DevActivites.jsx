import React from 'react'
import alpine from "../../../../../assets/Images/pages/a_propos/technologies/alpinejs.png"
import react from "../../../../../assets/Images/pages/a_propos/technologies/react.jpeg"
import tailwind from "../../../../../assets/Images/pages/a_propos/technologies/tailwind.jpeg"
import vuejs from "../../../../../assets/Images/pages/a_propos/technologies/vuejs.png"
import js from "../../../../../assets/Images/pages/a_propos/technologies/js.jpeg"
import django from "../../../../../assets/Images/pages/a_propos/technologies/django.png"
import python from "../../../../../assets/Images/pages/a_propos/technologies/python.png"
import angular from "../../../../../assets/Images/pages/a_propos/technologies/angular.png"

import { motion } from 'framer-motion';
import { FadeLeft } from '../../../../utility/animation';
import { FadeRight } from '../../../../utility/animation';
import { FadeUp } from '../../../../utility/animation';

function DevActivites() {
    return (
        <>
            <div className="my-8 mt-20 text-center">
                <h2 className="box-border h-20 text-xl font-semibold transition-all duration-700 ease-in-out text-blue-950 md:text-5xl hover:text-6xl">
                    ESPACE DEVELOPPEUR
                </h2>
                <div className="flex justify-center mt-2">
                    <div className="w-24 h-1 bg-amber-500"></div>
                </div>
                <div className="my-8 text-lg text-center">
                    <p className='mt-10 text-3xl text-blue-950'>
                        Bienvenue dans le Département des développeurs
                    </p>
                </div>
            </div>
            

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="my-8 text-3xl font-semibold text-gray-800">
                        Votre partenaire de service informatique
                    </h2>


                    <div className="grid grid-cols-1 gap-8 my-10 mb-20 md:grid-cols-3">


                        <motion.div 
                        
                        variants={FadeRight(1.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}

                        className="flex flex-col p-6 bg-white rounded-lg shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                <span className="text-4xl text-yellow-500">🚀</span>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-800">
                                Numérisez, économisez !
                            </h3>
                            <p className="text-gray-600">
                                Nos services s’adressent à des clients souhaitant numériser
                                leur activité et optimiser leurs coûts de fonctionnement grâce à
                                notre super equipe.
                            </p>

                            <div className="h-1 mt-4 bg-gradient-to-r from-yellow-400 to-blue-400"></div>
                        </motion.div>


                        <motion.div 
                        
                        variants={FadeUp(1.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        
                        className="flex flex-col p-6 bg-white rounded-lg shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                <span className="text-4xl text-yellow-500">📦</span>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-800">
                                Lancez-vous en « 3 clics »
                            </h3>
                            <p className="text-gray-600">
                                Nous trouvons pour vous le meilleur collaborateur adapté à votre
                                besoin en quelques jours seulement.

                            </p>
                            <div className="h-1 mt-4 bg-gradient-to-r from-yellow-400 to-blue-400"></div>

                        </motion.div>


                        <motion.div 
                        
                        variants={FadeLeft(1.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        
                        className="flex flex-col p-6 bg-white rounded-lg shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                <span className="text-4xl text-yellow-500">💻</span>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-800">
                                Des professionnels à votre écoute
                            </h3>
                            <p className="text-gray-600">
                                Nos équipes sont formées dans les meilleures universités et sont
                                pilotées par un management français expérimenté.
                            </p>
                            <div className="h-1 mt-4 bg-gradient-to-r from-yellow-400 to-blue-400"></div>
                        </motion.div>

                    </div>
                </div>
            </section>


            <section className="dark:bg-white dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
                    <h2 className="box-border h-20 text-xl font-semibold transition-all duration-700 ease-in-out text-blue-950 md:text-5xl hover:text-6xl">
                        TECHNOLOGIES
                    </h2>
                    <div className="flex justify-center mt-2">
                        <div className="w-24 h-1 mb-20 bg-amber-500"></div>
                    </div>

                    <div className='font-sans'>
                        <p className='mb-6 text-4xl text-blue-950'>
                            Quelques unes des technologies utilisées chez KONTIKI
                        </p>
                        <p className='mb-6 text-blue-950'>
                            Les Langages, Frameworks ou Solutions que nous utilisons au quotidien
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center pt-20 mb-20 lg:justify-between pb-52">

                        <svg className='transition-all hover:scale-75' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 48 48">
                            <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
                        </svg>

                        <svg className='transition-all hover:scale-75' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 48 48">
                            <path fill="#004d40" fill-rule="evenodd" d="M8,16v12.646C6.655,28.9,5.949,29,4.878,29 C1.67,28.997,0,27.565,0,24.816c0-2.649,1.771-4.368,4.516-4.368c0.426,0,0.75,0.033,1.143,0.134V16H8z M5.659,22.672 c-0.308-0.1-0.561-0.134-0.886-0.134c-1.328,0-2.096,0.809-2.096,2.228c0,1.381,0.734,2.143,2.079,2.143 c0.291,0,0.527-0.016,0.903-0.067V22.672L5.659,22.672z" clip-rule="evenodd"></path><path fill="#004d40" fill-rule="evenodd" d="M12,20.046v6.618c0,2.076-0.155,3.224-0.612,4.084 c-0.426,0.827-0.987,1.349-2.146,1.925l-2.437-1.149c1.159-0.539,1.721-1.015,2.079-1.742c0.375-0.743,0.494-1.754,0.494-4.017 v-5.721H12z" clip-rule="evenodd"></path><rect width="2.623" height="2.713" x="9.377" y="16" fill="#004d40" fill-rule="evenodd" clip-rule="evenodd"></rect><path fill="#004d40" fill-rule="evenodd" d="M13.734,20.876c1.136-0.552,2.223-0.795,3.408-0.795 c1.321,0,2.189,0.363,2.573,1.073C19.93,21.551,20,22.068,20,23.175v5.407c-1.152,0.171-2.606,0.294-3.673,0.294 c-2.156,0-3.123-0.778-3.123-2.505c0-1.868,1.285-2.731,4.441-3.006V22.78c0-0.483-0.235-0.658-0.884-0.658 c-0.95,0-2.02,0.278-3.024,0.812L13.734,20.876z M17.761,25.107c-1.702,0.171-2.255,0.449-2.255,1.141 c0,0.518,0.318,0.761,1.02,0.761c0.384,0,0.735-0.034,1.235-0.12L17.761,25.107L17.761,25.107z" clip-rule="evenodd"></path><path fill="#004d40" fill-rule="evenodd" d="M21.418,20.693c1.52-0.421,2.772-0.613,4.041-0.613 c1.318,0,2.273,0.317,2.839,0.93C28.83,21.588,29,22.222,29,23.573v5.303h-2.574v-5.195c0-1.038-0.335-1.424-1.252-1.424 c-0.351,0-0.669,0.035-1.186,0.195v6.425h-2.57V20.693z" clip-rule="evenodd"></path><path fill="#004d40" fill-rule="evenodd" d="M30.177,30.006c0.919,0.486,1.839,0.71,2.812,0.71 c1.721,0,2.454-0.473,2.454-2.176v-0.052c-0.51,0.258-1.025,0.366-1.704,0.366c-2.302,0-3.739-1.547-3.739-3.997 c0-3.043,2.141-4.762,5.974-4.762c1.126,0,2.167,0.121,3.427,0.383l-0.899,1.93c-0.699-0.138-0.057-0.021-0.584-0.072v0.279 l0.034,1.13l0.017,1.461c0.017,0.366,0.017,0.73,0.034,1.096v0.73c0,2.295-0.19,3.131-0.751,4.02 c-0.818,1.302-2.234,1.947-4.246,1.947c-1.024,0-1.91-0.155-2.829-0.521V30.006L30.177,30.006z M35.392,22.251h-0.085h-0.19 c-0.51-0.017-1.108,0.121-1.518,0.383c-0.628,0.365-0.953,1.027-0.953,1.964c0,1.337,0.649,2.102,1.808,2.102 c0.358,0,0.649-0.069,0.987-0.172v-0.193v-0.73c0-0.314-0.017-0.662-0.017-1.027l-0.017-1.234l-0.017-0.886V22.251z" clip-rule="evenodd"></path><path fill="#004d40" fill-rule="evenodd" d="M43.566,20.046c2.753,0,4.434,1.66,4.434,4.348 c0,2.756-1.752,4.483-4.544,4.483c-2.756,0-4.456-1.659-4.456-4.33C39.005,21.774,40.757,20.046,43.566,20.046z M43.509,26.752 c1.057,0,1.681-0.838,1.681-2.294c0-1.439-0.607-2.294-1.663-2.294c-1.093,0-1.718,0.838-1.718,2.294 C41.81,25.914,42.438,26.752,43.509,26.752L43.509,26.752z" clip-rule="evenodd"></path>
                        </svg>

                        <svg className='transition-all hover:scale-75' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 48 48">
                            <path fill="#bdbdbd" d="M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z"></path><path fill="#b71c1c" d="M42.818 10.527L24 4.135 24 43.695 39.832 35.017z"></path><path fill="#dd2c00" d="M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z"></path><path fill="#bdbdbd" d="M24 5.996L24 15.504 32.578 34 36.987 34z"></path><path fill="#eee" d="M11.013 34L15.422 34 24 15.504 24 5.996z"></path><path fill="#bdbdbd" d="M24 24H30V28H24z"></path><path fill="#eee" d="M18 24H24V28H18z"></path>
                        </svg>

                        <svg className='transition-all hover:scale-75' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 64 64">
                            <linearGradient id="3bjInpNFK5hFbDC04bXOYa_tbleCw0ch6QC_gr1" x1="32" x2="32" y1="8.5" y2="59.263" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#3bjInpNFK5hFbDC04bXOYa_tbleCw0ch6QC_gr1)" d="M56.348,12L32,54L7.652,12h18.626L32,21.739L37.6,12H56.348z"></path><linearGradient id="3bjInpNFK5hFbDC04bXOYb_tbleCw0ch6QC_gr2" x1="32" x2="32" y1="11" y2="55" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#3bjInpNFK5hFbDC04bXOYb_tbleCw0ch6QC_gr2)" d="M57.214,11.501C57.035,11.191,56.705,11,56.348,11H38.6c-0.358,0-0.688,0.191-0.867,0.502	l-5.74,9.993l-5.851-10C25.962,11.188,25.634,11,25.278,11H7.652c-0.357,0-0.688,0.191-0.866,0.501s-0.179,0.691,0.001,1.001	l24.348,42C31.313,54.811,31.644,55,32,55s0.687-0.189,0.865-0.498l24.348-42C57.393,12.192,57.393,11.811,57.214,11.501z M32,52.006L9.388,13h7.307l14.441,24.824c0.179,0.308,0.508,0.497,0.864,0.497c0.001,0,0.001,0,0.002,0	c0.356-0.001,0.686-0.191,0.864-0.5L47.186,13h7.426L32,52.006z"></path>
                        </svg>

                        <svg className='transition-all hover:scale-75' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 64 64">
                            <linearGradient id="wNc8qMg_PMLZF-NebSkXWa_AU6Wc7r56Fxz_gr1" x1="32" x2="32" y1="54" y2="10" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6abff"></stop><stop offset="1" stop-color="#6dc7ff"></stop></linearGradient><path fill="url(#wNc8qMg_PMLZF-NebSkXWa_AU6Wc7r56Fxz_gr1)" d="M54,32c0,5.75-2.2,10.98-5.8,14.9l-0.171,0.187L43,40.646V21h-7v10.686L27.663,21H21v22h7	V32.59l14.66,18.66C39.51,53,35.87,54,32,54c-12.15,0-22-9.85-22-22s9.85-22,22-22S54,19.85,54,32z"></path><linearGradient id="wNc8qMg_PMLZF-NebSkXWb_AU6Wc7r56Fxz_gr2" x1="32" x2="32" y1="58" y2="6" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c822ff"></stop><stop offset="1" stop-color="#1a6dff"></stop></linearGradient><path fill="url(#wNc8qMg_PMLZF-NebSkXWb_AU6Wc7r56Fxz_gr2)" d="M32,58C17.663,58,6,46.336,6,32S17.663,6,32,6s26,11.664,26,26S46.337,58,32,58z M32,8	C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z M41,41.336V23h-3v14.496L26.683,23H23v18h3V26.81	L44.37,50.2c0.771-0.523,1.509-1.097,2.212-1.714L41,41.336z"></path>
                        </svg>

                        <svg className='transition-all hover:scale-75' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 48 48">
                            <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                        </svg>

                        <svg className='transition-all hover:scale-75' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 48 48">
                            <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                        </svg>
                        
                        <svg className='transition-all hover:scale-75' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 48 48">
                            <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                        </svg>

                    </div>

                </div>
            </section>

            <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="my-2 mt-20 text-center">
                    <h2 className="box-border h-20 text-xl font-semibold transition-all duration-700 ease-in-out text-blue-950 md:text-5xl hover:text-6xl ">
                        L'EQUIPE
                    </h2>
                    <div className="flex justify-center mt-2">
                        <div className="w-24 h-1 bg-amber-500"></div>
                    </div>
                </div>
                <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                    <div className="my-5 text-lg text-center">
                        <p className='mt-2 text-3xl text-blue-950'>
                            Les gens talentueux dans les coulisses
                        </p>
                    </div>
                    <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading-snug">Andre KONTIKI</p>
                                <p>Backend</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading-snug">Calin KONTIKI</p>
                                <p>Backend</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading-snug">Tim KONTIKI</p>
                                <p>Front-end</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading-snug">Hurga KONTIKI</p>
                                <p>Frontend</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading-snug">Rodolphe KONTIKI</p>
                                <p>Backend</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading-snug">Antonio KONTIKI</p>
                                <p>Backend</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DevActivites
