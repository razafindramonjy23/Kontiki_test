import React from 'react'


import explorer from "../../../../../assets/Images/pages/a_propos/technologies/explorer.png"
import avatar from "../../../../../assets/Images/pages/a_propos/avatar/avatar.jpg"


function CallActivite() {
  const teamMembers = [
    {
      name: 'Ryan Samuel',
      role: 'EXAMINATEUR FINANCIER',
      img: avatar,
      github: '#',
      linkedin: '#',
    },
    {
      name: 'Jordan Michael',
      role: 'DÉVELOPPEUR WEB',
      img: 'https://via.placeholder.com/150',
      github: '#',
      linkedin: '#',
    },
    {
      name: 'Nora Hazel',
      role: 'CONCEPTEUR UI/UX',
      img: 'https://via.placeholder.com/150',
      github: '#',
      linkedin: '#',
    },
    {
      name: 'Alice Johnson',
      role: 'Chef de projet',
      img: 'https://via.placeholder.com/150',
      linkedin: '#',
      website: '#',
    },
    {
      name: 'Michael Smith',
      role: 'Analyste de données',
      img: 'https://via.placeholder.com/150',
      twitter: '#',
      linkedin: '#',
      website: '#',
    },
    {
      name: 'Sophia Brown',
      role: 'Développeuse Full Stack',
      img: 'https://via.placeholder.com/150',
      twitter: '#',
      linkedin: '#',
      website: '#',
    },
  ];

  return (
    <>

      <section className="flex items-center justify-between px-32 py-40 bg-white ">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-blue-40">Explorer</h1>
          <p className="mt-4 text-lg text-gray-600">
            Explorez notre département Marketing pour tout savoir comment on gère le marché.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img src={explorer} alt="Illustration de création de contenu" className="w-auto h-64" />
        </div>
      </section>

      <div className="w-auto p-8 font-sans text-white ">
        <div className="text-center ">
          <h2 className="box-border h-20 text-xl font-semibold transition-all duration-700 ease-in-out text-blue-950 md:text-5xl hover:text-6xl">
          La Team Call
          </h2>
          <div className="flex justify-center mt-2">
            <div className="w-24 h-1 bg-amber-500"></div>
          </div>
          <div className="my-8 text-lg text-center">
            <p className='mt-10 text-xl text-blue-950'>
            Nous essayons constamment de nous exprimer et de réaliser nos rêves. Si vous avez la possibilité de jouer à ce jeu de la vie, vous devez apprécier chaque instant.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <img src={member.img} alt={member.name} className="w-32 h-32 mx-auto mb-4 rounded-full" />
              <h3 className="text-lg font-semibold text-center">{member.name}</h3>
              <p className="text-center text-gray-400">{member.role}</p>
              <div className="flex justify-center mt-3 space-x-3">
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.609 1.794-1.573 2.165-2.724-.951.563-2.005.974-3.127 1.194-.895-.954-2.173-1.549-3.594-1.549-2.717 0-4.92 2.213-4.92 4.92 0 .385.045.761.127 1.124-4.092-.205-7.72-2.164-10.148-5.144-.426.733-.666 1.582-.666 2.488 0 1.71.87 3.215 2.188 4.095-.807-.026-1.566-.247-2.228-.616v.062c0 2.394 1.698 4.39 3.946 4.844-.414.112-.848.171-1.297.171-.317 0-.626-.031-.933-.086.626 1.956 2.44 3.376 4.586 3.416-1.68 1.317-3.805 2.101-6.095 2.101-.395 0-.788-.023-1.173-.067 2.175 1.396 4.76 2.207 7.548 2.207 9.056 0 14.003-7.493 14.003-13.977 0-.213-.005-.426-.014-.637.961-.695 1.8-1.56 2.465-2.549z" />
                  </svg>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h14c2.21 0 4-1.79 4-4v-16c0-2.21-1.79-4-4-4zm-10.5 20h-2.25v-10.5h2.25v10.5zm-1.125-11.75c-.72 0-1.125-.48-1.125-1.08 0-.6.435-1.08 1.125-1.08s1.125.48 1.125 1.08c0 .6-.405 1.08-1.125 1.08zm13.875 11.75h-2.25v-5.25c0-1.25-.025-2.85-1.75-2.85-1.75 0-2.015 1.25-2.015 2.55v5.55h-2.25v-10.5h2.25v1.45h.025c.315-.6 1.075-1.25 2.2-1.25 2.35 0 2.775 1.55 2.775 3.55v7.75z" />
                  </svg>
                </a>
                <a href={member.website} target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 4h-6v2h6v14h-6v2h6c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm-14 0c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h6v-2h-6v-14h6v-2h-6zm0 0h-3.5c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h3.5v-2h-3.5v-14h3.5v-2h-3.5z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default CallActivite