import React from 'react';
import type { LighthouseMetrics } from '../types/lighthouse';

interface MetricProps {
  label: string;
  score: number;
}

function Metric({ label, score }: MetricProps) {
  const getColorClass = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 50) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="flex items-center justify-between p-4 border-b last:border-b-0">
      <span className="text-gray-700">{label}</span>
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClass(score)}`}>
        {score}
      </span>
    </div>
  );
}

interface ResultCardProps {
  metrics: LighthouseMetrics;
}

export function ResultCard({ metrics }: ResultCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 bg-gray-50 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Lighthouse Results</h2>
      </div>
      <div className="divide-y">
        <Metric label="Performance" score={metrics.performance} />
        <Metric label="Accessibility" score={metrics.accessibility} />
        <Metric label="Best Practices" score={metrics.bestPractices} />
        <Metric label="SEO" score={metrics.seo} />
      </div>
    </div>
  );
}