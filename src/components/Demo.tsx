import React, { useState } from 'react';
import { MessageSquare, Send, Mic, Image, FileText } from 'lucide-react';

const Demo = () => {
  const [activeTab, setActiveTab] = useState('text');
  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const tabs = [
    { id: 'text', label: 'Metin Analizi', icon: MessageSquare },
    { id: 'voice', label: 'Ses Tanıma', icon: Mic },
    { id: 'image', label: 'Görüntü İşleme', icon: Image },
    { id: 'document', label: 'Doküman Analizi', icon: FileText }
  ];

  const handleDemo = async () => {
    if (!inputText.trim()) return;
    
    setIsProcessing(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Canlı Demo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI teknolojilerimizi hemen test edin ve gücünü deneyimleyin
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 bg-gray-100 rounded-2xl p-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Demo Interface */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-inner">
            {activeTab === 'text' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Analiz edilecek metni girin:
                  </label>
                  <div className="relative">
                    <textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Örnek: Bu ürün hakkında ne düşünüyorsunuz? Çok beğendim, kaliteli ve hızlı teslimat."
                      className="w-full h-32 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>
                
                <button
                  onClick={handleDemo}
                  disabled={isProcessing || !inputText.trim()}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>AI Analiz Ediyor...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Analiz Et</span>
                    </>
                  )}
                </button>

                {isProcessing && (
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="animate-pulse w-8 h-8 bg-blue-200 rounded-full"></div>
                      <div className="text-gray-600">AI analiz gerçekleştiriyor...</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded-full animate-pulse"></div>
                      <div className="h-2 bg-gray-200 rounded-full animate-pulse w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded-full animate-pulse w-1/2"></div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'voice' && (
              <div className="text-center py-16">
                <Mic className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ses Tanıma Demo</h3>
                <p className="text-gray-600 mb-6">Mikrofon simgesi üzerine tıklayarak konuşmaya başlayın</p>
                <button className="bg-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-600 transition-colors">
                  🔴 Kayıt Başlat
                </button>
              </div>
            )}

            {activeTab === 'image' && (
              <div className="text-center py-16 border-2 border-dashed border-gray-300 rounded-xl">
                <Image className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Görüntü Yükleyin</h3>
                <p className="text-gray-600 mb-6">PNG, JPG veya GIF formatında görüntü yükleyin</p>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  Dosya Seç
                </button>
              </div>
            )}

            {activeTab === 'document' && (
              <div className="text-center py-16">
                <FileText className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Doküman Analizi</h3>
                <p className="text-gray-600 mb-6">PDF, Word veya Text dosyanızı yükleyin</p>
                <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
                  Doküman Yükle
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;