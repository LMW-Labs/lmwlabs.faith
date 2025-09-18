import React from 'react';
import { Brain, Zap, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Integration',
      description: 'Seamlessly integrate advanced AI capabilities into your existing workflows and systems for enhanced automation and intelligent insights.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Custom Development',
      description: 'Bespoke applications built from the ground up to match your specific business requirements and operational needs.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Scalable Solutions',
      description: 'Future-proof applications designed to grow with your business and adapt to changing market demands.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Innovating with Intelligence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At LMW Labs, we specialize in creating custom business applications that leverage the power of AI to 
            streamline operations, enhance decision-making, and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-purple-600 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;