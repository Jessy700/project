import React from 'react';
import { Header } from './components/Header';
import { UrlAnalyzer } from './components/UrlAnalyzer';
import { DocumentUploader } from './components/DocumentUploader';
import { AccessibilityDashboard } from './components/AccessibilityDashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Header />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <UrlAnalyzer />
          <DocumentUploader />
        </div>

        <AccessibilityDashboard />
      </div>
    </div>
  );
}

export default App;