import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Fish } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center gap-2 mb-6 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
          <Fish className="w-5 h-5 text-cyan-500" />
          <span className="text-sm font-medium text-gray-700">Benvenuto su Fishing Project</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Scopri il Mondo della <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Pesca Moderna</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Una piattaforma innovativa per appassionati di pesca. Scopri le migliori location, condividi le tue catture e connettiti con una comunità globale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
          >
            Inizia ora
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gray-300 hover:bg-gray-50"
          >
            Scopri di più
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-blue-600">50K+</div>
            <div className="text-sm text-gray-600">Pescatori Attivi</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-cyan-600">1000+</div>
            <div className="text-sm text-gray-600">Location</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-orange-600">100K+</div>
            <div className="text-sm text-gray-600">Catture Condivise</div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="bg-white rounded-2xl p-2 shadow-2xl border border-gray-100">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl h-96 flex items-center justify-center">
            <Fish className="w-32 h-32 text-cyan-400 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
