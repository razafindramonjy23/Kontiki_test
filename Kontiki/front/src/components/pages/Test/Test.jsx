import React, { useState } from "react";
import "../../../App.scss";

const InputField = ({ label, type }) => (
  <div>
    <label>{label}</label>
    <br />
    <input type={type} name={label} />
  </div>
);

const TextareaField = ({ label }) => (
  <div>
    <label>{label}</label>
    <br />
    <textarea name={label}></textarea>
  </div>
);

const FormSection = ({ id, title, icon, fields, isActive }) => (
  <div className={id} style={{ display: isActive ? "block" : "none" }}>
    <div className="bg-svg">
      <img width="96" height="96" src={icon} alt={title} />
    </div>
    <h2>{title}</h2>
    {fields.map((field, index) => (
      field.type === "textarea" ? (
        <TextareaField key={index} label={field.label} />
      ) : (
        <InputField key={index} label={field.label} type={field.type} />
      )
    ))}
  </div>
);

const ProgressSteps = ({ steps, activeStep }) => (
  <div className="progress">
    <ul className="progress-steps">
      {steps.map((step, index) => (
        <li key={index} className={`step ${index === activeStep ? "active" : ""}`}>
          <span>{index + 1}</span>
          <p>{step.title} <br /> 1 min</p>
        </li>
      ))}
    </ul>
  </div>
);

const Presentation = () => {
  const [activeStep, setActiveStep] = useState(0);

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
        { label: "Poste envisagée chez KONTIKI et qu'est-ce qui vous attire, dans le poste proposé?", type: "textarea"},
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
        { label: "Avez-vous l'esprit d'initiative? Prouvez-le à l'aide d'exemples.", type: "textarea" }
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
        { label: "Quel serait le poste idéal pour vous?", type: "textarea" },
        { label: "Si on vous propose le même salaire et le même nombre d\"heures, entre deux entreprises, laquelle choisissez-vous?", type: "textarea" },
        { label: "Quand avez-vous senti dans vos précédents postes que vous avez été bien traité?", type: "textarea" },
        { label: "Quand avez-vous senti dans vos précédents postes que vous avez été bien rémunéré?", type: "textarea" },
        { label: "Est-ce un problème si l'on vous demande de travailler le soir et/ou le week-end?", type: "textarea" },
        { label: "Quelle compétence pouvez-vous apporter à cette entreprise?", type: "textarea" }
      ]
    }
  ];

  return (
    <div id="page" className="site">
      <div className="container">
        <div className="form-box">
          <ProgressSteps steps={steps} activeStep={activeStep} />

          <form action="" className="formulaire">
            {steps.map((step, index) => (
              <FormSection
                key={step.id}
                id={step.id}
                title={step.title}
                icon={step.icon}
                fields={step.fields}
                isActive={index === activeStep}
              />
            ))}

            <div className="btn-group">
              <button type="button" className="btn-retour" onClick={btnPrecedent} disabled={activeStep === 0}>Retour</button>
              <button type="button" className="btn-suivant" onClick={btnSuivant} disabled={activeStep === steps.length - 1}>Suivant</button>
              <button type="button" className="btn-envoyer">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
