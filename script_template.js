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
    
    // Projects (solo los que cambian)
    project7: "Personal web page",
    project8: "Tools to calculate RF power budget",
    
  },
  es: {
    roles: "",
    student: "",
    contact: "",
    about: "",
    experience: "",
    projects: "",
    skills: "",
    education: "",
    languages: "",
    strengths: "",
    certifications: "",
    learning: "",
    year: "",
    project: "",
    company: "",
    tech: "",
    technology: "",
    proficiency: "",
    
    expTitle1: "",
    expDate1: "",
    expTitle2: "",
    expDate2: "",
    
    about1: "",
    about2: "",
    about3: "",
    
    project7: "",
    project8: "",

  },
  fr: {
    roles: "",
    student: "",
    contact: "",
    about: "",
    experience: "",
    projects: "",
    skills: "",
    education: "",
    languages: "",
    strengths: "",
    certifications: "",
    learning: "",
    year: "",
    project: "",
    company: "",
    tech: "",
    technology: "",
    proficiency: "",
    
    expTitle1: "",
    expDate1: "",
    expTitle2: "",
    expDate2: "",
    
    about1: "",
    about2: "",
    about3: "",
    
    project7: "",
    project8: "",

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

  // Proyectos específicos (opcional; en realidad ya están cubiertos por el forEach si sus IDs coinciden)
  ['project7','project8'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = translations[lang][id];
  });
}

// Inicializar en inglés
document.addEventListener('DOMContentLoaded', () => {
  changeLanguage('en');
});
