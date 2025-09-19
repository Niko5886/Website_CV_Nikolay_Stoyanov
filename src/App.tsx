import React, { useState } from 'react';
import { User, Code, Briefcase, Mail, Github, Linkedin, ExternalLink, ChevronDown, Award, Calendar, MapPin, Phone, Download, Star, Trophy, AlignCenterVertical as Certificate } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'HTML5', level: 90, category: 'Frontend' },
    { name: 'CSS3', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 80, category: 'Frontend' },
    { name: 'React', level: 75, category: 'Frontend' },
    { name: 'TypeScript', level: 70, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'Frontend' },
    { name: 'Git', level: 75, category: 'Tools' },
    { name: 'Responsive Design', level: 90, category: 'Frontend' },
  ];

  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'Moderne E-Commerce-Plattform mit React und TypeScript entwickelt',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo: '#',
      code: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive Portfolio-Website mit modernem Design',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo: '#',
      code: '#'
    },
    {
      title: 'Task Management App',
      description: 'Produktivitäts-App für Aufgabenverwaltung',
      tech: ['React', 'Firebase', 'Material-UI'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo: '#',
      code: '#'
    }
  ];

  const certificates = [
    {
      title: 'Frontend Development Certificate',
      issuer: 'FreeCodeCamp',
      date: '2024',
      description: 'Comprehensive frontend development course covering HTML, CSS, JavaScript, and React',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentialId: 'FCC-12345',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React']
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      date: '2023',
      description: 'Advanced JavaScript programming and algorithmic thinking',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentialId: 'FCC-67890',
      skills: ['JavaScript', 'Algorithms', 'Data Structures']
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: '2023',
      description: 'Modern responsive web design principles and techniques',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentialId: 'FCC-11111',
      skills: ['CSS3', 'Responsive Design', 'Flexbox', 'Grid']
    }
  ];

  const experience = [
    {
      title: 'Junior Frontend Developer',
      company: 'Tech Solutions GmbH',
      period: '2023 - Heute',
      location: 'Berlin, Deutschland',
      description: 'Entwicklung von responsiven Webanwendungen mit React und TypeScript. Zusammenarbeit mit UX/UI-Designern zur Umsetzung von Benutzeroberflächen.',
      achievements: [
        'Verbesserung der Website-Performance um 40%',
        'Implementierung von 15+ React-Komponenten',
        'Erfolgreiche Migration zu TypeScript'
      ]
    },
    {
      title: 'Frontend Developer Praktikant',
      company: 'Digital Agency',
      period: '2022 - 2023',
      location: 'München, Deutschland',
      description: 'Unterstützung bei der Entwicklung von Kundenprojekten und Erlernung moderner Frontend-Technologien.',
      achievements: [
        'Entwicklung von 3 Kundenprojekten',
        'Erlernung von React und moderne CSS-Frameworks',
        'Teilnahme an Code-Reviews und Agile-Prozessen'
      ]
    }
  ];

  const renderAbout = () => (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Nikolay Stoyanov
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-300">
                Junior Frontend-Entwickler
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Leidenschaftlicher Frontend-Entwickler mit Fokus auf moderne Webtechnologien. 
                Ich erstelle benutzerfreundliche und responsive Webanwendungen mit React, 
                TypeScript und modernen CSS-Frameworks.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} />
                Kontakt aufnehmen
              </a>
              <a 
                href="/cv-nikolay-stoyanov.pdf" 
                download
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                CV herunterladen
              </a>
            </div>

            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="text-cyan-400" size={20} />
                  <span>Berlin, Deutschland</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-cyan-400" size={20} />
                  <span>+49 123 456 789</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-cyan-400" size={20} />
                  <span>nikolay.stoyanov@email.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="text-cyan-400" size={20} />
                  <span>Verfügbar ab sofort</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderSkills = () => (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Fähigkeiten
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meine technischen Kompetenzen und Expertise in modernen Webtechnologien
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
                  {skill.category}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Fortschritt</span>
                  <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10">
            <Star className="text-yellow-400" size={24} />
            <span className="text-lg">Immer bereit neue Technologien zu lernen</span>
          </div>
        </div>
      </div>
    </section>
  );

  const renderProjects = () => (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projekte
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Eine Auswahl meiner besten Arbeiten und Projekte
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a 
                    href={project.code} 
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderCertificates = () => (
    <section id="certificates" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Zertifikate
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meine erworbenen Zertifikate und Qualifikationen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-cyan-400/20 backdrop-blur-sm rounded-full p-2">
                  <Certificate className="text-cyan-400" size={20} />
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-cyan-400 font-semibold">{cert.issuer}</span>
                    <span className="text-gray-400">{cert.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="text-xs bg-purple-400/20 text-purple-400 px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Credential ID:</span>
                    <span className="font-mono">{cert.credentialId}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10">
            <Trophy className="text-yellow-400" size={24} />
            <span className="text-lg">Kontinuierliche Weiterbildung ist der Schlüssel zum Erfolg</span>
          </div>
        </div>
      </div>
    </section>
  );

  const renderExperience = () => (
    <section id="experience" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Berufserfahrung
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mein beruflicher Werdegang und Erfahrungen
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400"></div>
            
            {experience.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900"></div>
                
                <div className="ml-20 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 w-full">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-4 text-cyan-400 mb-2">
                        <span className="font-semibold">{exp.company}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{exp.location}</span>
                      </div>
                    </div>
                    <div className="text-purple-400 font-semibold bg-purple-400/20 px-4 py-2 rounded-full text-sm">
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold mb-3">Wichtige Erfolge:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-gray-400">
                          <Star className="text-yellow-400 mt-0.5 flex-shrink-0" size={16} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const renderContact = () => (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Kontakt
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Lassen Sie uns über Ihr nächstes Projekt sprechen
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">E-Mail</p>
                    <p className="text-white font-semibold">nikolay.stoyanov@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
                    <Phone className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Telefon</p>
                    <p className="text-white font-semibold">+49 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Standort</p>
                    <p className="text-white font-semibold">Berlin, Deutschland</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-gray-800 hover:bg-cyan-400 rounded-full flex items-center justify-center transition-colors duration-300 group">
                    <Github className="text-gray-400 group-hover:text-black" size={20} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 bg-gray-800 hover:bg-cyan-400 rounded-full flex items-center justify-center transition-colors duration-300 group">
                    <Linkedin className="text-gray-400 group-hover:text-black" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Nachricht senden</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">E-Mail</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="ihre.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Betreff</label>
                <input 
                  type="text" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Projektanfrage"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Nachricht</label>
                <textarea 
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Erzählen Sie mir von Ihrem Projekt..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'about': return renderAbout();
      case 'skills': return renderSkills();
      case 'projects': return renderProjects();
      case 'certificates': return renderCertificates();
      case 'experience': return renderExperience();
      case 'contact': return renderContact();
      default: return renderAbout();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              N.Stoyanov
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className={`hover:text-cyan-400 transition-colors duration-300 ${activeSection === 'about' ? 'text-cyan-400' : 'text-gray-300'}`}
              >
                Über mich
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className={`hover:text-cyan-400 transition-colors duration-300 ${activeSection === 'skills' ? 'text-cyan-400' : 'text-gray-300'}`}
              >
                Fähigkeiten
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`hover:text-cyan-400 transition-colors duration-300 ${activeSection === 'projects' ? 'text-cyan-400' : 'text-gray-300'}`}
              >
                Projekte
              </button>
              <button 
                onClick={() => scrollToSection('certificates')}
                className={`hover:text-cyan-400 transition-colors duration-300 ${activeSection === 'certificates' ? 'text-cyan-400' : 'text-gray-300'}`}
              >
                Zertifikate
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className={`hover:text-cyan-400 transition-colors duration-300 ${activeSection === 'experience' ? 'text-cyan-400' : 'text-gray-300'}`}
              >
                Erfahrung
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`hover:text-cyan-400 transition-colors duration-300 ${activeSection === 'contact' ? 'text-cyan-400' : 'text-gray-300'}`}
              >
                Kontakt
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors">
                <ChevronDown size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;