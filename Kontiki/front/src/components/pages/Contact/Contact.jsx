import React from 'react'
import './Contact.css';

function Contact() {

  const inputs = document.querySelectorAll(".contact-input");

  inputs.forEach((ipt) => {
    ipt.addEventListener("focus", () =>{
      ipt.parentNode.classList.add("focus");
      ipt.parentNode.classList.add("not-empty");
    });

    ipt.addEventListener("blur", () =>{
      if (ipt.value == ""){
        ipt.parentNode.classList.remove("not-empty");
      }
      ipt.parentNode.classList.remove("focus");
    });
  });

  return (
    <div>
      <main>
        <section className='contact'>
          <div className="container">
            <div className="left">
              <div className="form-wrapper">
                <div className="contact-heading">
                  <h1>Travaillons ensembles<span>.</span></h1>
                  <p className="texte">Ou Contactez-nous via : <a href="malto:emailKTK@gmail.com">emailKTK@gmail.com</a></p>
                </div>

                <form action="#" className="contact-form" method='post'>
                  <div className="input-wrap">
                    <input type="text" className="contact-input" required name='nom' autoComplete='off'/>
                    <label>Nom</label>
                    <img width="35" height="35" src="https://img.icons8.com/pastel-glyph/64/000000/name.png" alt="name"  className='icon'/>
                  </div>

                  <div className="input-wrap">
                    <input type="text" className="contact-input" required name='prenom' autoComplete='off'/>
                    <label>Prenom</label>
                    <img width="35" height="35" src="https://img.icons8.com/pastel-glyph/64/000000/name.png" alt="name" className='icon'/>
                  </div>

                  <div className="input-wrap w-100">
                    <input type="email" className="contact-input" required name='Email' autoComplete='off'/>
                    <label>Email</label>
                    <img width="35" height="35" src="https://img.icons8.com/ios/50/circled-envelope.png" alt="circled-envelope" className='icon'/>
                  </div>

                  <div className="input-wrap textarea w-100">
                    <textarea name="Message" autoComplete='off' id="" className='contact-input' required></textarea>
                    <label>Message</label>
                    <img width="35" height="35" src="https://img.icons8.com/ios/50/chat-message--v1.png" alt="chat-message--v1" className='icon'/>
                  </div>

                  <div className="contact-buttons w-100">
                    <button className="btn upload">
                      Envoyer message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="right"></div>
          </div>

        </section>
      </main>
    </div>
  )
}

export default Contact
