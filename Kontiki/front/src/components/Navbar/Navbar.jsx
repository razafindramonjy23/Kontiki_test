import React, {useState} from 'react';
import Logo from "../../assets/d.jpg";
import { Link } from 'react-router-dom';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
      setOpenLinks(!openLinks);
  };

  return (
    <div className='navbar'>
        <div className='leftSide ' id={openLinks ? "open" : "close"}  >
            <img src={Logo} alt="logo kontiki"/>
            <div className='hiddenLinks '>
              <Link to="/accueil" className=''>Accueil</Link>
              <Link to="/services">Services</Link>
              <Link to="/apropos">A propos</Link>
              <Link to="/test">Teste</Link>
              <Link to="/contact">Contactez-nous</Link>
            </div>
        </div>

        <div className='rightSide font-normal'>
          <Link to="/accueil" className='  hover:text-sky-500 '>Accueil</Link>
          <Link to="/services" className='  hover:text-sky-500 '>Services</Link>
          <Link to="/apropos" className='  hover:text-sky-500 '>A propos</Link>
          <Link to="/test" className='  hover:text-sky-500 '>Test</Link>
          <Link to="/contact" className='  hover:text-sky-500 '>Contactez-nous</Link>
        </div>
    </div>
  )
}

export default Navbar
