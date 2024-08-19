import React from 'react'
import profil from '../../../../assets/Images/pages/a_propos/devWeb.jpg'
import ktk from '../../../../assets/ktk.png'

function Activites() {
    return (
        <>
            <section className="container py-12 mx-auto">
                <h2 className="mb-8 text-3xl font-bold text-center">À propos de nous</h2>

                {/* Section: Notre histoire */}
                <div className="mb-12">
                    <h3 className="mb-4 text-2xl font-bold">Notre histoire</h3>
                    <p>
                        Notre entreprise a été fondée en [année] par [fondateur].
                        [Votre histoire ici]
                    </p>
                </div>

                {/* Section: Notre équipe */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex flex-col items-center">
                        <img src={ktk} alt="Profil" className="w-48 mb-4 rounded-full" />
                        <h4 className="text-xl font-bold">Votre nom</h4>
                        <p>Votre poste</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src={profil} alt="Profil" className="w-48 mb-4 rounded-full" />
                        <h4 className="text-xl font-bold">Votre nom</h4>
                        <p>Votre poste</p>
                    </div>
                    {/* Ajouter d'autres membres de l'équipe */}
                </div>

                {/* Section: Nos valeurs */}
                <div className="mb-12">
                    <h3 className="mb-4 text-2xl font-bold">Nos valeurs</h3>
                    <ul>
                        <li>Valeur 1</li>
                        <li>Valeur 2</li>
                        <li>Valeur 3</li>
                    </ul>
                </div>

                {/* Section: Témoignages */}
                <div className="mb-12">
                    <h3 className="mb-4 text-2xl font-bold">Témoignages</h3>
                    <img src={ktk} alt="" />
                    {/* Ajouter des cartes pour chaque témoignage */}
                </div>

                {/* Section: Récompenses */}
                <div className="mb-12">
                    <h3 className="mb-4 text-2xl font-bold">Récompenses</h3>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center">
                            {/* <FaTrophy className="mr-2 text-2xl" /> */}
                            <p>Prix X</p>
                        </div>
                        {/* Ajouter d'autres récompenses */}
                    </div>
                </div>

                {/* Section: Appel à l'action */}
                <div className="text-center">
                    <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                        Contactez-nous
                    </button>
                </div>
            </section>

        </>
    )
}

export default Activites
