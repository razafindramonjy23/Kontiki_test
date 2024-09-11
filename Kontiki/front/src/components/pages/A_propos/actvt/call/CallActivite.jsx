import React from 'react'

import explorer from "../../../../../assets/Images/pages/a_propos/technologies/explorer.png"



function CallActivite() {
  return (
    <>
    
    <section className="flex items-center justify-between px-32 py-40 bg-white">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold text-gray-900">Explorer</h1>
        <p className="mt-4 text-lg text-gray-600">
          Explorez nos parcours de formation structurés pour tout savoir sur la création de contenus pour le Web.
        </p>
      </div>     
      <div className="flex-shrink-0">
        <img
          src={explorer} 
          alt="Illustration de création de contenu"
          className="w-auto h-64"
        />
      </div>
    </section>

    
    
    </>
  )
}

export default CallActivite