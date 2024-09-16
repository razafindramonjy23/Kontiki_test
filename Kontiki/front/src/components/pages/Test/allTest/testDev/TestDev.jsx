import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const InputField = ({ label, type, name, onChange }) => (
  <div>
    <label>{label}</label>
    <br />
    <input type={type} name={name} onChange={onChange} />
  </div>
);

const TextareaField = ({ label, name, onChange }) => (
  <div>
    <label>{label}</label>
    <br />
    <textarea name={name} onChange={onChange}></textarea>
  </div>
);

const FormSection = ({ id, title, icon, fields, isActive, onChange }) => {
  
  return (
  <div className={id} style={{ display: isActive ? "block" : "none" }}>
    <div className="bg-svg">
      <img width="96" height="96" src={icon} alt={title} />
    </div>
    <h2>{title}</h2>
    {fields.map((field, index) => (
      field.type === "textarea" ? (
        <TextareaField key={index} label={field.label} required name={`question_${field.id}`} onChange={onChange} />
      ) : (
        <InputField key={index} label={field.label} type={field.type} required name={`question_${field.id}`} onChange={onChange} />
      )
    ))}
  </div>
)};

const ProgressSteps = ({ steps, activeStep }) => (
  <div className="progress">
    <ul className="progress-steps">
      {steps.map((step, index) => (
        <li key={index} className={`step ${index === activeStep ? "active" : ""}`}>
          <span>{index + 1}</span>
          <p>{step.title} </p>
        </li>
      ))}
    </ul>
  </div>
);

