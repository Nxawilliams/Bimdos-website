import React from 'react';
import { ProjectForm } from '../components/ProjectForm/ProjectForm';
import { Navbar } from '../components/Navbar';

export function StartProject() {
  return (
    <>
      <header className="container mx-auto px-6 py-8">
        <Navbar />
      </header>
      <ProjectForm />
    </>
  );
}