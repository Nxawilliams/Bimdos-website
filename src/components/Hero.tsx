import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        We Build <span className="text-blue-400">Digital Excellence</span> for Modern Businesses
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Transform your digital presence with cutting-edge web solutions that drive growth and engage users.
      </p>
      <Link
        to="/start-project"
        className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors"
      >
        Start Your Project
        <ChevronRight className="h-5 w-5" />
      </Link>
    </div>
  );
}