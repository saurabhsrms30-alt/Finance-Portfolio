import React from 'react';
import { DECORATIVE_TICKER_DATA } from '../content/data';
import { TrendingUp, TrendingDown, Info } from 'lucide-react';

export const MarketTicker: React.FC = () => {
  // Double the array for seamless infinite looping
  const tickerItems = [...DECORATIVE_TICKER_DATA, ...DECORATIVE_TICKER_DATA];

  return (
    <div
      className="w-full bg-navy-950/90 dark:bg-[#071324] border-y border-slate-700/50 dark:border-navy-800/80 text-xs text-slate-300 overflow-hidden select-none py-1.5 flex items-center shadow-inner relative z-20"
      aria-label="Decorative financial market ticker strip"
    >
      {/* Decorative Label Pill */}
      <div className="flex-shrink-0 z-10 pl-3 pr-2.5 bg-navy-950/95 dark:bg-[#071324]/95 flex items-center space-x-1.5 border-r border-slate-700/60 dark:border-navy-800">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-mono font-semibold tracking-wider text-[10px] text-gold-400 uppercase flex items-center gap-1">
          MARKETS
          <span className="hidden sm:inline text-slate-400 font-normal text-[9px] bg-navy-800/80 px-1 py-0.5 rounded border border-navy-700">
            DEMO DATA
          </span>
        </span>
      </div>

      {/* Marquee Track */}
      <div className="flex overflow-hidden relative w-full group">
        <div className="flex items-center space-x-8 animate-ticker whitespace-nowrap group-hover:[animation-play-state:paused]">
          {tickerItems.map((item, index) => (
            <div
              key={`${item.symbol}-${index}`}
              className="inline-flex items-center space-x-2 font-mono text-xs py-0.5"
            >
              <span className="font-semibold text-slate-200 dark:text-slate-100 tracking-tight">
                {item.symbol}
              </span>
              <span className="text-slate-300 dark:text-slate-300 font-medium">
                {item.price}
              </span>
              <span
                className={`inline-flex items-center text-[11px] font-medium px-1 rounded ${
                  item.isPositive
                    ? 'text-emerald-400 bg-emerald-500/10'
                    : 'text-rose-400 bg-rose-500/10'
                }`}
              >
                {item.isPositive ? (
                  <TrendingUp className="w-3 h-3 mr-0.5" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-0.5" />
                )}
                {item.change}
              </span>
              <span className="text-slate-600 dark:text-navy-700 mx-2">|</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle footnote icon tooltip indicator */}
      <div className="flex-shrink-0 z-10 pr-3 pl-2 hidden md:flex items-center text-slate-500 hover:text-gold-400 transition-colors" title="Demonstration ticker for institutional financial portfolio aesthetics. Not real-time financial advice.">
        <Info className="w-3.5 h-3.5" />
      </div>
    </div>
  );
};
