import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Palette, Database, Globe, Mail, Phone, MapPin, Calendar, Award, ExternalLink, Github, Linkedin, ArrowUp } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const codeSnippets = [
    'console.log("Nikolay Stoyanov - +359897949326");'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < codeSnippets.length) {
        const currentSnippet = codeSnippets[currentIndex];
        if (typedText.length < currentSnippet.length) {
          setTypedText(currentSnippet.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % codeSnippets.length);
            setTypedText('');
          }, 2000);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [typedText, currentIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = [
    { name: 'HTML5', level: 90, icon: Code, color: 'from-orange-400 to-red-500' },
    { name: 'CSS3', level: 85, icon: Palette, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', level: 80, icon: Code, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', level: 75, icon: Code, color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', level: 70, icon: Database, color: 'from-green-400 to-green-600' },
    { name: 'Git', level: 85, icon: Code, color: 'from-gray-400 to-gray-600' }
  ];

  const education = [
    {
      institution: 'alfatraining',
      degree: 'Frontend-Entwickler Zertifikat',
      period: '2024',
      description: 'Intensive Ausbildung in modernen Frontend-Technologien einschließlich React, JavaScript und responsive Webdesign.',
      skills: ['React', 'JavaScript ES6+', 'HTML5/CSS3', 'Responsive Design']
    },
    {
      institution: 'SoftUni',
      degree: 'Programmierung Grundlagen',
      period: '2023-2024',
      description: 'Umfassende Grundlagen der Programmierung mit Fokus auf Webentwicklung und Softwareentwicklungsprinzipien.',
      skills: ['Programmierlogik', 'Algorithmen', 'Datenstrukturen', 'Problemlösung']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-spin-slow"></div>
      </div>

      {/* Binary Rain Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono animate-binary-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                N.Stoyanov
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Über mich', id: 'about' },
                { name: 'Fähigkeiten', id: 'skills' },
                { name: 'Bildung', id: 'education' },
                { name: 'Kontakt', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { name: 'Über mich', id: 'about' },
                { name: 'Fähigkeiten', id: 'skills' },
                { name: 'Bildung', id: 'education' },
                { name: 'Kontakt', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium hover:text-cyan-400 transition-colors duration-300 w-full text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Nikolay Stoyanov
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Junior Frontend-Entwickler
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Leidenschaftlich für die Erstellung schöner, funktionaler und benutzerfreundlicher Webanwendungen mit modernen Technologien.
            </p>
          </div>

          {/* 3D Floating Code Block */}
          <div className="perspective-1000 mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 max-w-md mx-auto rotate-y-12 animate-slide-rotate shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-gray-400 text-sm">code.js</span>
              </div>
              <div className="font-mono text-left">
                <div className="text-purple-400">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Kontaktiere mich
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 border border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
            >
              Mehr erfahren
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Top Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cyan-500/25 group"
              title="Zurück nach oben"
            >
              <ArrowUp size={20} className="text-white group-hover:animate-bounce" />
            </button>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Über mich
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Motivierter und ehrgeiziger junger Spezialist mit Kenntnissen in Programmierung und Datenanalyse, die ich durch Intensivkurse bei alfatraining in Deutschland und SoftUni Bulgarien erworben habe. Ich habe eine Fachausbildung in Front-End-Entwicklung und Programmierung mit HTML, CSS, JavaScript, React, Java und Python mit hervorragenden Ergebnissen abgeschlossen, was mir eine solide Grundlage für die Arbeit mit Daten, Prozessen und Automatisierung verschafft hat.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Mein ständiger Wunsch zu lernen und mich weiterzuentwickeln wird durch meine Kurse „AI Integrations for Developers", „Programming Fundamentals with JavaScript" und „Programming Fundamentals" bei SoftUni unterstützt, und derzeit lerne ich auch bei Vibe Coding.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Ich bin in der Lage, selbstständig zu arbeiten, neue Technologien schnell zu erlernen und habe eine starke Affinität zur Lösung komplexer Probleme. Ich suche nach einer Möglichkeit, mein Wissen im Bereich BI und Automatisierung einzusetzen, um die Entwicklung Ihres Unternehmens zu unterstützen.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm">
                  Problemlöser
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm">
                  Teamplayer
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm">
                  Lernbegeistert
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mb-4">
                    <Globe size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Web Design</h3>
                  <p className="text-sm text-gray-400">HTML5, CSS3, Responsive Design</p>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg mb-4">
                    <Code size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">JavaScript</h3>
                  <p className="text-sm text-gray-400">DOM, AJAX, NodeJS, NPM</p>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg mb-4">
                    <Code size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">React</h3>
                  <p className="text-sm text-gray-400">Components, Hooks, Redux</p>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg mb-4">
                    <Database size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">Data & AI</h3>
                  <p className="text-sm text-gray-400">Python, Java, AI Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Top Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cyan-500/25 group"
              title="Zurück nach oben"
            >
              <ArrowUp size={20} className="text-white group-hover:animate-bounce" />
            </button>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Meine Fähigkeiten
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend Development */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-6">Frontend-Entwicklung</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>HTML5</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-blue-500 transition-all duration-1000 ease-out" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>CSS3 & Responsive</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-blue-500 transition-all duration-1000 ease-out" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Flexbox & Grid</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-blue-500 transition-all duration-1000 ease-out" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>One-page Sites</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-blue-500 transition-all duration-1000 ease-out" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* JavaScript */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-6">JavaScript</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>DOM Manipulation</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-yellow-500 transition-all duration-1000 ease-out" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>AJAX & Fetch</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-yellow-500 transition-all duration-1000 ease-out" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>NodeJS & NPM</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-yellow-500 transition-all duration-1000 ease-out" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Async & Promises</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-yellow-500 transition-all duration-1000 ease-out" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Libraries & Frameworks */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-6">Bibliotheken & Frameworks</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>React</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-cyan-500 transition-all duration-1000 ease-out" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Redux Toolkit</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-cyan-500 transition-all duration-1000 ease-out" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>VueJS</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-cyan-500 transition-all duration-1000 ease-out" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>jQuery</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-cyan-500 transition-all duration-1000 ease-out" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Programming */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-6">Programmierung</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Python</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-green-500 transition-all duration-1000 ease-out" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Python GUI</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-green-500 transition-all duration-1000 ease-out" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Java OOP</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-orange-500 transition-all duration-1000 ease-out" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>SQL & MySQL</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-purple-500 transition-all duration-1000 ease-out" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Two additional sections */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Tools & Entwicklung */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-6">Tools & Entwicklung</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Git & GitHub</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-indigo-500 transition-all duration-1000 ease-out" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>VS Code</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-indigo-500 transition-all duration-1000 ease-out" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Webpack & Vite</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-indigo-500 transition-all duration-1000 ease-out" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>NPM & Package Management</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-indigo-500 transition-all duration-1000 ease-out" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Design & UI/UX */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-6">Design & UI/UX</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Responsive Design</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-pink-500 transition-all duration-1000 ease-out" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-pink-500 transition-all duration-1000 ease-out" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>UI/UX Principles</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-pink-500 transition-all duration-1000 ease-out" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Cross-browser Compatibility</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-pink-500 transition-all duration-1000 ease-out" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Top Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cyan-500/25 group"
              title="Zurück nach oben"
            >
              <ArrowUp size={20} className="text-white group-hover:animate-bounce" />
            </button>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Bildung
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {/* alfatraining */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-cyan-400">Alfatraining - Deutschland </h3>
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-base">2024 - 2025</span>
                </div>
              </div>
              <h4 className="text-lg text-white mb-6">Frontend-Entwickler Zertifikat</h4>
              <p className="text-gray-300 mb-6 text-base leading-relaxed">
                Intensive Ausbildung in modernen Frontend-Technologien einschließlich React, JavaScript und responsive Webdesign.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-md text-sm text-cyan-300">
                  React
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-md text-sm text-cyan-300">
                  JavaScript ES6+
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-md text-sm text-cyan-300">
                  HTML5/CSS3
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-md text-sm text-cyan-300">
                  Responsive Design
                </span>
              </div>
            </div>

            {/* SoftUni */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-cyan-400">SoftUni - Bulgarien</h3>
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-base">2025 - seit heute</span>
                </div>
              </div>
              <h4 className="text-lg text-white mb-6">Programmierung Grundlagen</h4>
              <p className="text-gray-300 mb-6 text-base leading-relaxed">
                Umfassende Grundlagen der Programmierung mit Fokus auf Webentwicklung und Softwareentwicklungsprinzipien.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-md text-sm text-cyan-300">
                  Programmierlogik
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-md text-sm text-cyan-300">
                  Algorithmen
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-md text-sm text-cyan-300">
                  Datenstrukturen
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-md text-sm text-cyan-300">
                  Problemlösung
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Top Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cyan-500/25 group"
              title="Zurück nach oben"
            >
              <ArrowUp size={20} className="text-white group-hover:animate-bounce" />
            </button>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Kontaktiere mich
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6">
              Bereit für neue Möglichkeiten und spannende Projekte
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400">E-Mail</h3>
                  <p className="text-gray-300">lobido1988@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400">Telefon</h3>
                  <p className="text-gray-300">0897949326</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400">Standort</h3>
                  <p className="text-gray-300">Ruse 7016, ul. Klisura 19</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <a
                  href="#"
                  className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={24} className="text-white" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="ihre.email@beispiel.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Ihre Nachricht hier..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Nikolay Stoyanov. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;