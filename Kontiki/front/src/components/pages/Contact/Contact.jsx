import React, { useEffect, useState } from 'react'
import './Contact.css';
import bois from './img/bois.jpg';

function Contact() {

  const [name, setName] = useState('')

  return (
    <div>
      <main>
        <section className='contact'>
          <div className="container">
            <div className="left">
              <div className="form-wrapper">
                <div className="contact-heading">
                  <h1>Travaillons ensembles.</h1>
                  <p className="texte">Ou Contactez-nous via : <a href="malto:recrutement@kontikiservice.com">recrutement@kontikiservice.com</a></p>
                </div>

                <form action="#" className="contact-form" method='post'>
                  
                  <div className={`input-wrap ${name !== '' ? 'focus not-empty' : ''}`}>
                    <input type="text" className="contact-input" required name='nom' autoComplete='on' value={name} onChange={(e) => setName(e.target.value)}/>
                    <label>Nom</label>
                    <img className='icon' width="35" height="35" src="https://img.icons8.com/pulsar-gradient/48/000000/user.png" alt="user"/>
                  </div>

                  <div className="input-wrap">
                    <input type="text" className="contact-input" required name='prenom' autoComplete='off'/>
                    <label>Prenom</label>
                    <img className='icon' width="35" height="35" src="https://img.icons8.com/pulsar-gradient/48/000000/user.png" alt="user"/>
                  </div>

                  <div className="input-wrap w-100">
                    <input type="email" className="contact-input" required name='Email' autoComplete='off'/>
                    <label>Email</label>
                    <img className='icon' width="35" height="35" src="https://img.icons8.com/fluency/48/000000/circled-envelope.png" alt="circled-envelope"/>
                  </div>

                  <div className="input-wrap textarea w-100">
                    <textarea name="Message" autoComplete='off' id="" className='contact-input' required></textarea>
                    <label>Message</label>
                    <img className='icon' width="35" height="35" src="https://img.icons8.com/fluency/48/000000/chat-message.png" alt="chat-message"/>
                  </div>

                  <div className="contact-buttons w-100">
                    <button>
                      <div className="wrapper-1">
                        <div className="wrapper">
                        <img className='iconSend' width="48" height="48" src="https://img.icons8.com/fluency/48/000000/circled-right-2.png" alt="circled-right-2"/>
                        </div>
                      </div>
                      <span>Envoyer</span>
                    </button>
                  </div>
                  
                </form>
              </div>
              
            </div>

            <div className="right">

            </div>
            
          </div>
        </section>
      </main>
    </div>
  )
}

export default Contact
