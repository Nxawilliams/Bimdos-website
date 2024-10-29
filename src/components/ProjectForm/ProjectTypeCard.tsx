import React from 'react';
import { Check } from 'lucide-react';

interface ProjectTypeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export function ProjectTypeCard({ title, description, icon, selected, onClick }: ProjectTypeCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative p-6 rounded-2xl cursor-pointer transition-all ${
        selected
          ? 'bg-blue-500/10 border-2 border-blue-500'
          : 'bg-slate-800/50 border-2 border-transparent hover:border-blue-500/50'
      }`}
    >
      {selected && (
        <div className="absolute top-4 right-4">
          <Check className="h-5 w-5 text-blue-500" />
        </div>
      )}
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}