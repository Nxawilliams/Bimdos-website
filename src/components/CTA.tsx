import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Start your project today and see your vision come to life.
          </p>
          <Link 
            to="/start-project"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 transition-all hover:gap-4"
          >
            Start Your Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}