import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Mic, Paperclip, MoreVertical, ArrowLeft, Settings, History, Trash2, Plus } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  model?: string;
}

interface ChatHistory {
  id: string;
  title: string;
  messages: Message[];
  lastMessage: Date;
}

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Merhaba! Ben AI Vision asistanınızım. Size nasıl yardımcı olabilirim?',
      sender: 'ai',
      timestamp: new Date(),
      model: 'gemini-pro'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedModel, setSelectedModel] = useState('gemini-pro');
  const [showSettings, setShowSettings] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([
    {
      id: '1',
      title: 'AI Yetenekleri Hakkında',
      messages: [],
      lastMessage: new Date(Date.now() - 86400000)
    },
    {
      id: '2', 
      title: 'Proje Önerileri',
      messages: [],
      lastMessage: new Date(Date.now() - 172800000)
    }
  ]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [userProfile] = useState<UserProfile>({
    name: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const aiModels = [
    { id: 'gemini-pro', name: 'Gemini Pro', description: 'En gelişmiş model' },
    { id: 'gemini-pro-vision', name: 'Gemini Pro Vision', description: 'Görüntü analizi destekli' },
    { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro', description: 'Uzun bağlam desteği' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateWithGemini = async (prompt: string): Promise<string> => {
    try {
      // Gemini API simülasyonu - gerçek implementasyon için API key gerekli
      const responses = [
        `Bu konuda size yardımcı olmaktan mutluluk duyarım. ${selectedModel} modelini kullanarak analiz ediyorum...`,
        `Gemini AI olarak, bu sorunuza detaylı bir yanıt verebilirim. İşte önerilerim:`,
        `${selectedModel} ile analiz ettiğimde, bu durumda en iyi yaklaşım şu olabilir:`,
        `Mükemmel bir soru! Gemini'nin güçlü yeteneklerini kullanarak size şu bilgileri sunabilirim:`,
        `Bu konuda elimde güncel veriler var. ${selectedModel} modeliyle işlediğim bilgiler:`,
        `Harika! Bu soruyu Gemini AI olarak analiz etmeme izin verin:`
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      // Simulated API delay
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
      
      return randomResponse;
    } catch (error) {
      return 'Üzgünüm, şu anda bir teknik sorun yaşıyorum. Lütfen daha sonra tekrar deneyin.';
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      const aiResponse = await generateWithGemini(inputText);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
        model: selectedModel
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.',
        sender: 'ai',
        timestamp: new Date(),
        model: selectedModel
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('tr-TR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Bugün';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Dün';
    } else {
      return date.toLocaleDateString('tr-TR');
    }
  };

  const startNewChat = () => {
    setMessages([{
      id: '1',
      text: 'Merhaba! Ben AI Vision asistanınızım. Size nasıl yardımcı olabilirim?',
      sender: 'ai',
      timestamp: new Date(),
      model: selectedModel
    }]);
    setCurrentChatId(null);
    setShowHistory(false);
  };

  const loadChatHistory = (chatId: string) => {
    const chat = chatHistory.find(c => c.id === chatId);
    if (chat) {
      setMessages(chat.messages);
      setCurrentChatId(chatId);
      setShowHistory(false);
    }
  };

  const deleteChatHistory = (chatId: string) => {
    setChatHistory(prev => prev.filter(c => c.id !== chatId));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Chat History */}
      <div className={`${showHistory ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden bg-white border-r border-gray-200`}>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Sohbet Geçmişi</h2>
            <button
              onClick={startNewChat}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Plus className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        <div className="p-4 space-y-2 max-h-[calc(100vh-120px)] overflow-y-auto">
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              className="group p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
              onClick={() => loadChatHistory(chat.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 truncate">{chat.title}</h3>
                  <p className="text-sm text-gray-500">{formatDate(chat.lastMessage)}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteChatHistory(chat.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded transition-all"
                >
                  <Trash2 className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowHistory(!showHistory)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <History className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-gray-900">AI Vision Asistan</h1>
                <p className="text-sm text-green-600">● {selectedModel}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Model Selection */}
            <div className="relative">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              
              {showSettings && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-3">AI Model Seçimi</h3>
                    <div className="space-y-2">
                      {aiModels.map((model) => (
                        <button
                          key={model.id}
                          onClick={() => {
                            setSelectedModel(model.id);
                            setShowSettings(false);
                          }}
                          className={`w-full text-left p-3 rounded-lg transition-colors ${
                            selectedModel === model.id
                              ? 'bg-blue-50 border-2 border-blue-200'
                              : 'hover:bg-gray-50 border-2 border-transparent'
                          }`}
                        >
                          <div className="font-medium text-gray-900">{model.name}</div>
                          <div className="text-sm text-gray-500">{model.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-3 bg-gray-50 rounded-lg px-3 py-2">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-sm">
                <div className="font-medium text-gray-900">{userProfile.name}</div>
                <div className="text-gray-500">{userProfile.email}</div>
              </div>
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 ${
                message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.sender === 'user' 
                  ? 'bg-blue-600' 
                  : 'bg-gradient-to-br from-blue-600 to-purple-600'
              }`}>
                {message.sender === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              
              <div className={`max-w-xs lg:max-w-md ${
                message.sender === 'user' ? 'text-right' : ''
              }`}>
                <div className={`rounded-2xl px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-200 text-gray-900'
                }`}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <p className="text-xs text-gray-500">
                    {formatTime(message.timestamp)}
                  </p>
                  {message.model && message.sender === 'ai' && (
                    <span className="text-xs text-gray-400">• {message.model}</span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-end space-x-3">
              <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              
              <div className="flex-1 relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Mesajınızı yazın..."
                  className="w-full resize-none border border-gray-300 rounded-2xl px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 focus:border-transparent max-h-32"
                  rows={1}
                  style={{ minHeight: '48px' }}
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
              </div>
              
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-2">
              {selectedModel} modeli kullanılıyor • AI asistanı size yardımcı olmak için burada
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;