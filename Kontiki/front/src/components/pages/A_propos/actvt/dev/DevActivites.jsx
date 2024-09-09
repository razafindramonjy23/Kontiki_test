import React from 'react'
import alpine from "../../../../../assets/Images/pages/a_propos/technologies/alpinejs.png"
import react from "../../../../../assets/Images/pages/a_propos/technologies/react.jpeg"
import tailwind from "../../../../../assets/Images/pages/a_propos/technologies/tailwind.jpeg"
import vuejs from "../../../../../assets/Images/pages/a_propos/technologies/vuejs.png"
import js from "../../../../../assets/Images/pages/a_propos/technologies/js.jpeg"
import django from "../../../../../assets/Images/pages/a_propos/technologies/django.png"
import python from "../../../../../assets/Images/pages/a_propos/technologies/python.png"
import angular from "../../../../../assets/Images/pages/a_propos/technologies/angular.png"

function DevActivites() {
    return (
        <>
            <div className="my-8 text-center">
                <h2 className="text-6xl font-semibold transition-transform duration-700 ease-in-out text-blue-950 md:text-5xl hover:scale-125">
                    ESPACE DEVELOPPEUR
                </h2>
                <div className="flex justify-center mt-2">
                    <div className="w-24 h-1 bg-amber-500"></div>
                </div>
                <div className="my-8 text-lg text-center">
                    <p className='mb-6 text-4xl text-blue-950'>
                        Bienvenue dans le Département des développeurs
                    </p>
                </div>
            </div>

            <section className="bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                        Bienvenue chez votre partenaire de service informatique
                    </h2>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                <span className="text-orange-500 text-4xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Industrialisez, économisez !
                            </h3>
                            <p className="text-gray-600">
                                Nos services s’adressent à des clients souhaitant numériser
                                leur activité et optimiser leurs coûts de fonctionnement grâce à
                                notre super equipe.
                            </p>
                            <div className="h-1 bg-gradient-to-r from-yellow-400 to-red-400 mt-4"></div>
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
                            <div className="h-1 bg-gradient-to-r from-yellow-400 to-red-400 mt-4"></div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                <span className="text-orange-500 text-4xl">💻</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Des professionnels à votre écoute
                            </h3>
                            <p className="text-gray-600">
                                Nos équipes sont formées dans les meilleures universités et sont
                                pilotées par un management français expérimenté.
                            </p>
                            <div className="h-1 bg-gradient-to-r from-yellow-400 to-red-400 mt-4"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-white-100 py-12' >
                <div className="my-8 text-center">
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
                        <p className='mb-6 text-4xl text-blue-950'>
                            Technologies frontend
                        </p>
                        <div className="flex justify-center items-center space-x-6 pt-20">
                            <img src={alpine} alt="alpine" className="h-20 md:h-25" />

                            <img src={react} alt="react.js" className="h-20 md:h-25" />

                            <img src={tailwind} alt="tailwind" className="h-20 md:h-25" />

                            <img src={vuejs} alt="vue.js" className="h-20 md:h-25" />

                            <img src={js} alt="JavaScript" className="h-20 md:h-25" />

                        </div>
                    </div>

                    <div className="my-8 text-lg text-center">
                        <p className='mb-6 text-4xl text-blue-950'>
                            Technologies backend
                        </p>
                        <div className="flex justify-center items-center space-x-6">
                            <img src={django} alt="django" className="h-20 md:h-25" />
                            <img src={python} alt="python" className="h-20 md:h-25" />
                            <img src={angular} alt="angular" className="h-24 md:h-30" />
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default DevActivites
