import React from 'react';

interface FirmLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const FirmLogo: React.FC<FirmLogoProps> = ({ variant = 'light', className = '' }) => {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Geometric Balance Isometric Hex/Shield Emblem */}
      <div className="shrink-0 text-[#C99A4A] transition-transform duration-300 group-hover:scale-105">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
        >
          <path
            d="M12 2L4 7V17L12 22L20 17V7L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22V12M12 12L20 7M12 12L4 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="leading-tight text-left">
        <span
          className={`block text-xl font-bold tracking-widest font-serif uppercase ${
            isDark ? 'text-[#071A2B]' : 'text-white'
          }`}
        >
          VERITAS
        </span>
        <span className="block text-[10px] tracking-[0.3em] uppercase text-[#C99A4A] font-semibold">
          Law Group
        </span>
      </div>
    </div>
  );
};
