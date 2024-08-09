import React from 'react'
//import './A_propos.jsx'
import profilee from "../../../assets/andre.jpg"


function A_propos() {

  const people = [
    {
      name: 'Michael KONTIKI',
      role: 'Comptable',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

    {
      name: 'Deddy KONTIKI',
      role: 'Traffic Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

    {
      name: 'Andre KONTIKI',
      role: 'Développeur',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Rita KONTIKI',
      role: 'CALL',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

  ]
  return (
    <>

      <div className="text-center py-5">
        <h1 className="text-5xl font-bold py-5">A propos de nous</h1>
        <p className="mt-4 text-lg">Spécialiste du marketing digital et du traitement des données massives (Bigdata), KONTIKI SERVICE a été créé le 19 mars 2019..</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Voici la mission que Miarakap s'est donnée</h1>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500 p-6">
              <h2 className="text-2xl font-bold text-white">Première Division</h2>
              <p className="text-white">Contenu de la première division.</p>
            </div>
            <div className="bg-green-500 p-6">
              <h2 className="text-2xl font-bold text-white">Deuxième Division</h2>
              <p className="text-white">Contenu de la deuxième division.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-3xl font-bold">Notre vision :</p>
          <ul className="list-disc list-inside mt-4">
            <p>Vous évoluerez dans l'environnement passionnant du marketing digital,
              et gagnerez rapidement en compétence et en responsabilité pour construire ensemble l'avenir de la société.
            </p>
          </ul>
        </div>
      </div>

      <div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Des métiers de l'avenir</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Nous offrons une opportunité aux jeunes malgaches d'exprimer
                leurs potentiels et d'occuper des métiers d'avenir challengeant.
              </p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default A_propos
