export interface WCAGGuideline {
  id: string;
  name: string;
  level: 'A' | 'AA' | 'AAA';
  description: string;
}

export interface AccessibilityViolation {
  guidelineId: string;
  element: string;
  impact: 'critical' | 'serious' | 'moderate' | 'minor';
  description: string;
  recommendation: string;
}

export interface AccessibilityReport {
  url: string;
  timestamp: string;
  score: number;
  violations: AccessibilityViolation[];
  documentType?: 'webpage' | 'pdf' | 'word';
  imageAnalysis?: ImageAnalysisResult[];
}

export interface ImageAnalysisResult {
  imageUrl: string;
  altTextPresent: boolean;
  suggestedAltText?: string;
  colorContrast?: {
    ratio: number;
    passes: boolean;
  };
}