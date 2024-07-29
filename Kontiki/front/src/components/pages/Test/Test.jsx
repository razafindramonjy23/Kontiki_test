import React from 'react'
import { Link } from 'react-router-dom'
import '../../../App.scss'

function Presentation() {


  return (
    <div id='page' className='site'>
      <div className="container">

        <div className="form-box">
          <div className="progress">
            <ul className='progress-steps'>
              <li className="step active">
                <span>1</span>
                <p>Information personnel <br /> 1 minutes pour repondre</p>
              </li>

              <li className="step">
                <span>2</span>
                <p>Savoir-Formation<br /> 1 minutes pour repondre</p>
              </li>

              <li className="step">
                <span>3</span>
                <p>Ponctualité<br /> 1 minutes pour repondre</p>
              </li>
            </ul>
          </div>

          <form action="">
            <div className="form1 form-step ">
              <div className="bg-svg"><img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="user-male-circle" /></div>
              <h2>Information personnel</h2>
              <div>
                <label>Nom</label>
                <input type="text" placeholder='exemple: Rakoto' />
              </div>

              <div>
                <label>Prenom</label>
                <input type="text" placeholder='exemple: Pierre' />
              </div>

              <div>
                <label>Age</label>
                <input type="text" placeholder='Votre age' />
              </div>


              <div>
                <label>Situation matrimoniale</label>
                <input type="text" placeholder='ex: Célibataire' />
              </div>

              <div>
                <label>Adresse actuelle</label>
                <input type="text" placeholder='Votre adresse' />
              </div>


              <div>
                <label>Numéro de téléphone</label>
                <input type="nomber" placeholder='Votre numéro' />
              </div>

              <div>
                <label>Adresse e-mail</label>
                <input type="email" placeholder='e-mail valide' />
              </div>
            </div>
          </form>

          <form action="" className="form2">
            <div className="bg-svg"><img width="96" height="96" src="https://img.icons8.com/color/96/reading.png" alt="reading" /></div>
            <h2>SAVOIR-FORMATION</h2>

            <div>
              <label>
                Poste envisagée chez KONTIKI et qu'est-ce qui vous attire, dans le poste proposé?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Avez-vous suivi des formations ou vous êtes vous renseignés sur le poste si oui, racontez nous
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Quel est le dernier travai que vous avez occupé? <br />
                Combien de temps? Et la raison pour laquelle vous avez quitté votre dernier emploi.
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Etes-vous aujourd'hui satisfait de votre carrière?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Pouvez-vous nous donner quelques exemples de réalisations?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>
          </form>

          <form action="" className='form3'>
            <div className="bg-svg"><img width="96" height="96" src="https://img.icons8.com/external-vectorslab-flat-vectorslab/53/external-Punctuality-business-presentations-and-meetings-vectorslab-flat-vectorslab.png" alt="external-Punctuality-business-presentations-and-meetings-vectorslab-flat-vectorslab" /></div>
            <h2>PONCTUALITE: </h2>

            <div>
              <label>
                La dernière fois que vous êtes arrivé en retard, comment avez-vous géré la sitation?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Selon vous, à partir de combien de temps êtes-vous en retard?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>
          </form>

          <form action="" className="form4">
            <div className="bg-svg"><img width="96" height="96" src="https://img.icons8.com/color/96/courage.png" alt="courage" /></div>
            <h2>TENACITE</h2>

            <div>
              <label>
                Racontez-nous la dernière fois où vous avez été confroné à une difficulté
                en situation professionnelle. <br />
                Qu'avez-vous fait? Comment avez-vous réagi?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Dans vos expériences professionnelle, quelles ont été les activités les pls difficiles à réalise pour vous?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Donnez-moi un exemple de situation où votre travail a été critiqué
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Donnez-moi un exemple de situation professionnelle où vous avez dû faire face à un conflit d'intérêts.
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>
          </form>


          <form action="" className="form4">
            <div className="bg-svg"><img width="64" height="64" src="https://img.icons8.com/arcade/64/onboarding.png" alt="onboarding" /></div>
            <h2>CAPACITE D'INTEGRATION: </h2>

            <div>
              <label>
                Avec quels types de personnes aimez-vous le mieux travailler? Pour quel raisons?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Un collègue vous fait une remarque négative sur la qualité de votre travail.Comment réagissez-vous?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Avez-vous déjà été dépassé par la situation? Donnez-moi un exemple.
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>
          </form>

          <form action="" className="form4">
            <div className="bg-svg"><img width="96" height="96" src="https://img.icons8.com/fluency/96/service.png" alt="service" /></div>
            <h2>SENS DU SERVICE</h2>

            <div>
              <label>
                Vous êtes salarié de notre société, affecté au département DEVELOPPEUR. <br />
                Ce matin vous êtes occupé dans une tâche urgente et importante. L'un de vous collègues va vers vous
                et se plaint vivement auprès de vous, car il est en retard sur son travail parce que son ordi a des soucis (la connexion internet ne marche pas). <br />
                Quelle est votre réaction?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Vous remarquez qu'il y a une tâche qui est pas faite et pourtant cette tâche ne fait pas partie de votre fiche de poste. Que faites-vous?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Avez-vous l'esprit d'initiative? Prouvez-le à l'aide d'exemples.
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>
          </form>

          <form action="" className="form4">
            <div className="bg-svg"><img width="64" height="64" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-autonomy-gig-economy-flaticons-flat-flat-icons.png" alt="external-autonomy-gig-economy-flaticons-flat-flat-icons" /></div>
            <h2>AUTONOMIE</h2>

            <div>
              <label>
                Avez-vous déjà travaillé seul? Qu'est-ce que vous avez trouvé difficile?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Le client vous demande un travail non prévu sur votre fiche de poste? Que faites-vous?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>
          </form>



          <form action="" className="form4">
            <div className="bg-svg"><img width="80" height="80" src="https://img.icons8.com/officel/80/making-notes.png" alt="making-notes"/></div>
            <h2>ORGANISATION</h2>

            <div>
              <label>
                Vous arrivez au bureau. Que faites-vous en premier? Comment vous organisez-vous?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>
          </form>


          <form action="" className="form4">
            <div className="bg-svg"><img width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-satisfaction-web-store-flaticons-lineal-color-flat-icons-3.png" alt="external-satisfaction-web-store-flaticons-lineal-color-flat-icons-3"/></div>
            <h2>SATISFACTION</h2>

            <div>
              <label>
                Quelles ont été vos satisfactions dans les postes que vous avez occupés?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Quel serait le poste idéal pour vous?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Si on vous propose le même salaire et le même nombre d'heure, entre deux entreprises, laquelle choisissez-vous
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Quand avez vous senti dans vos précédents postes que vous avez été bien traité?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Quand avez vous senti dans vos précédents postes que vous avez été bien rémunéré?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Est-ce un problème si l'on vous demande de travailler le soir et/ou le week-end?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div>
              <label>
                Quell compétence pouvez-vous apporter à cette entreprise?
              </label>
              <br />
              <textarea name="" ></textarea>
            </div>

            <div className="btn-group">
              <button type='button' className='btn-retour'>Retour</button>
              <button type='button' className='btn-suivant'>Suivant</button>
            </div>
          </form>

        </div>


      </div>
    </div>
  )
}

export default Presentation
