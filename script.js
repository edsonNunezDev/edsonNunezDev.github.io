const translations = {
  en: {
    roles: "💻 Electronic Engineer | 📊 AI and ML Engineer",
    student: "🧑‍🎓 Self‑taught student aspiring AI, ML and DB Engineer",
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
    expTitle1: "Electronic Engineer",
    expDate1: "2006 – 2012",
    expTitle2: "RF and Microwave Engineer",
    expDate2: "2013 – 2014",
    
    // About texts
    about1: "Hi,",
    about2: " I’m a young person (at least in spirit) full of energy and eager to take on different kinds of projects to learn about emerging AI-related technologies.",
    about3: "I also want to develop useful applications that make it easier to understand and learn complex concepts.",
    
    // Projects
    project7: "Personal web page",
    project8: "Tools to calculate RF power budget",
    
  },
  es: {
    roles: "💻 Ingeniero Electrónico | 📊 Ingeniero de IA y ML",
    student: "🧑‍🎓 Estudiante autodidacta aspirante a ingeniero de IA, ML y bases de datos",
    contact: "Contacto",
    about: "Sobre mí",
    experience: "Experiencia laboral",
    projects: "Proyectos",
    skills: "Lenguajes y tecnologías",
    education: "Educación",
    languages: "Idiomas",
    strengths: "Fortalezas",
    certifications: "Certificaciones",
    learning: "Actualmente aprendiendo",
    year: "Año",
    project: "Proyecto",
    company: "Empresa",
    tech: "Tecnologías",
    technology: "Tecnología",
    proficiency: "Dominio",
    
    expTitle1: "Ingeniero Electrónico",
    expDate1: "2006 – 2012",
    expTitle2: "Ingeniero de RF y Microondas",
    expDate2: "2013 – 2014",
    
    about1: "Hola,",
    about2: " soy una persona joven (al menos en espíritu), llena de energía y con muchas ganas de emprender distintos tipos de proyectos para aprender sobre tecnologías emergentes relacionadas con la IA.",
    about3: "También quiero desarrollar aplicaciones útiles que faciliten la comprensión y el aprendizaje de conceptos complejos.",
    
    project7: "Página web personal",
    project8: "Herramientas para calcular el presupuesto de potencia RF",

  },
  fr: {
    roles: "💻 Ingénieur électronique | 📊 Ingénieur en IA et ML",
    student: "🧑‍🎓 Étudiant autodidacte aspirant ingénieur en IA, ML et bases de données",
    contact: "Contact",
    about: "À propos de moi",
    experience: "Expérience professionnelle",
    projects: "Projets",
    skills: "Langages et technologies",
    education: "Formation",
    languages: "Langues",
    strengths: "Forces",
    certifications: "Certifications",
    learning: "En cours d’apprentissage",
    year: "Année",
    project: "Projet",
    company: "Entreprise",
    tech: "Technologies",
    technology: "Technologie",
    proficiency: "Maîtrise",
    
    expTitle1: "Ingénieur électronique",
    expDate1: "2006 – 2012",
    expTitle2: "Ingénieur RF et micro-ondes",
    expDate2: "2013 – 2014",
    
    about1: "Salut,",
    about2: " je suis une personne jeune (au moins d’esprit), pleine d’énergie et désireuse de réaliser différents types de projets pour découvrir les technologies émergentes liées à l’IA.",
    about3: "Je souhaite aussi développer des applications utiles qui facilitent la compréhension et l’apprentissage de concepts complexes.",
    
    project7: "Page web personnelle",
    project8: "Outils pour calculer le budget de puissance RF",

  }
};

function changeLanguage(lang) {
  document.documentElement.lang = lang;
  document.getElementById('lang-select').value = lang;

  Object.keys(translations[lang]).forEach(key => {
    const element = document.getElementById(key) || document.querySelector(`[data-i18n="${key}"]`);
    if (element) {
      element.textContent = translations[lang][key];
    }
  });

  ['project7','project8'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = translations[lang][id];
  });
}

document.addEventListener('DOMContentLoaded', () => {
  changeLanguage('en');
});
