import React from 'react';
import { Gauge } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <Gauge className="w-12 h-12 text-blue-600" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Website Performance Analyzer
      </h1>
      <p className="text-gray-600">
        Analyze your website's performance, accessibility, best practices, and SEO
      </p>
    </div>
  );
}