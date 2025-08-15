import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Yapay Zekanın Geleceği Burada</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Yapay Zeka ile
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Geleceği Şekillendirin
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            En gelişmiş AI teknolojileri ile işletmenizi dönüştürün. Makine öğrenmesi, doğal dil işleme ve derin öğrenme çözümlerimizle rekabet avantajı kazanın.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => window.location.href = '/login'}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
            >
              <span>Ücretsiz Deneyin</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors">
              <div className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center group-hover:shadow-xl transition-shadow">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="font-semibold">Demo İzleyin</span>
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="relative mt-16">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-25 animate-pulse animation-delay-1000"></div>
          
          {/* Main Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold">NLP</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Doğal Dil İşleme</h3>
                  <p className="text-gray-600 text-sm">Metin analizi ve anlama</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold">CV</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Bilgisayarlı Görü</h3>
                  <p className="text-gray-600 text-sm">Görüntü tanıma ve analiz</p>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold">ML</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Makine Öğrenmesi</h3>
                  <p className="text-gray-600 text-sm">Akıllı tahmin modelleri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;