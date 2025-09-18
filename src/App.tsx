import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Palette, Database, Globe, Mail, Phone, MapPin, Calendar, Award, ExternalLink, Github, Linkedin, ArrowUp, Download, FileText, GraduationCap } from 'lucide-react';

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

  const certificates = [
    {
      id: 1,
      title: 'Webdesign',
      issuer: 'alfatraining',
      date: '19.08.2024',
      number: '137173',
      description: 'HTML, CSS und Dreamweaver',
      note: 'gut (81 Punkte)',
      image: '/src/assets/certificates/Screenshot S1.png',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'JavaScript Developer',
      issuer: 'alfatraining',
      date: '06.12.2024',
      number: '145009',
      description: 'sehr gut (94 Punkte)',
      note: '8 Wochen Vollzeitunterricht',
      image: '/src/assets/certificates/Screenshot S2.png',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 3,
      title: 'Programmierung mit Python',
      issuer: 'alfatraining',
      date: '04.04.2025',
      number: '153269',
      description: 'sehr gut (93 Punkte)',
      note: '4 Wochen Vollzeitunterricht',
      image: '/src/assets/certificates/Screenshot S3.png',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Java-Entwickler:in',
      issuer: 'alfatraining',
      date: '07.03.2025',
      number: '150166',
      description: 'Objektorientierte Programmierung',
      note: 'befriedigend (75 Punkte)',
      image: '/src/assets/certificates/Screenshot S4.png',
      color: 'from-red-500 to-pink-500'
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
            <a href="#certificates" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              Zertifikate
            </a>
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

      {/* Zertifikate Section */}
      <section id="certificates" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Zertifikate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meine erworbenen Qualifikationen und Zertifizierungen von alfatraining
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="text-xs opacity-90">Zertifikat Nr.</div>
                      <div className="text-sm font-bold">{cert.number}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{cert.date}</span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{cert.issuer}</span>
                  </div>

                  <div className="mb-3">
                    <p className="text-blue-600 font-semibold text-sm mb-1">
                      {cert.description}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {cert.note}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                        Zertifiziert
                      </span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 font-medium">Verifiziert</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover overlay with additional info */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-800/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-lg font-bold mb-2">{cert.title}</h4>
                    <p className="text-blue-200 text-sm mb-3">{cert.description}</p>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        <span>Nr. {cert.number}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-8 py-4 rounded-2xl border border-blue-100">
              <Award className="w-6 h-6" />
              <div>
                <div className="font-bold text-lg">Kontinuierliche Weiterbildung</div>
                <div className="text-sm opacity-80">in modernen Technologien</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300" id="certificate-modal">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform scale-95 transition-transform duration-300">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800">Zertifikat Details</h3>
            <button 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => {
                const modal = document.getElementById('certificate-modal');
                modal.classList.add('opacity-0', 'pointer-events-none');
                modal.querySelector('div').classList.add('scale-95');
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6 overflow-y-auto">
            <img 
              id="modal-certificate-image" 
              src="" 
              alt="Zertifikat" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Updated Zertifikate Section */}
      <section id="certificates" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Zertifikate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meine erworbenen Qualifikationen und Zertifizierungen von alfatraining
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden group cursor-pointer relative"
                onClick={() => {
                  const modal = document.getElementById('certificate-modal');
                  const modalImage = document.getElementById('modal-certificate-image');
                  modalImage.src = cert.image;
                  modal.classList.remove('opacity-0', 'pointer-events-none');
                  modal.querySelector('div').classList.remove('scale-95');
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  
                  {/* Certificate number badge */}
                  <div className="absolute bottom-4 left-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-black/70 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                      <div className="text-white/80 text-xs font-medium">Zertifikat Nr.</div>
                      <div className="text-white text-sm font-bold">{cert.number}</div>
                    </div>
                  </div>

                  {/* Hover content overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center text-white transform scale-90 group-hover:scale-100 transition-transform duration-500">
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <FileText className="w-12 h-12 mx-auto mb-3 text-white" />
                        <div className="text-lg font-bold mb-2">Zertifikat ansehen</div>
                        <div className="text-sm opacity-90">Klicken für Vollansicht</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm font-medium">{cert.date}</span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3">
                    <GraduationCap className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm font-medium">{cert.issuer}</span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cert.color}`}></div>
                      <p className="text-blue-600 font-semibold text-sm">
                        {cert.description}
                      </p>
                    </div>
                    <p className="text-gray-500 text-xs pl-5">
                      {cert.note}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                        Zertifiziert von alfatraining
                      </span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 font-medium">Verifiziert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-8 py-4 rounded-2xl border border-blue-100">
              <Award className="w-6 h-6" />
              <div>
                <div className="font-bold text-lg">Kontinuierliche Weiterbildung</div>
                <div className="text-sm opacity-80">in modernen Technologien</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 relative">
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
              Zertifikate
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6">
              Meine beruflichen Qualifikationen und Zertifizierungen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Webdesign Certificate */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} className="text-white" />
                </div>
                <span className="text-sm text-gray-400">2024</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Webdesign</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Zertifikat für Webdesign und Frontend-Entwicklung
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-orange-500/20 border border-orange-500/30 rounded text-xs text-orange-300">
                  HTML5
                </span>
                <span className="px-2 py-1 bg-orange-500/20 border border-orange-500/30 rounded text-xs text-orange-300">
                  CSS3
                </span>
                <span className="px-2 py-1 bg-orange-500/20 border border-orange-500/30 rounded text-xs text-orange-300">
                  Responsive Design
                </span>
              </div>
              <a
                href="/certificates/Zertifikat_137173_Webdesign_20240819.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <span className="mr-2">Zertifikat ansehen</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* JavaScript Certificate */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} className="text-white" />
                </div>
                <span className="text-sm text-gray-400">2024</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">JavaScript & AJAX</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Fortgeschrittene JavaScript-Programmierung und AJAX-Technologien
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded text-xs text-yellow-300">
                  JavaScript ES6+
                </span>
                <span className="px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded text-xs text-yellow-300">
                  AJAX
                </span>
                <span className="px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded text-xs text-yellow-300">
                  DOM Manipulation
                </span>
              </div>
              <a
                href="/certificates/Zertifikat_142068_Javascript_Ajax_(8)_20241014.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <span className="mr-2">Zertifikat ansehen</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* JavaScript Libraries Certificate */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} className="text-white" />
                </div>
                <span className="text-sm text-gray-400">2024</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">JavaScript Bibliotheken</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Spezialisierung auf JavaScript-Frameworks und -Bibliotheken
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-300">
                  React
                </span>
                <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-300">
                  jQuery
                </span>
                <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-300">
                  Frameworks
                </span>
              </div>
              <a
                href="/certificates/Zertifikat_145009_JavaScript_Bibliothek_20241209.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <span className="mr-2">Zertifikat ansehen</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Java Certificate */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} className="text-white" />
                </div>
                <span className="text-sm text-gray-400">2025</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Java OOP</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Objektorientierte Programmierung mit Java
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-red-500/20 border border-red-500/30 rounded text-xs text-red-300">
                  Java
                </span>
                <span className="px-2 py-1 bg-red-500/20 border border-red-500/30 rounded text-xs text-red-300">
                  OOP
                </span>
                <span className="px-2 py-1 bg-red-500/20 border border-red-500/30 rounded text-xs text-red-300">
                  Algorithmen
                </span>
              </div>
              <a
                href="/certificates/Zertifikat_150166_JAVA_20250113.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <span className="mr-2">Zertifikat ansehen</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Python Certificate */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} className="text-white" />
                </div>
                <span className="text-sm text-gray-400">2025</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Python</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Python-Programmierung und Datenanalyse
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-xs text-green-300">
                  Python
                </span>
                <span className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-xs text-green-300">
                  Data Analysis
                </span>
                <span className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-xs text-green-300">
                  Automation
                </span>
              </div>
              <a
                href="/certificates/Zertifikat_153269_Python_20250310.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <span className="mr-2">Zertifikat ansehen</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Additional Certificate Placeholder */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} className="text-white" />
                </div>
                <span className="text-sm text-gray-400">2024</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Weitere Zertifikate</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Zusätzliche Qualifikationen und Weiterbildungen
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded text-xs text-indigo-300">
                  Continuous Learning
                </span>
                <span className="px-2 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded text-xs text-indigo-300">
                  Professional Development
                </span>
              </div>
              <span className="text-gray-400 text-sm">
                Weitere Zertifikate in Vorbereitung
              </span>
            </div>
          </div>

          {/* Certificate Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-gray-300">Zertifikate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
              <div className="text-gray-300">Institutionen</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Lernstunden</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-300">Erfolgsrate</div>
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