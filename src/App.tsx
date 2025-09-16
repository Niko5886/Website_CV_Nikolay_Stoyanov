import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Github, Linkedin, Code, Database, Palette, Globe, BookOpen, Award } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);

  const codeSnippets = [
    `// React Komponente
function WelcomeMessage({ name }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className={isVisible ? 'fade-in' : 'hidden'}>
      <h1>Willkommen, {name}!</h1>
      <p>Schön, Sie kennenzulernen.</p>
    </div>
  );
}`,
    `/* CSS Grid Layout */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.portfolio-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}`,
    `// JavaScript ES6+ Features
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const userData = await response.json();
    
    const { name, email, preferences = {} } = userData;
    
    return {
      ...userData,
      displayName: name.toUpperCase(),
      isActive: preferences.notifications ?? true
    };
  } catch (error) {
    console.error('Fehler beim Laden der Benutzerdaten:', error);
    return null;
  }
};`,
    `<!-- HTML5 Semantik -->
<article class="blog-post">
  <header>
    <h1>Moderne Webentwicklung</h1>
    <time datetime="2024-01-15">15. Januar 2024</time>
  </header>
  
  <section class="content">
    <p>Die Webentwicklung entwickelt sich ständig weiter...</p>
    <figure>
      <img src="web-dev.jpg" alt="Webentwicklung Illustration">
      <figcaption>Die Zukunft der Webentwicklung</figcaption>
    </figure>
  </section>
  
  <footer>
    <p>Autor: Nikolay Stoyanov</p>
  </footer>
</article>`
  ];

  useEffect(() => {
    const currentCode = codeSnippets[currentCodeIndex];
    const typingSpeed = isDeleting ? 30 : 50;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentCode.length) {
          setDisplayedCode(currentCode.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedCode(currentCode.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentCodeIndex((currentCodeIndex + 1) % codeSnippets.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, currentCodeIndex, codeSnippets]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">
              Nikolay Stoyanov
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors">
                Über mich
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-300 hover:text-white transition-colors">
                Fähigkeiten
              </button>
              <button onClick={() => scrollToSection('education')} className="text-slate-300 hover:text-white transition-colors">
                Bildung
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors">
                Kontakt
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-slate-300 hover:text-white w-full text-left">
                Über mich
              </button>
              <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 text-slate-300 hover:text-white w-full text-left">
                Fähigkeiten
              </button>
              <button onClick={() => scrollToSection('education')} className="block px-3 py-2 text-slate-300 hover:text-white w-full text-left">
                Bildung
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-slate-300 hover:text-white w-full text-left">
                Kontakt
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Hallo, ich bin{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Nikolay Stoyanov
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8">
                Junior Frontend-Entwickler
              </p>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl">
                Leidenschaftlicher Entwickler mit Fokus auf moderne Webtechnologien. 
                Ich erstelle benutzerfreundliche und responsive Webanwendungen mit React, 
                TypeScript und modernen CSS-Frameworks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Kontakt aufnehmen
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="border border-slate-500 text-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 hover:border-slate-400 transition-all duration-300"
                >
                  Meine Fähigkeiten
                </button>
              </div>
            </div>

            {/* Right Content - Code Display */}
            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-400 text-sm ml-2">code-editor.js</span>
                </div>
                <pre className="text-sm text-slate-300 font-mono overflow-hidden">
                  <code>{displayedCode}<span className="animate-pulse">|</span></code>
                </pre>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500/20 rounded-full animate-float-delayed"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Über mich</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Ich bin ein motivierter Junior Frontend-Entwickler mit einer Leidenschaft für 
              sauberen Code und benutzerfreundliche Interfaces.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Mein Weg in die Entwicklung</h3>
              <p className="text-slate-300 mb-4">
                Nach meiner Ausbildung bei alfatraining habe ich mich auf moderne Frontend-Technologien 
                spezialisiert. Ich liebe es, komplexe Probleme zu lösen und dabei elegante, 
                benutzerfreundliche Lösungen zu entwickeln.
              </p>
              <p className="text-slate-300 mb-6">
                Meine Stärken liegen in der Entwicklung responsiver Webanwendungen mit React, 
                TypeScript und modernen CSS-Frameworks. Ich bin immer bereit, neue Technologien 
                zu erlernen und mich weiterzuentwickeln.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <Code className="text-blue-400 mb-2" size={24} />
                  <h4 className="text-white font-semibold">Frontend</h4>
                  <p className="text-slate-400 text-sm">React, TypeScript, CSS</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <Database className="text-green-400 mb-2" size={24} />
                  <h4 className="text-white font-semibold">Backend</h4>
                  <p className="text-slate-400 text-sm">Node.js, APIs</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-slate-600">
                <h4 className="text-xl font-semibold text-white mb-4">Persönliche Eigenschaften</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Problemlösungsorientiert
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Teamfähig und kommunikativ
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Lernbereit und wissbegierig
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Detailorientiert
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technische Fähigkeiten</h2>
            <p className="text-slate-400 text-lg">
              Moderne Technologien und Tools, die ich beherrsche
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <Palette className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• HTML5 & CSS3</li>
                <li>• JavaScript (ES6+)</li>
                <li>• TypeScript</li>
                <li>• React.js</li>
                <li>• Tailwind CSS</li>
                <li>• Responsive Design</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500/50 transition-all duration-300">
              <Database className="text-green-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Node.js</li>
                <li>• Express.js</li>
                <li>• REST APIs</li>
                <li>• MongoDB</li>
                <li>• MySQL</li>
                <li>• Supabase</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <Code className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-4">Tools & Workflow</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Git & GitHub</li>
                <li>• VS Code</li>
                <li>• Vite</li>
                <li>• npm/yarn</li>
                <li>• Figma</li>
                <li>• Chrome DevTools</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
              <Globe className="text-yellow-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-4">Sprachen</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Deutsch (Fließend)</li>
                <li>• Bulgarisch (Muttersprache)</li>
                <li>• Englisch (Gut)</li>
                <li>• Russisch (Grundkenntnisse)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bildung & Zertifikate</h2>
            <p className="text-slate-400 text-lg">
              Mein Bildungsweg und kontinuierliche Weiterbildung
            </p>
          </div>

          <div className="space-y-8">
            {/* alfatraining */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-4 md:mb-0">
                  <BookOpen className="text-blue-400 mr-4" size={32} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Webentwicklung Vollzeit</h3>
                    <p className="text-slate-400">alfatraining Bildungszentrum</p>
                  </div>
                </div>
                <span className="text-slate-400 bg-slate-700 px-3 py-1 rounded-full text-sm">
                  2023 - 2024
                </span>
              </div>
              <p className="text-slate-300 mb-4">
                Intensive Vollzeitausbildung in moderner Webentwicklung mit Fokus auf 
                Frontend- und Backend-Technologien.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Datenbanken</span>
              </div>
            </div>

            {/* SoftUni */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-4 md:mb-0">
                  <Award className="text-green-400 mr-4" size={32} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">JavaScript Fundamentals</h3>
                    <p className="text-slate-400">SoftUni</p>
                  </div>
                </div>
                <span className="text-slate-400 bg-slate-700 px-3 py-1 rounded-full text-sm">
                  2023
                </span>
              </div>
              <p className="text-slate-300 mb-4">
                Grundlagen der JavaScript-Programmierung, Algorithmen und Datenstrukturen.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Algorithmen</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kontakt</h2>
            <p className="text-slate-400 text-lg">
              Lassen Sie uns über Ihr nächstes Projekt sprechen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Kontaktieren Sie mich</h3>
              <p className="text-slate-300 mb-8">
                Ich bin immer offen für neue Möglichkeiten und interessante Projekte. 
                Zögern Sie nicht, mich zu kontaktieren!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-4" size={24} />
                  <div>
                    <p className="text-white font-semibold">E-Mail</p>
                    <a href="mailto:nikolay.stoyanov.dev@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                      nikolay.stoyanov.dev@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-green-400 mr-4" size={24} />
                  <div>
                    <p className="text-white font-semibold">Telefon</p>
                    <a href="tel:+4915123456789" className="text-slate-400 hover:text-green-400 transition-colors">
                      +49 151 234 567 89
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="text-red-400 mr-4" size={24} />
                  <div>
                    <p className="text-white font-semibold">Standort</p>
                    <p className="text-slate-400">Berlin, Deutschland</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a 
                  href="https://github.com/nikolaystoyanov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-colors"
                >
                  <Github className="text-white" size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/nikolaystoyanov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-colors"
                >
                  <Linkedin className="text-white" size={24} />
                </a>
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h4 className="text-xl font-semibold text-white mb-6">Nachricht senden</h4>
              <form className="space-y-6">
                <div>
                  <label className="block text-slate-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">E-Mail</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">Nachricht</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none resize-none"
                    placeholder="Ihre Nachricht..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400">
              © 2024 Nikolay Stoyanov. Alle Rechte vorbehalten.
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Entwickelt mit React, TypeScript und Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;