import React, { useState } from 'react';
import Logo from "../../assets/d.jpg";
import { Link } from 'react-router-dom';


// const [isMenuOpen, setIsMenuOpen] = useState(false) 

function Navbar() {
  return (
    <>
    <header className="flex items-center justify-between px-8 py-2 text-gray-700 bg-white md:px-20 drop-shadow-md">
      <a href='#'>
        <img src={Logo} alt="Kontiki logo" className="transition-all w-44 hover:scale-105"/>
      </a>

      <div className="items-center hidden gap-12 font-sans text-lg xl:flex text-slate-700">
          <Link to="/accueil" className='px-3 py-2 font-medium transition-all duration-700 rounded-lg text-slate-700 hover:bg-amber-200 hover:text-slate-900'>Accueil</Link>
          <Link to="/services" className='px-3 py-2 font-medium transition-all duration-700 rounded-lg text-slate-700 hover:bg-amber-200 hover:text-slate-900'>Services</Link>
          <Link to="/apropos" className='px-3 py-2 font-medium transition-all duration-700 rounded-lg text-slate-700 hover:bg-amber-200 hover:text-slate-900'>A propos</Link>
          <Link to="/test" className='px-3 py-2 font-medium transition-all duration-700 rounded-lg text-slate-700 hover:bg-amber-200 hover:text-slate-900'>Test</Link>
          <Link to="/contact" className='px-3 py-2 font-medium transition-all duration-700 rounded-lg text-slate-700 hover:bg-amber-200 hover:text-slate-900'>Contactez-nous</Link>
        </div>

        <img className='block text-5xl cursor-pointer xl:hidden' width="50" height="50" src="https://img.icons8.com/ios/50/menu--v1.png" alt="menu--v1" onClick={() => setIsMenuOpen(!isMenuOpen)}/>

        {/* <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        
        style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
        >
          <Link to="/accueil" className='px-3 py-2 font-medium transition-all duration-700 rounded-lg text-slate-700 hover:bg-amber-200 hover:text-slate-900'>Accueil</Link>
          <Link to="/services" className='px-3 py-2 font-medium transition-all duration-700 rounded-lg text-slate-700 hover:bg-amber-200 hover:text-slate-900'>Services</Link>
          <Link to="/apropos" className='px-3 py-2 font-medium transition-all duration-700 rounded-lg text-slate-700 hover:bg-amber-200 hover:text-slate-900'>A propos</Link>
          <Link to="/test" className='px-3 py-2 font-medium transition-all duration-700 rounded-lg text-slate-700 hover:bg-amber-200 hover:text-slate-900'>Test</Link>
          <Link to="/contact" className='px-3 py-2 font-medium transition-all duration-700 rounded-lg text-slate-700 hover:bg-amber-200 hover:text-slate-900'>Contactez-nous</Link>
        </div> */}
        
    </header>
    </>
  )
}
export default Navbar