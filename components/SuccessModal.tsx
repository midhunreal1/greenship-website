'use client';

import { useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
}

export default function SuccessModal({ isOpen, onClose, title = 'Success!', message }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close">
          <X size={24} />
        </button>
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-teal to-teal-dark rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-navy mb-4">{title}</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">{message}</p>
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-teal to-teal-dark text-white px-6 py-3 rounded-md hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
