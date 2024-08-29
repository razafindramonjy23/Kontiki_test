import React from 'react'

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
                        Quelques unes des technologies utilisées
                    </p>

                    <p className='mb-6 text-blue-950'>
                        Les Langages, Frameworks ou Soltions que nous utilisons au quotidien
                    </p>
                </div>
            </div>
        </>
    )
}

export default DevActivites
