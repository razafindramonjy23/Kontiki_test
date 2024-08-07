import React, {useState} from 'react'
// import '../../App.scss'
import Logo from "../../assets/d.jpg";
import { Link } from 'react-router-dom';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
      setOpenLinks(!openLinks);
  };

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={Logo} alt="logo kontiki"/>
            <div className='hiddenLinks'>
              <Link to="/accueil">Accueil</Link>
              <Link to="/services">Services</Link>
              <Link to="/apropos">A propos de nous</Link>
              <Link to="/test">Teste</Link>
              <Link to="/contact">Contactez-nous</Link>
            </div>
        </div>

        <div className='rightSide'>
          <Link to="/accueil">Accueil</Link>
          <Link to="/services">Services</Link>
          <Link to="/apropos">A propos de nous</Link>
          <Link to="/test">Test</Link>
          <Link to="/contact">Contactez-nous</Link>
        </div>
    </div>
  )
}

export default Navbar
