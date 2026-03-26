import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Pronto a iniziare?</h2>
        <p className="text-lg text-blue-100 mb-8">Unisciti a migliaia di pescatori e scopri nuove avventure ogni giorno.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Crea un Account
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            variant="ghost" 
            size="lg"
            className="text-white border-white hover:bg-blue-700"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contattaci
          </Button>
        </div>

        <p className="text-sm text-blue-100">Nessuna carta di credito richiesta. Inizia gratuitamente.</p>
      </div>
    </section>
  );
}
