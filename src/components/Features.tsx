import React from 'react';
import { MapPin, Share2, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Scopri Location',
    description: 'Trova i migliori spot per pescare vicino a te con mappe interattive e recensioni della comunità.'
  },
  {
    icon: Share2,
    title: 'Condividi le Catture',
    description: 'Pubblica le tue catture e i tuoi successi, ricevi feedback e incoraggiamento da altri pescatori.'
  },
  {
    icon: Users,
    title: 'Comunità Globale',
    description: 'Connettiti con appassionati di pesca da tutto il mondo e scambia consigli e tecniche.'
  },
  {
    icon: TrendingUp,
    title: 'Traccia Progressi',
    description: 'Monitora le tue catture, le specie trovate e i tuoi progressi nel tempo.'
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Funzionalità Principali</h2>
          <p className="text-xl text-gray-600">Tutto ciò che serve per vivere un'esperienza di pesca straordinaria</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="mb-4 inline-block p-3 bg-blue-100 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
