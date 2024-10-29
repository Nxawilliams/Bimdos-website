import React, { useState } from 'react';
import { Globe, Rocket, Palette, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { ProjectTypeCard } from './ProjectTypeCard';
import { StepIndicator } from './StepIndicator';

const projectTypes = [
  {
    icon: <Globe className="h-8 w-8 text-blue-400" />,
    title: 'Website Development',
    description: 'Custom website built with modern technologies',
  },
  {
    icon: <Rocket className="h-8 w-8 text-blue-400" />,
    title: 'Web Application',
    description: 'Full-featured web application with complex functionality',
  },
  {
    icon: <Palette className="h-8 w-8 text-blue-400" />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interface design',
  },
];

const steps = ['Project Type', 'Requirements', 'Contact Details', 'Review'];

export function ProjectForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [requirements, setRequirements] = useState('');
  const [contact, setContact] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(current => current + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(current => current - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      projectType: selectedType !== null ? projectTypes[selectedType].title : null,
      requirements,
      contact,
    });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Start Your Project</h1>
      <StepIndicator currentStep={currentStep} steps={steps} />

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
        {currentStep === 0 && (
          <div className="grid md:grid-cols-3 gap-6">
            {projectTypes.map((type, index) => (
              <ProjectTypeCard
                key={index}
                {...type}
                selected={selectedType === index}
                onClick={() => setSelectedType(index)}
              />
            ))}
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-6">
            <label className="block">
              <span className="text-lg font-medium mb-2 block">Project Requirements</span>
              <textarea
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                className="w-full h-48 bg-slate-800/50 rounded-xl p-4 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                placeholder="Describe your project requirements, goals, and any specific features you need..."
              />
            </label>
          </div>
        )}

        {currentStep === 2 && (
          <div className="grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className="text-sm font-medium mb-1 block">Full Name</span>
              <input
                type="text"
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
                className="w-full bg-slate-800/50 rounded-xl p-4 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium mb-1 block">Email Address</span>
              <input
                type="email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                className="w-full bg-slate-800/50 rounded-xl p-4 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium mb-1 block">Company Name</span>
              <input
                type="text"
                value={contact.company}
                onChange={(e) => setContact({ ...contact, company: e.target.value })}
                className="w-full bg-slate-800/50 rounded-xl p-4 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium mb-1 block">Budget Range</span>
              <select
                value={contact.budget}
                onChange={(e) => setContact({ ...contact, budget: e.target.value })}
                className="w-full bg-slate-800/50 rounded-xl p-4 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors appearance-none"
              >
                <option value="">Select a range</option>
                <option value="5-10k">$500 - $1000</option>
                <option value="10-25k">$1000 - $2500</option>
                <option value="25-50k">$2500 - $5000</option>
                <option value="50k+">$5000+</option>
              </select>
            </label>
          </div>
        )}

        {currentStep === 3 && (
          <div className="bg-slate-800/50 rounded-xl p-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Project Type</h3>
              <p className="text-gray-400">
                {selectedType !== null ? projectTypes[selectedType].title : 'Not selected'}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Requirements</h3>
              <p className="text-gray-400">{requirements || 'No requirements specified'}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Contact Information</h3>
                <div className="space-y-2 text-gray-400">
                  <p>Name: {contact.name}</p>
                  <p>Email: {contact.email}</p>
                  <p>Company: {contact.company}</p>
                  <p>Budget: {contact.budget}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between pt-8">
          <button
            type="button"
            onClick={handleBack}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors ${
              currentStep === 0
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-slate-800'
            }`}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="h-5 w-5" />
            Back
          </button>
          
          {currentStep === steps.length - 1 ? (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full flex items-center gap-2 transition-colors"
            >
              Submit Project
              <Send className="h-5 w-5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full flex items-center gap-2 transition-colors"
              disabled={currentStep === 0 && selectedType === null}
            >
              Next Step
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}