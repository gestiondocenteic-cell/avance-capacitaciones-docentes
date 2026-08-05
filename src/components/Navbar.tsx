import React from 'react';
import { GraduationCap, Search, BarChart3, Calendar, Award, BookOpen } from 'lucide-react';

interface NavbarProps {
  activeTab: 'search' | 'dashboard' | 'calendar';
  setActiveTab: (tab: 'search' | 'dashboard' | 'calendar') => void;
  totalDocentes: number;
  excelenteCount: number;
  promedioParticipacion: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  totalDocentes,
  excelenteCount,
  promedioParticipacion,
}) => {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('search')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                Capacitación Docente
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  2026
                </span>
              </h1>
              <p className="text-xs text-slate-400">Universidad Continental • Seguimiento de Avance</p>
            </div>
          </div>

          {/* Quick Metrics Bar on Desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-xs bg-slate-800/60 px-4 py-1.5 rounded-lg border border-slate-700/50">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-400">Docentes:</span>
              <span className="font-semibold text-slate-200">{totalDocentes}</span>
            </div>
            <div className="h-3 w-px bg-slate-700" />
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-slate-400">Excelente (100%):</span>
              <span className="font-semibold text-emerald-400">{excelenteCount}</span>
            </div>
            <div className="h-3 w-px bg-slate-700" />
            <div className="flex items-center space-x-2">
              <span className="text-slate-400">Avance Promedio:</span>
              <span className="font-semibold text-teal-300">{promedioParticipacion}%</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex space-x-1 sm:space-x-2">
            <button
              onClick={() => setActiveTab('search')}
              className={`flex items-center space-x-1.5 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'search'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Buscar Docente</span>
            </button>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center space-x-1.5 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Panel General</span>
            </button>

            <button
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center space-x-1.5 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'calendar'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden md:inline">Calendario Cursos</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
