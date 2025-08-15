import React from 'react';
import { Brain, Zap, Shield, Users, BarChart3, Cpu } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Gelişmiş AI Algoritmaları',
      description: 'Son teknoloji makine öğrenmesi ve derin öğrenme algoritmaları ile en karmaşık problemlere çözüm üretiyoruz.',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Yüksek Performans',
      description: 'Optimize edilmiş altyapımız sayesinde milisaniyeler içinde sonuç alın ve işlemlerinizi hızlandırın.',
      color: 'yellow'
    },
    {
      icon: Shield,
      title: 'Güvenlik & Gizlilik',
      description: 'Verileriniz end-to-end şifreleme ile korunur. GDPR uyumlu sistemlerimizle tam güvenlik sağlıyoruz.',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Kolay Entegrasyon',
      description: 'RESTful API\'ler ve SDK\'lar ile mevcut sistemlerinize kolayca entegre edin, kod yazmanıza gerek yok.',
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Gerçek Zamanlı Analytics',
      description: 'Detaylı analitik raporları ile AI modellerinizin performansını izleyin ve optimize edin.',
      color: 'red'
    },
    {
      icon: Cpu,
      title: 'Ölçeklenebilir Mimari',
      description: 'Startup\'tan enterprise\'a kadar her ölçekte kullanılabilir, esnek ve güçlü altyapı çözümleri.',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      yellow: 'bg-yellow-100 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      red: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white',
      indigo: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Neden AI Vision?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İşletmenizi bir sonraki seviyeye taşıyacak güçlü AI araçları ve özellikler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border hover:border-gray-200"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(feature.color)}`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-gray-600">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                1M+
              </div>
              <div className="text-gray-600">İşlenen Veri</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-gray-600">Uptime Garantisi</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-600">Ülkede Hizmet</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;