import React from 'react'
import user1 from '../../../../assets/Images/pages/a_propos/user1.jpg'
import user2 from '../../../../assets/Images/pages/a_propos/user2.jpg'
import user3 from '../../../../assets/Images/pages/a_propos/user3.jpg'
import user4 from '../../../../assets/Images/pages/a_propos/user4.jpg'


import { Link } from 'react-router-dom'

function MembresKontiki() {
    return (
        <>
            <div className='bg-white'>
                <div className="container px-6 mx-auto md:px-12 lg:px-8">
                    <div className="mb-12 space-y-4 text-center">

                        <h1 className="text-4xl font-bold text-blue-950 md:text-5xl" >Nos Superviseurs</h1>
                        <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
                            Chaque département possède leurs propre Superviseurs.
                        </p>
                    </div>


                    <div className="grid py-20 gap-28 md:gap-12 md:grid-cols-3">

                        <div className="space-y-4 text-center border-t-4 group">
                            <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden ">
                                <img src={user1} alt="RitaKontiki" loading='lazy' width="640" height="805" className='w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale[1.4]' />
                            </div>
                            <div className='text-center'>
                                <h5 className='text-xl font-semibold text-gray-800'>Rita Kontiki</h5>
                                <span className='text-sm text-gray-500 '>Marketing</span>
                            </div>
                            <Link to="/TeamCall" className="block mx-auto text-center text-blue-500 w-max">Département</Link>
                        </div>

                        <div className="space-y-4 text-center border-t-4 group">
                            <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden ">
                                <img src={user2} alt="MamisoaKontiki" loading='lazy' width="640" height="805" className='w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale[1.4]' />
                            </div>
                            <div className='text-center'>
                                <h5 className='text-xl font-semibold text-gray-800'>Mamisoa Kontiki</h5>
                                <span className='text-sm text-gray-500 '>Affiliète</span>
                            </div>
                            <Link to="/TeamCall" className="block mx-auto text-center text-blue-500 w-max">Département</Link>
                        </div>

                        <div className="space-y-4 text-center border-t-4 group">
                            <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden ">
                                <img src={user3} alt="AndreKontiki" loading='lazy' width="640" height="805" className='w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale[1.4]' />
                            </div>
                            <div className='text-center'>
                                <h5 className='text-xl font-semibold text-gray-800'>Andre Kontiki</h5>
                                <span className='text-sm text-gray-500 '>Dévellopeur</span>
                            </div>
                            <Link to="/TeamDev" className="block mx-auto text-center text-blue-500 w-max">Département</Link>
                        </div>

                        <div className="mt-20 space-y-4 text-center border-t-4 group">
                            <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden ">
                                <img src={user4} alt="DeddyKontiki" loading='lazy' width="640" height="805" className='w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale[1.4]' />
                            </div>
                            <div className='text-center'>
                                <h5 className='text-xl font-semibold text-gray-800'>Deddy Kontiki</h5>
                                <span className='text-sm text-gray-500 '>Trafic Manager</span>
                            </div>
                            <Link to="/TeamCall" className="block mx-auto text-center text-blue-500 w-max">Département</Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MembresKontiki
