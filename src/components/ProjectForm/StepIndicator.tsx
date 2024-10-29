import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="flex justify-between items-center mb-12 max-w-3xl mx-auto">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                index < currentStep
                  ? 'bg-blue-500'
                  : index === currentStep
                  ? 'bg-blue-500/20 border-2 border-blue-500'
                  : 'bg-slate-800'
              }`}
            >
              {index < currentStep ? (
                <Check className="h-5 w-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span className="text-sm text-gray-400">{step}</span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-[2px] w-24 mx-4 ${
                index < currentStep ? 'bg-blue-500' : 'bg-slate-800'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}