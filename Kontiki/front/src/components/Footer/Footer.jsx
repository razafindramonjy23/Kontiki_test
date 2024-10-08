import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/d.jpg";
// import '../../App.scss';

function Footer() {
    return (
        <div className="font-sans footer-basic">
        <footer className='bg-slate-100 '>
            {/* <div className='inline' >
                <h1>Nos Coordinnées</h1>
                <p>Porte 404, Tour Sahavola Lot IBG 16 Ter A</p>
                <p>Antsahavola-Antananarivo 101</p>
                <p></p>
                <p></p>
            </div> */}

            <div className="pt-8 social">
                <a href="#"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/228BE6/linkedin-circled--v1.png" alt="linkedin-circled--v1"/></a>
                <a href="#"><img width="50" height="50" src="https://img.icons8.com/ios-glyphs/60/228BE6/skype.png" alt="skype"/></a>
                <a href="#"><img width="50" height="50" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new"/></a>
                <a href="#"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/228BE6/facebook-new.png" alt="facebook-new"/></a>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"><Link to="/">Accueil</Link></li>
                <li className="list-inline-item"><Link to="/services">Services</Link></li>
                <li className="list-inline-item"><Link to="/apropos">A propos de nous</Link></li>
                <li className="list-inline-item"><Link to="/test">Test</Link></li>
                <li className="list-inline-item"><Link to="/contact">Contactez-nous</Link></li>
            </ul>
            <p className="pb-5 copyright">Copyright © 2024 Kontiki Service</p>
        </footer>
    </div>
    );
}

export default Footer;
