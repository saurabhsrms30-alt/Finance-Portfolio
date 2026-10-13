import React, { useState } from 'react';
import { SAMPLE_MARKET_CHART_DATA } from '../content/data';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import {
  TrendingUp,
  Calculator,
  LineChart as LineChartIcon,
  Percent,
  IndianRupee,
  Calendar,
  Info,
  Sparkles,
} from 'lucide-react';

export const MarketInsights: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chart' | 'sip' | 'cagr'>('sip');

  // SIP Calculator State
  const [sipMonthly, setSipMonthly] = useState<number>(5000);
  const [sipReturnRate, setSipReturnRate] = useState<number>(12);
  const [sipYears, setSipYears] = useState<number>(10);

  // Calculate SIP
  const calculateSIP = () => {
    const p = sipMonthly;
    const i = sipReturnRate / 12 / 100;
    const n = sipYears * 12;

    const totalInvested = p * n;
    const maturityValue = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const wealthGain = maturityValue - totalInvested;

    return {
      totalInvested: Math.round(totalInvested),
      wealthGain: Math.round(wealthGain),
      maturityValue: Math.round(maturityValue),
    };
  };

  const sipResult = calculateSIP();

  const sipPieData = [
    { name: 'Invested Capital', value: sipResult.totalInvested },
    { name: 'Estimated Wealth Gain', value: sipResult.wealthGain },
  ];
  const PIE_COLORS = ['#346EB8', '#10B981'];

  // CAGR Calculator State
  const [cagrInitial, setCagrInitial] = useState<number>(100000);
  const [cagrFinal, setCagrFinal] = useState<number>(250000);
  const [cagrYears, setCagrYears] = useState<number>(5);

  // Calculate CAGR
  const calculateCAGR = () => {
    if (cagrInitial <= 0 || cagrFinal <= 0 || cagrYears <= 0) {
      return { cagr: 0, absolute: 0, multiplier: 1 };
    }
    const cagr = (Math.pow(cagrFinal / cagrInitial, 1 / cagrYears) - 1) * 100;
    const absolute = ((cagrFinal - cagrInitial) / cagrInitial) * 100;
    const multiplier = cagrFinal / cagrInitial;
    return {
      cagr: Number(cagr.toFixed(2)),
      absolute: Number(absolute.toFixed(2)),
      multiplier: Number(multiplier.toFixed(2)),
    };
  };

  const cagrResult = calculateCAGR();

  // Currency Formatter
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section
      id="insights"
      className="py-16 md:py-24 relative overflow-hidden"
      aria-label="Interactive Financial Modeling and Market Showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Financial Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 dark:text-slate-100">
            Market Insights & Financial Calculators
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
            Demonstrating applied financial mathematics, compound interest modeling, and dynamic time-series analytics.
          </p>

          {/* Interactive Mode Selector Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 mt-4 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab('sip')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                activeTab === 'sip'
                  ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-navy-950 dark:hover:text-slate-200'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>SIP Calculator</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('cagr')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                activeTab === 'cagr'
                  ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-navy-950 dark:hover:text-slate-200'
              }`}
            >
              <Percent className="w-3.5 h-3.5" />
              <span>CAGR Calculator</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('chart')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                activeTab === 'chart'
                  ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-navy-950 dark:hover:text-slate-200'
              }`}
            >
              <LineChartIcon className="w-3.5 h-3.5" />
              <span>Benchmark Time-Series</span>
            </button>
          </div>
        </div>

        {/* Clear Demonstration Data Notification */}
        <div className="flex items-center justify-center space-x-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-8">
          <Info className="w-4 h-4 text-gold-500 flex-shrink-0" />
          <span>Interactive demonstration models. All market data points and calculations are clearly labeled for illustrative evaluation.</span>
        </div>

        {/* Tab 1: SIP Calculator */}
        {activeTab === 'sip' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900/95 border border-slate-200 dark:border-navy-800 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Sliders & Controls (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-navy-950 dark:text-slate-100">
                    Systematic Investment Plan (SIP) Model
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Calculate maturity corpus and wealth creation through periodic disciplined equity investing.
                  </p>
                </div>

                {/* Slider 1: Monthly Investment */}
                <div className="space-y-2 p-4 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/80 dark:border-navy-800">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1">
                      <IndianRupee className="w-3.5 h-3.5 text-gold-500" />
                      Monthly Investment
                    </span>
                    <span className="font-mono font-bold text-base text-navy-950 dark:text-gold-400">
                      {formatINR(sipMonthly)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="100000"
                    step="500"
                    value={sipMonthly}
                    onChange={(e) => setSipMonthly(Number(e.target.value))}
                    className="w-full accent-gold-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>₹500</span>
                    <span>₹50,000</span>
                    <span>₹1,00,000</span>
                  </div>
                </div>

                {/* Slider 2: Return Rate */}
                <div className="space-y-2 p-4 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/80 dark:border-navy-800">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                      Expected Annual Return Rate (p.a.)
                    </span>
                    <span className="font-mono font-bold text-base text-emerald-600 dark:text-emerald-400">
                      {sipReturnRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="24"
                    step="0.5"
                    value={sipReturnRate}
                    onChange={(e) => setSipReturnRate(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>6% (Conservative)</span>
                    <span>12% (NIFTY Long-term)</span>
                    <span>24% (High-Growth)</span>
                  </div>
                </div>

                {/* Slider 3: Duration */}
                <div className="space-y-2 p-4 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/80 dark:border-navy-800">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-500" />
                      Investment Horizon
                    </span>
                    <span className="font-mono font-bold text-base text-navy-950 dark:text-sky-400">
                      {sipYears} Years
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={sipYears}
                    onChange={(e) => setSipYears(Number(e.target.value))}
                    className="w-full accent-sky-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>1 Year</span>
                    <span>15 Years</span>
                    <span>30 Years</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Output Metrics & Visual Chart (6 cols) */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                
                {/* Result KPI cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200 dark:border-navy-800 text-center">
                    <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                      Amount Invested
                    </span>
                    <span className="font-mono text-base font-bold text-slate-800 dark:text-slate-200">
                      {formatINR(sipResult.totalInvested)}
                    </span>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <span className="text-[11px] font-mono uppercase text-emerald-600 dark:text-emerald-400 block mb-1">
                      Wealth Gain
                    </span>
                    <span className="font-mono text-base font-bold text-emerald-600 dark:text-emerald-400">
                      +{formatINR(sipResult.wealthGain)}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/30 text-center">
                    <span className="text-[11px] font-mono uppercase text-gold-600 dark:text-gold-400 block mb-1">
                      Maturity Corpus
                    </span>
                    <span className="font-mono text-base font-bold text-gold-600 dark:text-gold-400">
                      {formatINR(sipResult.maturityValue)}
                    </span>
                  </div>
                </div>

                {/* Pie Chart Representation */}
                <div className="h-56 w-full flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sipPieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={80}
                        paddingAngle={5}
                      >
                        {sipPieData.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(val: any) => [formatINR(Number(val) || 0), 'Corpus']}
                        contentStyle={{
                          backgroundColor: '#0B1F3A',
                          borderColor: '#C9A24B',
                          borderRadius: '8px',
                          color: '#F8FAFC',
                          fontSize: '12px',
                        }}
                      />
                      <Legend verticalAlign="bottom" height={36} iconSize={10} wrapperStyle={{ fontSize: '11px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Mathematical Formula Footnote */}
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-navy-950 text-[11px] font-mono text-slate-500 dark:text-slate-400 text-center border border-slate-200 dark:border-navy-800">
                  <span>Formula: </span>
                  <span className="text-gold-500">M = P × [((1 + i)^n - 1) / i] × (1 + i)</span>
                  <span className="hidden sm:inline"> (Monthly compounding standard)</span>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Tab 2: CAGR Calculator */}
        {activeTab === 'cagr' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900/95 border border-slate-200 dark:border-navy-800 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Inputs (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-navy-950 dark:text-slate-100">
                    Compound Annual Growth Rate (CAGR) Model
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Evaluate annualized return on equity, portfolios, and commercial asset investments.
                  </p>
                </div>

                {/* Input 1: Initial Investment */}
                <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/80 dark:border-navy-800">
                  <label className="text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center justify-between">
                    <span>Initial Investment Value (₹)</span>
                    <span className="font-mono text-gold-500">{formatINR(cagrInitial)}</span>
                  </label>
                  <input
                    type="number"
                    min="1000"
                    step="1000"
                    value={cagrInitial}
                    onChange={(e) => setCagrInitial(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-navy-900 border border-slate-300 dark:border-navy-700 text-sm font-mono text-navy-950 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>

                {/* Input 2: Final Value */}
                <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/80 dark:border-navy-800">
                  <label className="text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center justify-between">
                    <span>Final Realized / Maturity Value (₹)</span>
                    <span className="font-mono text-emerald-500">{formatINR(cagrFinal)}</span>
                  </label>
                  <input
                    type="number"
                    min="1000"
                    step="1000"
                    value={cagrFinal}
                    onChange={(e) => setCagrFinal(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-navy-900 border border-slate-300 dark:border-navy-700 text-sm font-mono text-navy-950 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>

                {/* Input 3: Duration */}
                <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/80 dark:border-navy-800">
                  <label className="text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center justify-between">
                    <span>Investment Horizon (Years)</span>
                    <span className="font-mono text-sky-400">{cagrYears} Years</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="1"
                    value={cagrYears}
                    onChange={(e) => setCagrYears(Number(e.target.value))}
                    className="w-full accent-sky-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Output & Formula (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Primary Metric Banner */}
                <div className="p-7 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 border border-gold-500/40 shadow-xl text-center relative overflow-hidden">
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono text-gold-400 border border-gold-500/30 bg-gold-500/10">
                    ANNUALIZED RETURN
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Compound Annual Growth Rate
                  </span>
                  <div className="font-serif text-5xl sm:text-6xl font-bold text-gold-400 tracking-tight my-2">
                    {cagrResult.cagr}%
                  </div>
                  <span className="text-xs text-slate-300 font-sans">
                    Annual rate of return over a {cagrYears}-year horizon
                  </span>
                </div>

                {/* Secondary Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200 dark:border-navy-800 text-center">
                    <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                      Absolute Return
                    </span>
                    <span className="font-mono text-xl font-bold text-emerald-600 dark:text-emerald-400">
                      +{cagrResult.absolute}%
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200 dark:border-navy-800 text-center">
                    <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                      Capital Multiplier
                    </span>
                    <span className="font-mono text-xl font-bold text-sky-600 dark:text-sky-400">
                      {cagrResult.multiplier}x
                    </span>
                  </div>
                </div>

                {/* Formula Box */}
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-navy-950 text-xs font-mono text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-navy-800 space-y-1">
                  <div className="text-gold-500 font-semibold">Mathematical Formula:</div>
                  <div className="bg-white dark:bg-navy-900 p-2 rounded border border-slate-200 dark:border-navy-700 text-center font-bold">
                    CAGR = (Final Value / Initial Value)^(1 / Years) - 1
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Recharts Benchmark Time Series Chart */}
        {activeTab === 'chart' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900/95 border border-slate-200 dark:border-navy-800 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-serif text-2xl font-bold text-navy-950 dark:text-slate-100">
                  NIFTY 50 Sample Benchmark & Valuation Trajectory
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Sample historical index trend tracking monthly closing levels and price-to-earnings multiples.
                </p>
              </div>

              <span className="self-start sm:self-auto text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-gold-500/10 text-gold-500 border border-gold-500/20">
                SAMPLE DATA DEMONSTRATION
              </span>
            </div>

            {/* Recharts Line Chart */}
            <div className="h-72 sm:h-80 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={SAMPLE_MARKET_CHART_DATA} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1B3F70" opacity={0.25} />
                  <XAxis
                    dataKey="month"
                    stroke="#94A3B8"
                    tick={{ fontSize: 11 }}
                  />
                  <YAxis
                    domain={['dataMin - 500', 'dataMax + 500']}
                    stroke="#94A3B8"
                    tick={{ fontSize: 11 }}
                    tickFormatter={(val) => `${val.toLocaleString()}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0B1F3A',
                      borderColor: '#C9A24B',
                      borderRadius: '8px',
                      color: '#F8FAFC',
                      fontSize: '12px',
                    }}
                    formatter={(val: any, name: any) => [
                      name === 'nifty' ? `${Number(val).toLocaleString()} pts` : `${val}x`,
                      name === 'nifty' ? 'NIFTY 50 Level' : 'P/E Ratio',
                    ]}
                  />
                  <Line
                    type="monotone"
                    dataKey="nifty"
                    stroke="#C9A24B"
                    strokeWidth={2.5}
                    dot={{ fill: '#C9A24B', r: 4 }}
                    activeDot={{ r: 6, fill: '#10B981' }}
                    name="nifty"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Benchmark Valuation Ratios Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100 dark:border-navy-800">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-navy-950 text-center border border-slate-200 dark:border-navy-800">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">NIFTY 50 P/E</span>
                <span className="font-mono text-sm font-bold text-navy-950 dark:text-gold-400">23.9x</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-navy-950 text-center border border-slate-200 dark:border-navy-800">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Price to Book (P/B)</span>
                <span className="font-mono text-sm font-bold text-navy-950 dark:text-emerald-400">3.85x</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-navy-950 text-center border border-slate-200 dark:border-navy-800">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Dividend Yield</span>
                <span className="font-mono text-sm font-bold text-navy-950 dark:text-slate-200">1.28%</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-navy-950 text-center border border-slate-200 dark:border-navy-800">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">52-Week Range</span>
                <span className="font-mono text-sm font-bold text-navy-950 dark:text-slate-200">21,777 – 26,277</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
