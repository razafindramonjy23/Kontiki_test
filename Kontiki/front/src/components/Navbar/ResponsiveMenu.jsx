import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';


const ResponsiveMenu = ({ open }) => {
    return (
        <AnimatePresence mode="wait">

            {open && (
                <motion.div

                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-20 left-0 w-full h-screen z-20"

                >

                    <div className="text-xl uppercase bg-blue-400 font-semibold text-white py-10 m-6 rounded-3xl ">
                        <ul className="flex flex-col justify-center items-center gap-10">
                            <li className="list-inline-item"><Link to="/">Accueil</Link></li>
                            <li className="list-inline-item"><Link to="/services">Services</Link></li>
                            <li className="list-inline-item"><Link to="/apropos">A propos de nous</Link></li>
                            <li className="list-inline-item"><Link to="/test">Test</Link></li>
                            <li className="list-inline-item"><Link to="/contact">Contacte</Link></li>
                        </ul>
                    </div>

                </motion.div>
            )}

        </AnimatePresence>
    )
}

export default ResponsiveMenu