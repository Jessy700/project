import React from 'react';
import type { AccessibilityViolation } from '../types/accessibility';

interface ViolationsListProps {
  violations: AccessibilityViolation[];
}

export function ViolationsList({ violations }: ViolationsListProps) {
  if (violations.length === 0) {
    return (
      <div className="bg-green-50 p-4 rounded-lg">
        <p className="text-green-700">No accessibility violations found!</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Accessibility Issues</h2>
      <div className="space-y-4">
        {violations.map((violation, index) => (
          <div
            key={index}
            className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium text-red-800">
                {violation.guidelineId}: {violation.impact}
              </h3>
              <span className="px-2 py-1 text-xs font-medium text-red-800 bg-red-100 rounded-full">
                {violation.impact}
              </span>
            </div>
            <p className="mt-2 text-red-700">{violation.description}</p>
            <div className="mt-2 text-sm text-red-600">
              <strong>Recommendation:</strong> {violation.recommendation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}