const Presentation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Information Personnel
    nom: '',
    prenom: '',
    age: '',
    situation_matrimoniale: '',
    adresse_actuelle: '',
    numero_telephone: '',
    adresse_email: '',

    // Savoir Formation
    poste_envisage: '',
    formations_suivies: '',
    dernier_travail: '',
    satisfaction_carriere: '',
    exemples_realisations: '',

    // Ponctualité
    respect_horaires: '',
    retard_justifie: '',
    ponctualite_globale: '',

    // Ténacité
    perseverance: '',
    resistance_aux_obstacles: '',
    gestion_stress: '',

    // Intégration
    esprit_equipe: '',
    collaboration: '',
    relations_avec_collegues: '',

    // Sens du Service
    ecoute_client: '',
    satisfaction_client: '',
    service_apres_vente: '',

    // Autonomie
    prise_initiative: '',
    travail_independant: '',
    gestion_taches: '',

    // Organisation
    planification: '',
    respect_des_deadlines: '',
    organisation_globale: '',

    // Satisfaction
    satisfaction_generale: '',
    commentaires_suggestions: '',

    // Test Technique Python
    python_experience: '',
    python_projets_realises: '',
    python_niveau_competence: '',

    // Test Technique JavaScript
    javascript_experience: '',
    javascript_projets_realises: '',
    javascript_niveau_competence: '',

    // Test Technique Fullstack
    fullstack_experience: '',
    fullstack_projets_realises: '',
    fullstack_niveau_competence: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const structuredData = {
      information_personnel: {
        nom: formData.nom,
        prenom: formData.prenom,
        age: formData.age,
        situation_matrimoniale: formData.situation_matrimoniale,
        adresse_actuelle: formData.adresse_actuelle,
        numero_telephone: formData.numero_telephone,
        adresse_email: formData.adresse_email,
      },
      savoir_formation: {
        poste_envisage: formData.poste_envisage,
        formations_suivies: formData.formations_suivies,
        dernier_travail: formData.dernier_travail,
        satisfaction_carriere: formData.satisfaction_carriere,
        exemples_realisations: formData.exemples_realisations,
      },
      ponctualite: {
        respect_horaires: formData.respect_horaires,
        retard_justifie: formData.retard_justifie,
        ponctualite_globale: formData.ponctualite_globale,
      },
      tenacite: {
        perseverance: formData.perseverance,
        resistance_aux_obstacles: formData.resistance_aux_obstacles,
        gestion_stress: formData.gestion_stress,
      },
      integration: {
        esprit_equipe: formData.esprit_equipe,
        collaboration: formData.collaboration,
        relations_avec_collegues: formData.relations_avec_collegues,
      },
      sens_du_service: {
        ecoute_client: formData.ecoute_client,
        satisfaction_client: formData.satisfaction_client,
        service_apres_vente: formData.service_apres_vente,
      },
      autonomie: {
        prise_initiative: formData.prise_initiative,
        travail_independant: formData.travail_independant,
        gestion_taches: formData.gestion_taches,
      },
      organisation: {
        planification: formData.planification,
        respect_des_deadlines: formData.respect_des_deadlines,
        organisation_globale: formData.organisation_globale,
      },
      satisfaction: {
        satisfaction_generale: formData.satisfaction_generale,
        commentaires_suggestions: formData.commentaires_suggestions,
      },
      test_technique_python: {
        python_experience: formData.python_experience,
        python_projets_realises: formData.python_projets_realises,
        python_niveau_competence: formData.python_niveau_competence,
      },
      test_technique_javascript: {
        javascript_experience: formData.javascript_experience,
        javascript_projets_realises: formData.javascript_projets_realises,
        javascript_niveau_competence: formData.javascript_niveau_competence,
      },
      test_technique_fullstack: {
        fullstack_experience: formData.fullstack_experience,
        fullstack_projets_realises: formData.fullstack_projets_realises,
        fullstack_niveau_competence: formData.fullstack_niveau_competence,
      },
    };


    try {
      const response = await fetch('http://127.0.0.1:8000/api/submit_responses/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(structuredData),
      });

      //  if (!response.ok) {
      //    const errorText = await response.json(); // ou response.json() si le backend renvoie une réponse JSON
      //    throw new Error(`Erreur lors de la soumission des réponses : ${errorText}`);
      //  } 

      const data = await response.json();
      console.log('Réponses soumises avec succès:', data);
       alert('Réponses soumises avec succès !');
    } catch (error) {
      console.error('Erreur lors de la soumission :', error);
       alert('Erreur lors de la soumission.');
    }
  };


  const btnSuivant = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const btnPrecedent = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const steps = [
    {
      id: "form1",
      title: "Information personnel",
      icon: "https://img.icons8.com/3d-fluency/94/user-male-circle.png",
      fields: [
        { label: "Nom", type: "text" },
        { label: "Prenom", type: "text" },
        { label: "Age", type: "text" },
        { label: "Situation matrimoniale", type: "text" },
        { label: "Adresse actuelle", type: "text" },
        { label: "Numéro de téléphone", type: "text" },
        { label: "Adresse e-mail", type: "email" }
      ]
    },
    {
      id: "form2",
      title: "SAVOIR-FORMATION",
      icon: "https://img.icons8.com/color/96/reading.png",
      fields: [
        { label: "Poste envisagée chez KONTIKI et qu'est-ce qui vous attire, dans le poste proposé?", type: "textarea" },
        { label: "Avez-vous suivi des formations ou vous êtes vous renseignés sur le poste si oui, racontez nous", type: "textarea" },
        { label: "Quel est le dernier travai que vous avez occupé? Combien de temps? Et la raison pour laquelle vous avez quitté votre dernier emploi.", type: "textarea" },
        { label: "Etes-vous aujourd'hui satisfait de votre carrière?", type: "textarea" },
        { label: "Pouvez-vous nous donner quelques exemples de réalisations?", type: "textarea" }
      ]
    },
    {
      id: "form3",
      title: "PONCTUALITE",
      icon: "https://img.icons8.com/external-vectorslab-flat-vectorslab/53/external-Punctuality-business-presentations-and-meetings-vectorslab-flat-vectorslab.png",
      fields: [
        { label: "La dernière fois que vous êtes arrivé en retard, comment avez-vous géré la sitation?", type: "textarea" },
        { label: "Selon vous, à partir de combien de temps êtes-vous en retard?", type: "textarea" }
      ]
    },
    {
      id: "form4",
      title: "TENACITE",
      icon: "https://img.icons8.com/color/96/courage.png",
      fields: [
        { label: "Racontez-nous la dernière fois où vous avez été confroné à une difficulté en situation professionnelle. Qu'avez-vous fait? Comment avez-vous réagi?", type: "textarea" },
        { label: "Dans vos expériences professionnelle, quelles ont été les activités les plus difficiles à réaliser pour vous?", type: "textarea" },
        { label: "Donnez-moi un exemple de situation où votre travail a été critiqué", type: "textarea" },
        { label: "Donnez-moi un exemple de situation professionnelle où vous avez dû faire face à un conflit d'intérêts.", type: "textarea" }
      ]
    },
    {
      id: "form5",
      title: "INTEGRATION",
      icon: "https://img.icons8.com/arcade/64/onboarding.png",
      fields: [
        { label: "Avec quels types de personnes aimez-vous le mieux travailler? Pour quel raisons?", type: "textarea" },
        { label: "Un collègue vous fait une remarque négative sur la qualité de votre travail. Comment réagissez-vous?", type: "textarea" },
        { label: "Avez-vous déjà été dépassé par la situation? Donnez-moi un exemple.", type: "textarea" }
      ]
    },
    {
      id: "form6",
      title: "SENS DU SERVICE",
      icon: "https://img.icons8.com/fluency/96/service.png",
      fields: [
        { label: "Vous êtes salarié de notre société, affecté au département DEVELOPPEUR. Ce matin vous êtes occupé dans une tâche urgente et importante. L'un de vos collègues va vers vous et se plaint vivement auprès de vous, car il est en retard sur son travail parce que son ordi a des soucis (la connexion internet ne marche pas). Quelle est votre réaction?", type: "textarea" },
        { label: "Vous remarquez quil y a une tâche qui est pas faite et pourtant cette tâche ne fait pas partie de votre fiche de poste. Que faites-vous?", type: "textarea" },
        { label: "Avez-vous l'esprit d'initiative? Prouvez-le à l'aIde d'exemples.", type: "textarea" }
      ]
    },
    {
      id: "form7",
      title: "AUTONOMIE",
      icon: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-autonomy-gig-economy-flaticons-flat-flat-icons.png",
      fields: [
        { label: "Avez-vous déjà travaillé seul? Qu'est-ce que vous avez trouvé difficile?", type: "textarea" },
        { label: "Le client vous demande un travail non prévu sur votre fiche de poste? Que faites-vous?", type: "textarea" }
      ]
    },
    {
      id: "form8",
      title: "ORGANISATION",
      icon: "https://img.icons8.com/officel/80/making-notes.png",
      fields: [
        { label: "Vous arrivez au bureau. Que faites-vous en premier? Comment vous organisez-vous?", type: "textarea" }
      ]
    },
    {
      id: "form9",
      title: "SATISFACTION",
      icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-satisfaction-web-store-flaticons-lineal-color-flat-icons-3.png",
      fields: [
        { label: "Quelles ont été vos satisfactions dans les postes que vous avez occupés?", type: "textarea" },
        { label: "Quel serait le poste Idéal pour vous?", type: "textarea" },
        { label: "Si on vous propose le même salaire et le même nombre d\"heures, entre deux entreprises, laquelle choisissez-vous?", type: "textarea" },
        { label: "Quand avez-vous senti dans vos précédents postes que vous avez été bien traité?", type: "textarea" },
        { label: "Quand avez-vous senti dans vos précédents postes que vous avez été bien rémunéré?", type: "textarea" },
        { label: "Est-ce un problème si l'on vous demande de travailler le soir et/ou le week-end?", type: "textarea" },
        { label: "Quelle compétence pouvez-vous apporter à cette entreprise?", type: "textarea" }
      ]
    },
    {
      id: "form10",
      title: "TEST TECHNIQUE-Python",
      icon: "",
      fields: [
        { label: "Expliquez brièvement le processus d'exécution d'un fichier Python", type: "textarea" },
        { label: "Nous savons que Python est un langage orienté objet, mais a-t-il des spécificateurs d'accès ?", type: "textarea" },
        { label: "Quand devez-vous utiliser la copie superficielle au lieu de la copie profonde, et vice versa ?", type: "textarea" },
        { label: "Expliquez l'utilisation de décorateurs en Python. Donnez un exemple pratique de situation où vous utiliseriez un décorateur.", type: "textarea" },
        { label: "Comment gérer les exceptions de manière robuste en Python? Donnez des exemples de situations où les exceptions seraient appropriées", type: "textarea" },
        { label: "Pouvez-vous expliquer comment une exception peut être attrapée dans un programme Python ?", type: "textarea" },
        { label: "Décrivez les différences entre le threading et le multiprocessing en Python. Quand choisiriez-vous l'un par rapport à l'autre?", type: "textarea" }
      ]
    },
    {
      id: "form11",
      title: "TEST TECHNIQUE-Javascript",
      icon: "",
      fields: [
        { label: "Comparez les avantages et les inconvénients des états locaux (local state) et des états gérés globalement (global state) dans une application Vue.js ou React.js.", type: "textarea" },
        { label: "Créez un composant fonctionnel nommé UserList qui reçoit une liste d'utilisateurs en tant que prop et affiche leurs noms dans une liste. Assurez-vous que le composant met à jour correctement le state avec la liste d'utilisateurs. (* sur vscode)", type: "textarea" },
        { label: "Créez un composant parent nommé App qui contient le state avec une liste initiale d'utilisateurs. Ce composant doit rendre le composant UserList créé précédemment et un nouveau composant UserForm qui permet d'ajouter un nouvel utilisateur à la liste. (* sur vscode)", type: "textarea" },
        { label: "Implémentez le composant UserForm avec un formulaire simple qui permet à l'utilisateur de saisir un nom. Lorsque le formulaire est soumis, ajoutez un nouvel utilisateur à la liste dans le state du composant parent (App). Assurez-vous que le state est mis à jour correctement. (* sur vscode)", type: "textarea" },
      ]
    },
    {
      id: "form12",
      title: "TEST TECHNIQUE-Fullstack",
      icon: "",
      fields: [
        { label: "Mettez en place une route côté serveur (Django, Flask) qui renvoie une liste d'utilisateurs au format JSON. La liste d'utilisateurs peut être stockée dans un fichier json. (* sur vscode)", type: "textarea" },
        { label: "Comment optimisez-vous les requêtes vers une base de données pour améliorer les performances d'une application? Parlez de l'indexation, du caching, ou d'autres stratégies que vous avez déjà mise en œuvre dans vos expériences.", type: "textarea" },
        { label: "Décrivez le processus de déploiement d'une application fullstack, en mettant l'accent sur les bonnes pratiques. Parlez de l'utilisation d'outils tels que Docker, Kubernetes, ou autres, selon votre expérience.", type: "textarea" },
      ]
    }
  ];

  return (
    <div id="page" className="site font-sans">
      <div className="container">
        <div className="form-box">
          <ProgressSteps steps={steps} activeStep={activeStep} />

          <form onSubmit={handleSubmit} className="formulaire">
            {steps.map((step, index) => (
              <FormSection
                key={step.id}
                id={step.id}
                title={step.title}
                icon={step.icon}
                fields={step.fields}
                isActive={index === activeStep}
                onChange={handleChange}
              />
            ))}

            <div className="btn-group">
              <button
                type="button"
                className="btn-retour mx-auto px-8 py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100 bg-blue-500"
                onClick={btnPrecedent}
                disabled={activeStep === 0}
              >
                Retour
              </button>

              {activeStep < steps.length - 1 && (
                <button
                  type="button"
                  className="btn-suivant mx-auto px-8 py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100 bg-blue-500"
                  onClick={btnSuivant}
                  disabled={activeStep === steps.length - 1}
                >
                  Suivant
                </button>
              )}

              {activeStep === steps.length - 1 && (
                <>
                  <button
                    type="submit"
                    className="btn-envoyer mx-auto px-8 py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100 bg-blue-500"
                    onClick={handleSubmit}
                  >
                    Envoyer
                  </button>

                  <button
                    type="button"
                    className="btn-code-editor mx-auto px-8 py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100 bg-blue-500"
                    onClick={() => navigate('/codeEditor')}
                  >
                    Teste technique
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
