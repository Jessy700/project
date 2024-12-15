import React from 'react';
import { useAccessibilityStore } from '../store/accessibilityStore';
import { AccessibilityScore } from './AccessibilityScore';
import { ViolationsList } from './ViolationsList';
import { DocumentAnalysis } from './DocumentAnalysis';

export function AccessibilityDashboard() {
  const { currentReport, isLoading, error } = useAccessibilityStore();

  if (isLoading) {
    return <div className="text-center py-8">Analyzing...</div>;
  }

  if (error) {
    return <div className="text-red-600 py-4">{error}</div>;
  }

  if (!currentReport) {
    return null;
  }

  return (
    <div className="space-y-6">
      <AccessibilityScore score={currentReport.score} />
      <ViolationsList violations={currentReport.violations} />
      {currentReport.documentType !== 'webpage' && (
        <DocumentAnalysis report={currentReport} />
      )}
    </div>
  );
}