import React from 'react';
import { Globe, Rocket, Shield, Code2, Palette, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Globe className="h-8 w-8 text-blue-400" />,
    title: "Web Development",
    description: "Custom websites built with modern technologies for optimal performance and user experience."
  },
  {
    icon: <Code2 className="h-8 w-8 text-blue-400" />,
    title: "Web Applications",
    description: "Scalable and secure web applications tailored to your business needs."
  },
  {
    icon: <Palette className="h-8 w-8 text-blue-400" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user engagement and satisfaction."
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-400" />,
    title: "Security & Maintenance",
    description: "Ongoing support to keep your digital assets secure and up-to-date."
  },
  {
    icon: <Rocket className="h-8 w-8 text-blue-400" />,
    title: "Performance Optimization",
    description: "Speed optimization and technical improvements for better user experience."
  },
  {
    icon: <LineChart className="h-8 w-8 text-blue-400" />,
    title: "Analytics & SEO",
    description: "Data-driven strategies to improve visibility and track performance."
  }
];

export function Services() {
  return (
    <section className="container mx-auto px-6 py-24" id="services">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-400">Comprehensive digital solutions to help your business thrive in the modern world.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-slate-800/50 p-8 rounded-2xl hover:bg-slate-700/50 transition-all hover:transform hover:-translate-y-1"
          >
            <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}