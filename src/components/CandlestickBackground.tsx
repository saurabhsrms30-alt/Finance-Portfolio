import React from 'react';

export const CandlestickBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.04] dark:opacity-[0.07] select-none"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="candlestick-pattern"
            width="240"
            height="180"
            patternUnits="userSpaceOnUse"
          >
            {/* Grid coordinates */}
            <line x1="0" y1="45" x2="240" y2="45" stroke="#C9A24B" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="0" y1="90" x2="240" y2="90" stroke="#C9A24B" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="0" y1="135" x2="240" y2="135" stroke="#C9A24B" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="60" y1="0" x2="60" y2="180" stroke="#C9A24B" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="120" y1="0" x2="120" y2="180" stroke="#C9A24B" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="180" y1="0" x2="180" y2="180" stroke="#C9A24B" strokeWidth="0.5" strokeDasharray="3 3" />

            {/* Bullish Candlestick 1 */}
            <line x1="30" y1="20" x2="30" y2="110" stroke="#10B981" strokeWidth="1.2" />
            <rect x="25" y="40" width="10" height="45" fill="#10B981" rx="1" />

            {/* Bearish Candlestick 2 */}
            <line x1="60" y1="35" x2="60" y2="130" stroke="#EF4444" strokeWidth="1.2" />
            <rect x="55" y="55" width="10" height="50" fill="#EF4444" rx="1" />

            {/* Bullish Candlestick 3 */}
            <line x1="90" y1="30" x2="90" y2="140" stroke="#10B981" strokeWidth="1.2" />
            <rect x="85" y="50" width="10" height="60" fill="#10B981" rx="1" />

            {/* Doji / Neutral Candlestick 4 */}
            <line x1="120" y1="40" x2="120" y2="115" stroke="#C9A24B" strokeWidth="1.2" />
            <rect x="115" y="70" width="10" height="6" fill="#C9A24B" rx="1" />

            {/* Bullish Candlestick 5 */}
            <line x1="150" y1="15" x2="150" y2="120" stroke="#10B981" strokeWidth="1.2" />
            <rect x="145" y="30" width="10" height="55" fill="#10B981" rx="1" />

            {/* Bearish Candlestick 6 */}
            <line x1="180" y1="25" x2="180" y2="135" stroke="#EF4444" strokeWidth="1.2" />
            <rect x="175" y="45" width="10" height="40" fill="#EF4444" rx="1" />

            {/* Bullish Candlestick 7 */}
            <line x1="210" y1="10" x2="210" y2="105" stroke="#10B981" strokeWidth="1.2" />
            <rect x="205" y="20" width="10" height="50" fill="#10B981" rx="1" />

            {/* Subtle moving average trend line */}
            <path
              d="M 10 95 Q 60 75 120 70 T 230 35"
              fill="none"
              stroke="#C9A24B"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#candlestick-pattern)" />
      </svg>
    </div>
  );
};
