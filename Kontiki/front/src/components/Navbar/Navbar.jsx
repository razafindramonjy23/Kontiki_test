import React, { useState } from 'react';
import Logo from "../../assets/d.jpg";
import { Link } from 'react-router-dom';
import { NavbarMenu } from '../utility/navbar';
import ResponsiveMenu from './ResponsiveMenu';



function Navbar() {

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav>
        <div className='flex items-center justify-between px-8 py-2 text-gray-700 bg-white md:px-20 drop-shadow-md font-sans'>
          <Link to="/accueil">
            <img src={Logo} alt="Kontiki logo" className="transition-all w-44 hover:scale-105" />
          </Link >


          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={item.link} className=' font-medium text-lg inline-block py-1 px-3 hover:bg-amber-200 hover:text-slate-900 transition-all duration-700 rounded-lg'>{item.title}</a>
                  </li>
                )
              })}
            </ul>

          </div>

          <img className='block text-5xl cursor-pointer xl:hidden' width="50" height="50" src="https://img.icons8.com/ios-filled/50/menu--v6.png" alt="menu--v6" onClick={() => 
            setOpen(!open)
          }/>
        </div>
      </nav>

      <ResponsiveMenu open={open}/>

    </>
  )
}
export default Navbar