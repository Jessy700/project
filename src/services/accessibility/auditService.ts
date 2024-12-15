import type { AccessibilityReport, AccessibilityViolation } from '../../types/accessibility';
import { ImageAnalysisService } from '../azure/imageAnalysis';
import { DocumentAnalysisService } from '../azure/documentAnalysis';

export class AccessibilityAuditService {
  private imageAnalysis: ImageAnalysisService;
  private documentAnalysis: DocumentAnalysisService;

  constructor() {
    this.imageAnalysis = new ImageAnalysisService();
    this.documentAnalysis = new DocumentAnalysisService();
  }

  async auditWebpage(url: string): Promise<AccessibilityReport> {
    try {
      // Call Azure Function for Lighthouse accessibility audit
      const response = await fetch(`${import.meta.env.VITE_AZURE_FUNCTION_APP_URL}/api/audit`, {
        method: 'POST',
        body: JSON.stringify({ url, auditType: 'accessibility' })
      });

      const auditResult = await response.json();
      
      // Process and return the accessibility report
      return {
        url,
        timestamp: new Date().toISOString(),
        score: auditResult.score,
        violations: auditResult.violations,
        documentType: 'webpage'
      };
    } catch (error) {
      console.error('Error during accessibility audit:', error);
      throw error;
    }
  }

  async auditDocument(url: string, type: 'pdf' | 'word'): Promise<AccessibilityReport> {
    try {
      const analysis = await this.documentAnalysis.analyzePDF(url);
      
      // Process document analysis results and generate accessibility report
      return {
        url,
        timestamp: new Date().toISOString(),
        score: 0, // Calculate based on violations
        violations: [], // Generate from analysis
        documentType: type
      };
    } catch (error) {
      console.error('Error during document audit:', error);
      throw error;
    }
  }
}