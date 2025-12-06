const translations = {
  en: {
    roles: "💻 Electronic Engineer | 📊 ML Engineer | 📹 Machine Vision Engineer",
    student: "🧑‍🎓 Student at Udemy and Platziy",
    contact: "Contact",
    about: "About Me",
    experience: "Work Experience",
    projects: "Projects",
    skills: "Languages and Technologies",
    education: "Education",
    languages: "Languages",
    strengths: "Strengths",
    certifications: "Certifications",
    learning: "Currently Learning",
    year: "Year",
    project: "Project",
    company: "Company",
    tech: "Technologies",
    technology: "Technology",
    proficiency: "Proficiency",
    
    // Experience titles and dates
    expTitle1: "Software Engineer",
    expDate1: "Mexico City | Jun 2015 – Jan 2025",
    expTitle2: "Software Engineer",
    expDate2: "Mexico City | Apr 2013 – May 2015",
    expTitle3: "Visiting Researcher",
    expDate3: "Móstoles, Spain | Jan – Apr 2012",
    expTitle4: "Computer Teacher",
    expDate4: "Cuautla, Morelos | Aug 2009 – Feb 2011",
    expTitle5: "Programming Resident",
    expDate5: "Cuautla, Morelos | Nov 2008 – May 2009",
    
    // About texts
    about1: "N/A",
    about2: "N/A",
    about3: "N/A",
    
    // Projects (solo los que cambian)
    project7: "People Detection and Tracking in Department Stores",
    project8: "Vehicle Detection, Tracking and Speed Estimation on Highways",
    project9: "License Plate Recognition",
    project10: "OCR with Neural Network",
    project11: "Suspicious Movements",
    project12: "Environmental and Medical Management"
  },
  es: {
    roles: "💻 Ingeniero de Software | 📊 ML Engineer | 📹 Machine Vision Engineer",
    student: "🧑‍🎓 Estudiante en Udemy, Platzi, LinkedIn Learning y Santander Open Academy",
    contact: "Contacto",
    about: "Sobre mí",
    experience: "Experiencia Laboral",
    projects: "Proyectos",
    skills: "Lenguajes y Tecnologías",
    education: "Educación",
    languages: "Idiomas",
    strengths: "Fortalezas",
    certifications: "Certificaciones",
    learning: "Actualmente Aprendiendo",
    year: "Año",
    project: "Proyecto",
    company: "Empresa",
    tech: "Tecnologías",
    technology: "Tecnología",
    proficiency: "Dominio",
    
    expTitle1: "Ingeniero de Software",
    expDate1: "Ciudad de México | Jun 2015 – Ene 2025",
    expTitle2: "Ingeniero de Software",
    expDate2: "Ciudad de México | Abr 2013 – May 2015",
    expTitle3: "Investigador Visitante",
    expDate3: "Móstoles, España | Ene – Abr 2012",
    expTitle4: "Profesor de Computación",
    expDate4: "Cuautla, Morelos | Ago 2009 – Feb 2011",
    expTitle5: "Residente Programador",
    expDate5: "Cuautla, Morelos | Nov 2008 – May 2009",
    
    about1: "N/A",
    about2: "N/A",
    about3: "N/A",
    
    project7: "Detección y seguimiento de personas en tiendas departamentales",
    project8: "Detección, seguimiento y estimación de velocidad de autos en carretereas",
    project9: "Reconocimiento de placas",
    project10: "OCR con Red Neuronal",
    project11: "Movimientos Sospechosos",
    project12: "Gestión ambiental y médica"
  },
  fr: {
    roles: "💻 Ingénieur Logiciel | 📊 Ingénieur ML | 📹 Ingénieur Vision Machine",
    student: "🧑‍🎓 Étudiant sur Udemy, Platzi, LinkedIn Learning et Santander Open Academy",
    contact: "Contact",
    about: "À propos",
    experience: "Expérience Professionnelle",
    projects: "Projets",
    skills: "Langages et Technologies",
    education: "Formation",
    languages: "Langues",
    strengths: "Forces",
    certifications: "Certifications",
    learning: "En cours d'apprentissage",
    year: "Année",
    project: "Projet",
    company: "Entreprise",
    tech: "Technologies",
    technology: "Technologie",
    proficiency: "Maîtrise",
    
    expTitle1: "Ingénieur Logiciel",
    expDate1: "Mexico | Juin 2015 – Jan 2025",
    expTitle2: "Ingénieur Logiciel",
    expDate2: "Mexico | Avr 2013 – Mai 2015",
    expTitle3: "Chercheur Visiteur",
    expDate3: "Móstoles, Espagne | Jan – Avr 2012",
    expTitle4: "Professeur d'Informatique",
    expDate4: "Cuautla, Morelos | Août 2009 – Février 2011",
    expTitle5: "Résident Programmeur",
    expDate5: "Cuautla, Morelos | Nov 2008 – Mai 2009",
    
    about1: "N/A",
    about2: "N/A",
    about3: "N/A",
    
    project7: "Détection et suivi des personnes en grands magasins",
    project8: "Détection, suivi et estimation de vitesse des véhicules sur autoroutes",
    project9: "Reconnaissance de plaques",
    project10: "OCR avec Réseau de Neurones",
    project11: "Mouvements Suspects",
    project12: "Gestion environnementale et médicale"
  }
};

function changeLanguage(lang) {
  document.documentElement.lang = lang;
  document.getElementById('lang-select').value = lang;
  
  // Actualizar todos los elementos traducibles
  Object.keys(translations[lang]).forEach(key => {
    const element = document.getElementById(key) || document.querySelector(`[data-${lang}="${key}"]`);
    if (element) {
      if (element.hasAttribute(`data-${lang}`)) {
        element.textContent = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  
  // Actualizar proyectos específicos
  ['project7','project8','project9','project10','project11','project12'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = translations[lang][id];
  });
}

// Inicializar en inglés
document.addEventListener('DOMContentLoaded', () => {
  changeLanguage('en');
});
