'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface CalendarPopupBtnProps {
  className?: string;
  children?: React.ReactNode;
  onOpen?: () => void;
}

export function CalendarPopupBtn({ className, children, onOpen }: CalendarPopupBtnProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    if (onOpen) onOpen();
  };

  return (
    <>
      <button 
        onClick={handleOpen}
        className={className || "flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 rounded-full bg-[#0f172a] hover:bg-[#1e293b] transition-all duration-300 text-white font-medium shadow-lg shadow-[#0f172a]/20 cursor-pointer"}
        type="button"
      >
        {children || (
          <>
            Agendar consultoría
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
            </svg>
          </>
        )}
      </button>

      {/* Custom Modal with Google Calendar iframe inside */}
      {mounted && isOpen && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={(e) => {
            // Close when clicking outside
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div 
            className="relative w-[100%] max-w-[1024px] h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-3 sm:p-4 border-b bg-gray-50/80 backdrop-blur">
              <span className="font-semibold text-gray-700 ml-2">Reservar una cita</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 bg-gray-200/60 hover:bg-gray-300/80 rounded-full transition-colors text-black"
                title="Cerrar ventana"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* iframe container (loading animation if desired, otherwise direct) */}
            <div className="relative w-full h-full flex-1 bg-white">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3IW-EiCV-mEIqypyY5Mxk-v4W2O5t3Bz0xMVc4_0pHtVBzvaly2nyfLDk3M1R3LRgiomnJmGAZ?gv=true" 
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                title="Agendar una cita en Google Calendar"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
