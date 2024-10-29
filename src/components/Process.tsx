import React from 'react';
import { MessageSquare, Users, Code2, Zap, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-400" />,
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and project requirements through in-depth consultation."
  },
  {
    icon: <Users className="h-8 w-8 text-blue-400" />,
    title: "Strategy",
    description: "Our team creates a comprehensive plan tailored to your needs, including technical architecture and design direction."
  },
  {
    icon: <Code2 className="h-8 w-8 text-blue-400" />,
    title: "Development",
    description: "We build your solution using modern technologies, following best practices and maintaining clear communication."
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-400" />,
    title: "Launch",
    description: "After thorough testing, we deploy your project and provide training and documentation for smooth operation."
  }
];

export function Process() {
  return (
    <section className="container mx-auto px-6 py-24" id="process">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Process</h2>
        <p className="text-gray-400">A streamlined approach to delivering exceptional results for your digital projects.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative group">
            <div className="bg-slate-800/50 p-8 rounded-2xl hover:bg-slate-700/50 transition-all hover:transform hover:-translate-y-1">
              <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
            
            {index < steps.length - 1 && (
              <div className="hidden lg:flex absolute top-1/2 -right-4 items-center justify-center w-8">
                <ArrowRight className="h-6 w-6 text-blue-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}