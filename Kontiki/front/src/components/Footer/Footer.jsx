import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-basic">
            <footer>
                <div className="social">
                    <a href="#"><i className="icon ion-social-instagram"></i></a>
                    <a href="#"><i className="icon ion-social-snapchat"></i></a>
                    <a href="#"><i className="icon ion-social-twitter"></i></a>
                    <a href="#"><i className="icon ion-social-facebook"></i></a>
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">Accueil</a></li>
                    <li className="list-inline-item"><a href="#">Services</a></li>
                    <li className="list-inline-item"><a href="#">A propos de nous</a></li>
                    <li className="list-inline-item"><a href="#">Test</a></li>
                    <li className="list-inline-item"><a href="#">Contactez-nous</a></li>
                </ul>
                <p className="copyright">Copyright © 2024 Kontiki Service</p>
            </footer>
        </div>
    )
}

export default Footer
