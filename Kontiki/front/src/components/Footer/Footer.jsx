import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.scss';

function Footer() {
    return (
        <div className="footer-basic">
            <footer>
                <div className="social">
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
                <p className="copyright">Copyright © 2024 Kontiki Service</p>
            </footer>
        </div>
    );
}

export default Footer;
