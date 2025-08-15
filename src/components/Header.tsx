import React, { useState } from 'react';
import { Menu, X, Brain, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Vision
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Ana Sayfa
            </a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                <span>Çözümler</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">Doğal Dil İşleme</a>
                <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">Görüntü Tanıma</a>
                <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">Ses Tanıma</a>
              </div>
            </div>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Özellikler
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Hakkımızda
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              İletişim
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => window.location.href = '/login'}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Giriş Yap
            </button>
            <button 
              onClick={() => window.location.href = '/login'}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
            >
              Başlayın
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 font-medium">Ana Sayfa</a>
              <a href="#solutions" className="block text-gray-700 hover:text-blue-600 font-medium">Çözümler</a>
              <a href="#features" className="block text-gray-700 hover:text-blue-600 font-medium">Özellikler</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 font-medium">Hakkımızda</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 font-medium">İletişim</a>
              <div className="pt-3 border-t space-y-3">
                <button 
                  onClick={() => window.location.href = '/login'}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                >
                  Giriş Yap
                </button>
                <button 
                  onClick={() => window.location.href = '/login'}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Başlayın
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;