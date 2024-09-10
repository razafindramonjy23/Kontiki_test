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
import { FadeLeft } from '../../../../utility/animation' ;
import { FadeRight } from '../../../../utility/animation';
import { FadeUp } from '../../../../utility/animation';

function DevActivites() {
    return (
        <>
            <div className="my-8 text-center mt-20">
                <h2 className="text-6xl font-semibold transition-transform duration-700 ease-in-out text-blue-950 md:text-5xl hover:scale-125">
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

            <section className="bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 my-8">
                        Bienvenue chez votre partenaire de service informatique
                    </h2>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 mb-20">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                <span className="text-yellow-500 text-4xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Numérisez, économisez !
                            </h3>
                            <p className="text-gray-600">
                                Nos services s’adressent à des clients souhaitant numériser
                                leur activité et optimiser leurs coûts de fonctionnement grâce à
                                notre super equipe.
                            </p>
                            <div className="h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mt-4"></div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                <span className="text-yellow-500 text-4xl">📦</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Lancez-vous en « 3 clics »
                            </h3>
                            <p className="text-gray-600">
                                Nous trouvons pour vous le meilleur collaborateur adapté à votre
                                besoin en quelques jours seulement.
                            </p>
                            <div className="h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mt-4"></div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                <span className="text-yellow-500 text-4xl">💻</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Des professionnels à votre écoute
                            </h3>
                            <p className="text-gray-600">
                                Nos équipes sont formées dans les meilleures universités et sont
                                pilotées par un management français expérimenté.
                            </p>
                            <div className="h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mt-4"></div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-white-100 py-12' >
                <div className="my-20 text-center pb-10">
                    <h2 className="text-6xl font-semibold transition-transform duration-700 ease-in-out text-blue-950 md:text-5xl hover:scale-125">
                        TECHNOLOGIES
                    </h2>
                    <div className="flex justify-center mt-2">
                        <div className="w-24 h-1 bg-amber-500"></div>
                    </div>
                    <div className="my-8 text-lg text-center">
                        <p className='mb-6 text-4xl text-blue-950'>
                            Quelques unes des technologies utilisées
                        </p>

                        <p className='mb-6 text-blue-950'>
                            Les Langages, Frameworks ou Solutions que nous utilisons au quotidien
                        </p>
                        <div className="flex justify-center items-center space-x-6 py-20">
                            <img src={alpine} alt="alpine" className="h-20 md:h-25" />

                            <img src={react} alt="react.js" className="h-20 md:h-25" />

                            <img src={tailwind} alt="tailwind" className="h-20 md:h-25" />

                            <img src={vuejs} alt="vue.js" className="h-20 md:h-25" />

                            <img src={js} alt="JavaScript" className="h-20 md:h-25" />

                        </div>
                    </div>

                    <div className="my-8 text-lg text-center">
                        <div className="flex justify-center items-center space-x-6">
                            <img src={django} alt="django" className="h-20 md:h-25" />
                            <img src={python} alt="python" className="h-20 md:h-25" />
                            <img src={angular} alt="angular" className="h-24 md:h-30" />
                        </div>
                    </div>
                </div>


            </section>

            <section className="py-6 dark:bg-gray-50 dark:text-gray-800 bg-gray-50 font-sans">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                    <h2 className="text-6xl font-semibold transition-transform duration-700 ease-in-out text-blue-950 md:text-5xl hover:scale-125">
                        LA TEAM
                    </h2>
                    <div className="flex justify-center mt-2">
                        <div className="w-24 h-1 bg-amber-500"></div>
                    </div>
                    <p className="max-w-2xl text-center dark:text-gray-600">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                    <div className="flex flex-row flex-wrap-reverse justify-center">
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://img.icons8.com/ios/50/user--v1.png" />
                            <p className="text-xl font-semibold leading-tight">Anthonio KONTIKI</p>
                            <p className="dark:text-gray-600">Angular</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://img.icons8.com/ios/50/user--v1.png" />
                            <p className="text-xl font-semibold leading-tight">Tim KONTIKI</p>
                            <p className="dark:text-gray-600">Vue js</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://img.icons8.com/ios/50/user--v1.png" />
                            <p className="text-xl font-semibold leading-tight">Hurga KONTIKI</p>
                            <p className="dark:text-gray-600">Next js</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://img.icons8.com/ios/50/user--v1.png" />
                            <p className="text-xl font-semibold leading-tight">Rodolphe KONTIKI</p>
                            <p className="dark:text-gray-600">Python</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://img.icons8.com/ios/50/user--v1.png" />
                            <p className="text-xl font-semibold leading-tight">Andre KONTIKI</p>
                            <p className="dark:text-gray-600">Python/Django</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default DevActivites
