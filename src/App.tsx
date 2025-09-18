import React from 'react';
import { Code, Database, Globe, BookOpen, Calendar, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Николай Стоянов</h1>
            <div className="flex space-x-6">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">За мен</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Умения</a>
              <a href="#education" className="text-slate-600 hover:text-blue-600 transition-colors">Образование</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Контакт</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Code className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-slate-800 mb-4">
              Николай Стоянов
            </h1>
            <p className="text-2xl text-blue-600 font-semibold mb-6">
              Junior Front-End Developer
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Подготвям се за позиция като Junior Front-End Developer с обширна подготовка 
              в модерни уеб технологии и програмиране. Завърших серия от курсове в AlphaTraining 
              и продължавам активно обучението си в Software University.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              Свали CV
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-all duration-300">
              Свържи се с мен
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">За мен</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Страстен съм по уеб разработката и постоянно се стремя да разширя знанията си 
                в областта на Front-End развитието. Моето обучение в AlphaTraining - Германия 
                ми даде солидна основа в съвременните уеб технологии.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Комбинирам теоретичните знания с практически проекти, за да развия уменията си 
                и да се подготвя за професионалната си кариера като разработчик.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800">Уеб Дизайн</h3>
                <p className="text-slate-600 text-sm">HTML5, CSS3, Dreamweaver</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Code className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800">JavaScript</h3>
                <p className="text-slate-600 text-sm">Интерактивни приложения</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800">React</h3>
                <p className="text-slate-600 text-sm">SPA приложения</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Database className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800">Backend</h3>
                <p className="text-slate-600 text-sm">Java, Python, Бази данни</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Технически умения</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Frontend</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">HTML5</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">CSS3</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">JavaScript</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">React</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Backend</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Java</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Python</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Бази данни</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '55%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">AJAX</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Инструменти</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Dreamweaver</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Git</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">VS Code</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Образование и обучение</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">AlphaTraining - Германия</h3>
                  <p className="text-blue-600 font-medium mb-3">Серия от курсове по уеб разработка</p>
                  <div className="grid md:grid-cols-2 gap-4 text-slate-600">
                    <div>
                      <h4 className="font-semibold mb-2">Уеб дизайн:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• HTML5</li>
                        <li>• CSS3</li>
                        <li>• Adobe Dreamweaver</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Програмиране:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• JavaScript и AJAX</li>
                        <li>• React SPA приложения</li>
                        <li>• Java ООП и бази данни</li>
                        <li>• Python програмиране</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Software University (SoftUni)</h3>
                  <p className="text-green-600 font-medium mb-3">Текущо обучение</p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-slate-800">Programming Basics with JavaScript</h4>
                        <p className="text-sm text-slate-600">Завършен успешно</p>
                      </div>
                      <div className="text-green-600 font-bold">✓</div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-slate-800">JS Programming Fundamentals</h4>
                        <p className="text-sm text-slate-600">Завършен успешно</p>
                      </div>
                      <div className="text-green-600 font-bold">✓</div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-slate-800">JS Advanced</h4>
                        <p className="text-sm text-slate-600">Започва на 09.09.2025</p>
                      </div>
                      <div className="text-blue-600 font-bold">→</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">Свържи се с мен</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
              <p className="text-slate-600">nikolay.stoyanov@example.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Телефон</h3>
              <p className="text-slate-600">+359 XXX XXX XXX</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Локация</h3>
              <p className="text-slate-600">България</p>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300">
            © 2024 Николай Стоянов. Всички права запазени.
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Направено с React и Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;