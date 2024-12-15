import React, { useRef } from 'react';
import { Upload } from 'lucide-react';
import { useAccessibilityStore } from '../store/accessibilityStore';

export function DocumentUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { auditDocument, isLoading } = useAccessibilityStore();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // In a real application, you would upload the file to a storage service
    // and get a URL back. For now, we'll just use a placeholder URL
    const mockFileUrl = 'https://example.com/document.pdf';
    const fileType = file.name.toLowerCase().endsWith('.pdf') ? 'pdf' : 'word';
    
    await auditDocument(mockFileUrl, fileType);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upload Document</h2>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          className="hidden"
        />
        
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={isLoading}
          className="flex flex-col items-center justify-center w-full space-y-2"
        >
          <Upload className="w-8 h-8 text-gray-400" />
          <div className="text-sm text-gray-600">
            <span className="text-blue-600 hover:underline">Upload a file</span>
            {' or drag and drop'}
          </div>
          <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
        </button>
      </div>
    </div>
  );
}