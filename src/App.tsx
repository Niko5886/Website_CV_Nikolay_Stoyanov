import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, BookOpen, Calendar, Mail, Phone, MapPin, Github, Linkedin, ArrowUp } from 'lucide-react';

function App() {
  const [showPhone, setShowPhone] = useState(false);
  const [showEducationButton, setShowEducationButton] = useState(false);
  const [typedCode, setTypedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingRef = useRef(null);
  const timeoutRef = useRef(null);

  const jsCode = `// Advanced React Application with TypeScript
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  preferences: UserPreferences;
}

interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  notifications: boolean;
  language: string;
  timezone: string;
}

type ActionType = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USERS'; payload: User[] }
  | { type: 'ADD_USER'; payload: User }
  | { type: 'UPDATE_USER'; payload: { id: number; updates: Partial<User> } }
  | { type: 'DELETE_USER'; payload: number }
  | { type: 'SET_ERROR'; payload: string | null };

interface AppState {
  users: User[];
  loading: boolean;
  error: string | null;
  selectedUser: User | null;
}

const initialState: AppState = {
  users: [],
  loading: false,
  error: null,
  selectedUser: null
};

const appReducer = (state: AppState, action: ActionType): AppState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_USERS':
      return { ...state, users: action.payload, loading: false };
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id
            ? { ...user, ...action.payload.updates }
            : user
        )
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const UserContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<ActionType>;
} | null>(null);

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within UserProvider');
  }
  return context;
};

class ApiService {
  private baseURL = 'https://api.example.com';
  private token: string | null = null;

  constructor(token?: string) {
    this.token = token || localStorage.getItem('authToken');
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = \`\${this.baseURL}\${endpoint}\`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { Authorization: \`Bearer \${this.token}\` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || \`HTTP \${response.status}\`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  async getUsers(): Promise<User[]> {
    return this.request<User[]>('/users');
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    return this.request<User>('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async updateUser(id: number, updates: Partial<User>): Promise<User> {
    return this.request<User>(\`/users/\${id}\`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
  }

  async deleteUser(id: number): Promise<void> {
    await this.request(\`/users/\${id}\`, { method: 'DELETE' });
  }
}

const useAsyncOperation = <T,>(
  operation: () => Promise<T>,
  dependencies: React.DependencyList = []
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef(true);

  const execute = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await operation();
      if (mountedRef.current) {
        setData(result);
      }
    } catch (err) {
      if (mountedRef.current) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    } finally {
      if (mountedRef.current) {
        setLoading(false);
      }
    }
  }, dependencies);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return { data, loading, error, execute };
};

const UserList: React.FC = () => {
  const { state, dispatch } = useUserContext();
  const apiService = useMemo(() => new ApiService(), []);
  
  const {
    data: users,
    loading,
    error,
    execute: fetchUsers
  } = useAsyncOperation(() => apiService.getUsers(), [apiService]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    if (users) {
      dispatch({ type: 'SET_USERS', payload: users });
    }
  }, [users, dispatch]);

  const handleDeleteUser = useCallback(async (userId: number) => {
    try {
      await apiService.deleteUser(userId);
      dispatch({ type: 'DELETE_USER', payload: userId });
    } catch (error) {
      dispatch({ 
        type: 'SET_ERROR', 
        payload: 'Failed to delete user' 
      });
    }
  }, [apiService, dispatch]);

  const memoizedUsers = useMemo(() => {
    return state.users.filter(user => user.name.length > 0);
  }, [state.users]);

  if (loading) return <div className="spinner">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="user-list">
      {memoizedUsers.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onDelete={() => handleDeleteUser(user.id)}
        />
      ))}
    </div>
  );
};

const UserCard: React.FC<{
  user: User;
  onDelete: () => void;
}> = React.memo(({ user, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && (
        <div className="user-details">
          <p>Theme: {user.preferences.theme}</p>
          <p>Language: {user.preferences.language}</p>
        </div>
      )}
      <button onClick={onDelete} className="delete-btn">
        Delete
      </button>
    </div>
  );
});

export default UserList;`;

  useEffect(() => {
    let currentIndex = 0;
    
    const typeCode = () => {
      if (currentIndex < jsCode.length && !isDeleting) {
        setTypedCode(jsCode.slice(0, currentIndex + 1));
        currentIndex++;
        
        // По-бърза скорост на писане (намалени времена)
        const char = jsCode[currentIndex - 1];
        let delay = 25; // базова скорост (намалена от 50 на 25)
        
        if (char === '\n') delay = 100; // пауза на нов ред (намалена от 200)
        else if (char === ' ') delay = 15; // по-бързо за интервали (намалена от 30)
        else if (char === '{' || char === '}') delay = 75; // пауза за скоби (намалена от 150)
        else if (char === ';') delay = 50; // малка пауза за точка и запетая (намалена от 100)
        else if (Math.random() > 0.95) delay = 75; // случайни паузи (намалена от 150)
        
        timeoutRef.current = setTimeout(typeCode, delay);
      } else if (currentIndex >= jsCode.length && !isDeleting) {
        // Започни изтриване след завършване на писането
        setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
          deleteCode();
        }, 2000);
      }
    };
    
    const deleteCode = () => {
      const currentText = typedCode;
      if (currentText.length > 0) {
        // Оригинален ефект на изтриване - изтрива на случайни позиции
        const deletePositions = [];
        const deleteCount = Math.min(5, currentText.length); // Изтрива до 5 символа наведнъж
        
        for (let i = 0; i < deleteCount; i++) {
          const randomPos = Math.floor(Math.random() * currentText.length);
          if (!deletePositions.includes(randomPos)) {
            deletePositions.push(randomPos);
          }
        }
        
        let newText = currentText;
        deletePositions.sort((a, b) => b - a); // Сортира в низходящ ред за правилно изтриване
        
        deletePositions.forEach(pos => {
          newText = newText.slice(0, pos) + newText.slice(pos + 1);
        });
        
        setTypedCode(newText);
        
        timeoutRef.current = setTimeout(deleteCode, 50);
      } else {
        // Рестартирай цикъла
        setTimeout(() => {
          setIsDeleting(false);
          setIsTyping(true);
          currentIndex = 0;
          typeCode();
        }, 1000);
      }
    };
    
    if (!isDeleting) {
      typeCode();
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isDeleting]);


  useEffect(() => {
    let currentIndex = 0;
    
    const typeCode = () => {
      if (currentIndex < jsCode.length) {
        setTypedCode(jsCode.slice(0, currentIndex + 1));
        currentIndex++;
        
        // Варираща скорост на писане за реалистичност
        const char = jsCode[currentIndex - 1];
        let delay = 50; // базова скорост
        
        if (char === '\n') delay = 200; // пауза на нов ред
        else if (char === ' ') delay = 30; // по-бързо за интервали
        else if (char === '{' || char === '}') delay = 150; // пауза за скоби
        else if (char === ';') delay = 100; // малка пауза за точка и запетая
        else if (Math.random() > 0.9) delay = 150; // случайни паузи за реалистичност
        
        timeoutRef.current = setTimeout(typeCode, delay);
      } else {
        // Започни изчезване след завършване на писането
        setTimeout(() => {
          setIsTyping(false);
          fadeOut();
        }, 2000);
      }
    };
    
    const fadeOut = () => {
      let currentOpacity = 1;
      const fadeInterval = setInterval(() => {
        currentOpacity -= 0.02;
        setOpacity(currentOpacity);
        
        if (currentOpacity <= 0) {
          clearInterval(fadeInterval);
          // Рестартирай цикъла
          setTimeout(() => {
            setTypedCode('');
            setOpacity(1);
            setIsTyping(true);
            currentIndex = 0;
            typeCode();
          }, 1000);
        }
      }, 50);
    };
    
    typeCode();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleContactClick = () => {
    setShowPhone(!showPhone);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const educationSection = document.getElementById('education');
      if (educationSection) {
        const rect = educationSection.getBoundingClientRect();
        const isInView = rect.top <= 100 && rect.bottom >= 100;
        setShowEducationButton(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* 3D Cybersecurity Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>
        
        {/* Network Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
          <path d="M100,200 Q300,100 500,300 T900,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
          <path d="M200,400 Q400,300 600,500 T1000,400" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDelay: '1s'}}/>
          <path d="M50,600 Q250,500 450,700 T850,600" stroke="url(#lineGradient)" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: '2s'}}/>
        </svg>
        
        {/* Hexagonal Pattern */}
        <div className="absolute top-10 right-10 opacity-20">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({length: 24}).map((_, i) => (
              <div key={i} className="w-8 h-8 border border-blue-400/40 transform rotate-45 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
        
        {/* Binary Code Rain Effect */}
        <div className="hidden lg:block absolute right-0 top-0 h-full w-80 overflow-hidden">
          <div 
            ref={typingRef}
            className="text-xs font-mono leading-relaxed bg-slate-900/90 p-4 rounded-lg border border-slate-700/50 h-full overflow-hidden"
          >
            <div className="whitespace-pre-wrap">
              {typedCode.split('').map((char, index) => {
                let className = 'text-slate-300';
                
                // Оцветяване на ключови думи
                const currentWord = typedCode.slice(0, index + 1).split(/\s+/).pop() || '';
                const prevChars = typedCode.slice(Math.max(0, index - 10), index + 1);
                
                if (['function', 'const', 'let', 'var', 'if', 'else', 'return', 'async', 'await', 'class', 'extends', 'constructor', 'super', 'import', 'export', 'interface', 'type', 'enum', 'private', 'public', 'static'].some(keyword => 
                  prevChars.endsWith(keyword) && (index + 1 >= typedCode.length || /\s|\(/.test(typedCode[index + 1]))
                )) {
                  className = 'text-purple-400';
                } else if (['true', 'false', 'null', 'undefined'].some(keyword => 
                  prevChars.endsWith(keyword) && (index + 1 >= typedCode.length || /\s|;|,|\)/.test(typedCode[index + 1]))
                )) {
                  className = 'text-orange-400';
                } else if (/\d/.test(char)) {
                  className = 'text-orange-300';
                } else if (char === '"' || char === "'" || char === '`') {
                  className = 'text-green-400';
                } else if (['(', ')', '{', '}', '[', ']', ';', ',', '.'].includes(char)) {
                  className = 'text-slate-300';
                } else if (['=', '+', '-', '*', '/', '>', '<', '!'].includes(char)) {
                  className = 'text-slate-400';
                }
                
                // Специални случаи за имена на функции и променливи
                if ((prevChars.includes('function ') || prevChars.includes('const ') || prevChars.includes('interface ')) && /[a-zA-Z]/.test(char)) {
                  className = 'text-yellow-300';
                } else if ((prevChars.includes('const ') || prevChars.includes('let ')) && /[a-zA-Z]/.test(char) && !prevChars.includes('=')) {
                  className = 'text-blue-300';
                } else if (prevChars.includes('console.') && /[a-zA-Z]/.test(char)) {
                  className = 'text-yellow-300';
                }
                
                return (
                  <span key={index} className={className}>
                    {char}
                  </span>
                );
              })}
              {(isTyping || isDeleting) && <span className="animate-pulse text-white">|</span>}
            </div>
          </div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-white">Николай Стоянов</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">За мен</a>
              <a href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors">Умения</a>
              <a href="#education" className="text-slate-300 hover:text-blue-400 transition-colors">Образование</a>
              <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Контакт</a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-slate-300 hover:text-blue-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-36 sm:w-24 sm:h-44 mx-auto mb-6 relative">
              {/* iPhone 3D Frame */}
              <div className="relative w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl shadow-2xl shadow-blue-500/30 border-2 border-slate-700 transform perspective-1000" style={{animation: 'slideRotate 18s ease-in-out infinite'}}>
                {/* iPhone Screen */}
                <div className="absolute inset-2 bg-black rounded-2xl overflow-hidden">
                  {/* Screen Content */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex flex-col items-center justify-center p-2 relative">
                    {/* Animated Text Display */}
                    <div className="text-center space-y-2 animate-pulse transform" style={{transform: 'rotateY(0deg) rotateX(0deg) rotateZ(0deg)'}}>
                      <div className="text-white text-xs font-bold tracking-wide">
                        Nikolay Stoyanov
                      </div>
                      <div className="text-blue-400 text-xs font-mono">
                        +359897949326
                      </div>
                      <div className="text-green-400 text-xs font-light">
                        Front-End Developer
                      </div>
                      <div className="flex justify-center space-x-1 mt-2">
                        <div className="w-0.5 h-0.5 bg-blue-400 rounded-full animate-ping"></div>
                        <div className="w-0.5 h-0.5 bg-green-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-0.5 h-0.5 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                    
                    {/* Screen Reflection Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
                
                {/* iPhone Home Indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-slate-600 rounded-full"></div>
                
                {/* iPhone Side Buttons */}
                <div className="absolute left-0 top-8 w-0.5 h-4 bg-slate-700 rounded-r"></div>
                <div className="absolute left-0 top-14 w-0.5 h-3 bg-slate-700 rounded-r"></div>
                <div className="absolute left-0 top-18 w-0.5 h-3 bg-slate-700 rounded-r"></div>
                <div className="absolute right-0 top-10 w-0.5 h-6 bg-slate-700 rounded-l"></div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Николай Стоянов
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-400 font-semibold mb-6 drop-shadow-md">
              Junior Front-End Developer
            </p>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed drop-shadow-sm px-4">
              Мотивиран и амбициозен младши специалист с умения в областта на програмирането 
              и анализирането на данни. Завърших специализирано обучение по Front-End разработка 
              в AlphaTraining Германия и продължавам активно обучението си в SoftUni България.
            </p>
          </div>
          <div className="flex justify-center">
            <button 
              onClick={handleContactClick}
              className="border border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
            >
              {showPhone ? '+359897949326' : 'Свържи се с мен'}
            </button>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-800/30 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12 drop-shadow-lg">Резюме</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-600/50">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Мотивиран и амбициозен младши специалист с умения в областта на програмирането и анализирането на данни, 
              придобити от интензивни курсове в <span className="text-blue-400 font-semibold">alfatraining в Германия</span> и 
              <span className="text-green-400 font-semibold"> SoftUni България</span>. Завършил съм специализирано обучение по 
              Front-End разработка и Програмиране с HTML, CSS, JavaScript, React, Java и Python с отлични резултати, което ми 
              осигури силна основа за работа с данни, процеси и автоматизация.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Постоянното ми желание за учене и развитие е подкрепено от курсовете ми по 
              <span className="text-purple-400 font-semibold"> AI Integrations for Developers</span>, 
              <span className="text-blue-400 font-semibold"> Programming Fundamentals with JavaScript</span> и 
              <span className="text-green-400 font-semibold"> Programming Fundamentals</span> в SoftUni, а в момента се обучавам и по 
              <span className="text-cyan-400 font-semibold"> Vibe Coding</span>.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Притежавам умения за самостоятелна работа, бързо усвояване на нови технологии и имам силен афинитет към 
              решаването на комплексни задачи. Търся възможност да приложа своите знания в областта на 
              <span className="text-orange-400 font-semibold"> BI и автоматизацията</span>, за да подпомогна развитието на вашата компания.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-800/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg flex-1 text-center">За мен</h2>
            <button 
              onClick={scrollToTop}
              className="bg-blue-600/20 hover:bg-blue-600/40 border border-blue-400/50 hover:border-blue-400 text-blue-400 hover:text-blue-300 p-2 rounded-lg transition-all duration-300 backdrop-blur-sm"
              title="Върни се в началото"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                Страстен съм по уеб разработката и анализирането на данни. Постоянно се стремя да разширя 
                знанията си в областта на Front-End развитието и автоматизацията. Моето обучение в 
                AlphaTraining - Германия ми даде солидна основа в съвременните уеб технологии.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Комбинирам теоретичните знания с практически проекти и имам опит в работа с AI технологии. 
                Притежавам умения за работа в екип и бързо усвояване на нови технологии.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 bg-slate-700/50 backdrop-blur-sm rounded-lg border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300">
                <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-white text-sm sm:text-base">Уеб Дизайн</h3>
                <p className="text-slate-300 text-xs sm:text-sm">HTML5, CSS3, Responsive Design</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-slate-700/50 backdrop-blur-sm rounded-lg border border-slate-600/50 hover:border-green-400/50 transition-all duration-300">
                <Code className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-white text-sm sm:text-base">JavaScript</h3>
                <p className="text-slate-300 text-xs sm:text-sm">DOM, AJAX, NodeJS, NPM</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-slate-700/50 backdrop-blur-sm rounded-lg border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300">
                <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-white text-sm sm:text-base">React</h3>
                <p className="text-slate-300 text-xs sm:text-sm">Components, Hooks, Redux</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-slate-700/50 backdrop-blur-sm rounded-lg border border-slate-600/50 hover:border-orange-400/50 transition-all duration-300">
                <Database className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-white text-sm sm:text-base">Data & AI</h3>
                <p className="text-slate-300 text-xs sm:text-sm">Python, Java, AI Integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg flex-1 text-center">Професионални умения</h2>
            <button 
              onClick={scrollToTop}
              className="bg-green-600/20 hover:bg-green-600/40 border border-green-400/50 hover:border-green-400 text-green-400 hover:text-green-300 p-2 rounded-lg transition-all duration-300 backdrop-blur-sm"
              title="Върни се в началото"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Front-End разработка</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs sm:text-sm">HTML5</span>
                  <div className="w-16 sm:w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs sm:text-sm">CSS3 & Responsive</span>
                  <div className="w-16 sm:w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs sm:text-sm">Flexbox & Grid</span>
                  <div className="w-16 sm:w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs sm:text-sm">One-page Sites</span>
                  <div className="w-16 sm:w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-600/50 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">JavaScript</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs sm:text-sm">DOM манипулация</span>
                  <div className="w-16 sm:w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs sm:text-sm">AJAX & Fetch</span>
                  <div className="w-16 sm:w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs sm:text-sm">NodeJS & NPM</span>
                  <div className="w-16 sm:w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs sm:text-sm">Async & Promises</span>
                  <div className="w-16 sm:w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Библиотеки & Фреймуърци</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs sm:text-sm">React</span>
                  <div className="w-16 sm:w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs sm:text-sm">Redux Toolkit</span>
                  <div className="w-16 sm:w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs sm:text-sm">VueJS</span>
                  <div className="w-16 sm:w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs sm:text-sm">jQuery</span>
                  <div className="w-16 sm:w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-600/50 hover:border-green-400/50 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Програмиране</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs sm:text-sm">Python</span>
                  <div className="w-16 sm:w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs sm:text-sm">Python GUI</span>
                  <div className="w-16 sm:w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs sm:text-sm">Java OOP</span>
                  <div className="w-16 sm:w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs sm:text-sm">SQL & MySQL</span>
                  <div className="w-16 sm:w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Skills */}
          <div className="mt-8 sm:mt-12 grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">AI & Автоматизация</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-300 text-sm sm:text-base">AI Integrations for Developers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-300 text-sm sm:text-base">Работа с изкуствен интелект в работния процес</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-300 text-sm sm:text-base">BI и автоматизация</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-300 text-sm sm:text-base">Анализиране на данни</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-600/50 hover:border-indigo-400/50 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Soft Skills</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-slate-300 text-sm sm:text-base">Самостоятелна работа</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-slate-300 text-sm sm:text-base">Работа в екип</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-slate-300 text-sm sm:text-base">Бързо усвояване на нови технологии</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-slate-300 text-sm sm:text-base">Решаване на комплексни задачи</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-800/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg text-center">Образование и обучение</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-slate-700/50 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-400/30">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Alfatraining - Германия</h3>
                  <p className="text-blue-600 font-medium mb-4 sm:mb-6 text-sm sm:text-base">Професионална квалификация с обща продължителност 1280 учебни часа</p>
                  
                  <div className="space-y-6">
                    {/* Front-End Developer / Web Designer */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-base sm:text-lg font-semibold text-white">Front-End Developer / Web Designer</h4>
                        <span className="text-blue-400 text-xs sm:text-sm font-medium">19.08.2024 – 06.12.2024</span>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm mb-2">640 учебни часа</p>
                      <p className="text-slate-300 text-xs sm:text-sm mb-3">Включва задълбочено обучение по Web Design (HTML, CSS) и JavaScript Developer</p>
                    </div>
                    
                    {/* React JavaScript-Библиотека */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-base sm:text-lg font-semibold text-white">React JavaScript-Библиотека</h4>
                        <span className="text-blue-400 text-xs sm:text-sm font-medium">09.12.2024 – 10.01.2025</span>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm mb-2">160 учебни часа</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-slate-300 text-xs sm:text-sm">Оценка:</span>
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs sm:text-sm font-medium">"много добър" (82 точки)</span>
                      </div>
                    </div>
                    
                    {/* Java-Entwickler:in */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-base sm:text-lg font-semibold text-white">Java-Entwickler:in</h4>
                        <span className="text-blue-400 text-xs sm:text-sm font-medium">13.01.2025 – 07.03.2025</span>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm mb-2">320 учебни часа</p>
                      <p className="text-slate-300 text-xs sm:text-sm mb-2">Курс по обектно-ориентирано програмиране с Java</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-slate-300 text-xs sm:text-sm">Оценка:</span>
                        <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs sm:text-sm font-medium">"задоволителен" (75 точки)</span>
                      </div>
                    </div>
                    
                    {/* Програмиране с Python */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-base sm:text-lg font-semibold text-white">Програмиране с Python</h4>
                        <span className="text-blue-400 text-xs sm:text-sm font-medium">10.03.2025 – 04.04.2025</span>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm mb-2">160 учебни часа</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-slate-300 text-xs sm:text-sm">Оценка:</span>
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs sm:text-sm font-medium">"много добър" (93 точки)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-600/50 hover:border-green-400/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/20 p-3 rounded-lg border border-green-400/30">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Software University (SoftUni)</h3>
                  <p className="text-green-600 font-medium mb-3 text-sm sm:text-base">Завършени и текущи обучения</p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-green-500/10 border border-green-400/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">Programming Basics with JavaScript</h4>
                        <p className="text-xs sm:text-sm text-slate-300">Завършен успешно</p>
                      </div>
                      <div className="text-green-600 font-bold">✓</div>
                    </div>
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-green-500/10 border border-green-400/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">JS Programming Fundamentals</h4>
                        <p className="text-xs sm:text-sm text-slate-300">Завършен успешно</p>
                      </div>
                      <div className="text-green-600 font-bold">✓</div>
                    </div>
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-purple-500/10 border border-purple-400/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">AI Integrations for Developers</h4>
                        <p className="text-xs sm:text-sm text-slate-300">Завършен успешно</p>
                      </div>
                      <div className="text-purple-600 font-bold">✓</div>
                    </div>
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-cyan-500/10 border border-cyan-400/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">Vibe Coding</h4>
                        <p className="text-xs sm:text-sm text-slate-300">В процес на обучение</p>
                      </div>
                      <div className="text-cyan-600 font-bold">⟳</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Back to Top Button for Education Section */}
      {showEducationButton && (
        <button 
          onClick={scrollToTop}
          className="fixed top-4 right-4 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-400/50 hover:border-purple-400 text-purple-400 hover:text-purple-300 p-2 rounded-lg transition-all duration-300 backdrop-blur-sm z-50"
          title="Върни се в началото"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-between items-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg flex-1 text-center">Свържи се с мен</h2>
            <button 
              onClick={scrollToTop}
              className="bg-cyan-600/20 hover:bg-cyan-600/40 border border-cyan-400/50 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 p-2 rounded-lg transition-all duration-300 backdrop-blur-sm"
              title="Върни се в началото"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300">
              <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Email</h3>
              <p className="text-slate-300 text-sm sm:text-base break-all">lobido1988@gmail.com</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-600/50 hover:border-green-400/50 transition-all duration-300">
              <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Телефон</h3>
              <p className="text-slate-300 text-sm sm:text-base">0897949326</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Локация</h3>
              <p className="text-slate-300 text-sm sm:text-base">България, град Русе, 7016, ул. Клисура 19</p>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-lg transition-colors border border-slate-600/50 hover:border-slate-500">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors border border-blue-500/50 hover:border-blue-400">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/90 backdrop-blur-sm text-white py-6 sm:py-8 px-4 sm:px-6 border-t border-slate-700/50 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300 text-sm sm:text-base">
            © 2024 Николай Стоянов. Всички права запазени.
          </p>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Направено с React и Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;