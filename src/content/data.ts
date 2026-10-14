/**
 * =========================================================================
 * PORTFOLIO CONTENT & DATA CONFIGURATION
 * =========================================================================
 * You can edit all portfolio text, links, experiences, projects, and contact
 * details directly in this file without modifying any UI components.
 * 
 * Rules enforced:
 * - Only verified facts provided in profile
 * - No invented metrics or percentage scores
 * - Clear TODO comments for custom replacement links
 * =========================================================================
 */

export interface PersonalInfo {
  name: string;
  monogram: string;
  tagline: string;
  program: string;
  institution: string;
  rolesCycling: string[];
  bioObjective: string;
  profilePhoto: string;
  resumeUrl: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  openToRoles: string[];
}

export interface QuickFact {
  label: string;
  value: string;
  iconName: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage';
  badge?: string;
  highlights?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  description: string;
  deliverables: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: 'Simulation App' | 'Finance Web Platform' | 'Equity Research';
  summary: string;
  description: string;
  highlights: string[];
  methodology: string[];
  tools: string[];
  liveDemoUrl?: string; // TODO: Replace with your deployed URL
  reportUrl?: string;   // TODO: Replace with your project report / drive link
  badge: string;
}

export interface SkillItem {
  name: string;
  level: 'Proficient' | 'Working Knowledge' | 'Advanced Competency';
  category: 'Technical' | 'Interpersonal';
  description: string;
  icon: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string; // TODO: Add credential verification link if desired
  category: 'Finance & Banking' | 'Capital Markets' | 'Analytics & AI';
  skillsTaught: string[];
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  tenure: string;
  description: string;
  responsibilities: string[];
}

export interface TickerItem {
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
  type: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "Saurabh Gautam",
  monogram: "SG",
  tagline: "MBA Student – Applied Finance (PwC Program)",
  program: "MBA in Applied Finance (PwC Industry Program)",
  institution: "Chandigarh University",
  rolesCycling: [
    "Equity Research",
    "Capital Markets",
    "Financial Analytics",
    "Wealth Management",
    "Investment Banking",
  ],
  bioObjective:
    "MBA Applied Finance student with practical experience in financial analysis, investment research and stock market analytics gained through internships and live projects. Passionate about capital markets and equity research, with proficiency in MS Excel, Power BI and financial analytical tools. Seeking opportunities in Finance, Equity Research, Investment Banking or Wealth Management.",
  profilePhoto: "/assets/profile.jpg", // Place your picture in public/assets/profile.jpg (auto-falls back to avatar if not present)
  resumeUrl: "/assets/resume-saurabh-gautam.pdf", // Downloadable PDF resume
  email: "25LMMB5002@culkomail.in",
  phone: "+91 9795990015",
  location: "Unnao / Lucknow, Uttar Pradesh, India",
  linkedin: "https://linkedin.com/in/saurabh-gautam-516141295",
  openToRoles: [
    "Equity Research Analyst",
    "Investment Banking Analyst / Trainee",
    "Wealth Management Specialist",
    "Financial Analyst",
    "Capital Markets Trainee",
  ],
};

export const QUICK_FACTS: QuickFact[] = [
  {
    label: "Current Degree",
    value: "MBA Applied Finance (PwC Program)",
    iconName: "GraduationCap",
  },
  {
    label: "Location Base",
    value: "Lucknow / Unnao, Uttar Pradesh",
    iconName: "MapPin",
  },
  {
    label: "Academic Merit",
    value: "MBA CGPA 7.76 · BBA CGPA 7.57",
    iconName: "Award",
  },
  {
    label: "Core Target",
    value: "Equity Research & Investment Banking",
    iconName: "TrendingUp",
  },
  {
    label: "Key Toolset",
    value: "MS Excel, Power BI, Financial Analytical Tools",
    iconName: "FileSpreadsheet",
  },
  {
    label: "Leadership",
    value: "Elected Class Representative (2 Consecutive Semesters)",
    iconName: "Users",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "MBA in Applied Finance",
    institution: "Chandigarh University",
    location: "Uttar Pradesh",
    period: "2025 – 2027",
    score: "7.76 / 10",
    scoreType: "CGPA",
    badge: "PwC Program",
    highlights: [
      "Rigorous industry-aligned finance curriculum conducted under the PwC partnership.",
      "In-depth focus on Corporate Finance, Financial Statement Analysis, and Capital Market Operations.",
      "Elected Class Representative for two consecutive semesters.",
    ],
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Shri Ram Murti Smarak Business School, CSJMU University",
    location: "Uttar Pradesh",
    period: "2021 – 2024",
    score: "7.57 / 10",
    scoreType: "CGPA",
    badge: "Graduated with Distinction",
    highlights: [
      "Solid business administration and managerial finance foundation.",
      "Active participant in case studies, financial simulations, and organizational seminars.",
    ],
  },
  {
    degree: "Senior Secondary / Intermediate (Class XII)",
    institution: "Vishwanath Academy, CBSE",
    location: "Lucknow, Uttar Pradesh",
    period: "2019 – 2021",
    score: "83.4%",
    scoreType: "Percentage",
    highlights: [
      "CBSE Board curriculum with strong academic performance in analytical subjects.",
    ],
  },
  {
    degree: "Secondary / Matriculation (Class X)",
    institution: "Georgions Academy, CBSE",
    location: "Shikohabad, Uttar Pradesh",
    period: "2017 – 2019",
    score: "68%",
    scoreType: "Percentage",
    highlights: [
      "All-round foundational education under CBSE.",
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Finance Intern",
    company: "Nirmal Bang",
    location: "Lucknow, Uttar Pradesh",
    period: "Jun 2026 – Aug 2026",
    badge: "Equity Research & Investor Behavior",
    description:
      "Conducted an in-depth research study on investment patterns and customer perception towards equity and stock market investments.",
    deliverables: [
      "Analyzed customer behavioral data to identify key factors influencing investment decisions, including risk appetite, return expectations, and financial market awareness.",
      "Studied retail investor sentiment across diverse demographic cohorts regarding equity mutual funds, direct stocks, and systematic investment plans (SIPs).",
      "Formulated empirical insights on how market awareness programs can bridge the gap for first-time retail investors.",
    ],
    skills: [
      "Equity Research",
      "Investor Perception Analysis",
      "Risk Appetite Profiling",
      "Market Awareness Assessment",
      "Data Synthesis",
    ],
  },
  {
    role: "Management Trainee Intern",
    company: "Reliance Retail Ltd",
    location: "Lucknow, Uttar Pradesh",
    period: "Jul 2023 – Sep 2023",
    badge: "Operations & HR Analytics",
    description:
      "Spearheaded the execution and comprehensive evaluation of a Retail Employee Satisfaction Survey across store divisions.",
    deliverables: [
      "Administered structured employee engagement surveys to capture frontline workplace satisfaction and operational bottlenecks.",
      "Analyzed quantitative survey metrics to detect sentiment trends, retention drivers, and internal communication gaps.",
      "Prepared analytical summary presentations highlighting priority improvement areas for retail management leadership.",
    ],
    skills: [
      "Survey Data Analytics",
      "Employee Engagement Metrics",
      "Cross-Functional Coordination",
      "Operational Reporting",
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "tradex",
    title: "TradeX – Demo Stock Trading Application",
    subtitle: "Stock Trading Simulation & Portfolio Analytics Platform",
    period: "Oct 2025 – Dec 2025",
    category: "Simulation App",
    badge: "Trading Simulation & Analytics",
    summary:
      "Interactive stock trading simulation app featuring portfolio analytics, risk assessment models, equity trading concepts, and live performance tracking.",
    description:
      "TradeX is a full-featured stock trading simulation platform built to explore capital market mechanics, equity execution, and risk assessment. It enables users to execute virtual trades, test tactical portfolio strategies, and evaluate real-time portfolio risk exposures without capital downside.",
    highlights: [
      "Portfolio Analytics Engine: Real-time P&L calculation, sector allocation breakdown, and beta exposure tracking.",
      "Risk Assessment Modules: Value-at-Risk (VaR) estimation and drawdown monitoring across simulated holdings.",
      "Strategy Testing: Backtesting and forward-testing capabilities for momentum and value-oriented equity allocations.",
      "Execution Simulation: Market, limit, and stop orders with realistic slippage consideration.",
    ],
    methodology: [
      "Mathematical modeling of equity return distributions and portfolio variance.",
      "Real-time state synchronization for active portfolio position pricing.",
      "Benchmarking simulated portfolio returns against broad equity market indices.",
    ],
    tools: [
      "Portfolio Analytics",
      "Risk Assessment",
      "Equity Trading Concepts",
      "Strategy Testing",
      "Performance Tracking",
      "React",
    ],
    liveDemoUrl: "#", // TODO: Replace with your deployed TradeX URL
    reportUrl: "#",   // TODO: Replace with your TradeX project report or GitHub repo
  },
  {
    id: "markets-mind",
    title: "Market's Mind",
    subtitle: "Indian Capital Markets Intelligence & Risk Analysis Platform",
    period: "2025 – Present",
    category: "Finance Web Platform",
    badge: "Financial Intelligence Platform",
    summary:
      "Comprehensive finance website covering Indian market risk, macroeconomic news impact, stock deep-dives, and market capitalization-based picks.",
    description:
      "Market's Mind is an analytical finance platform engineered to dissect Indian capital markets. It bridges macro indicators with micro stock picks, offering actionable market insights, news impact decomposition, risk assessment matrices, and structured coverage across large, mid, and small-cap equities.",
    highlights: [
      "Market Risk Matrix: Multi-dimensional risk barometer tracking volatility, macro headwinds, and sector rotations.",
      "News Impact Decomposition: Evaluates RBI policy actions, corporate earnings announcements, and geopolitical catalysts.",
      "Cap-Wise Asset Selection: Categorized equity screening across Large-Cap, Mid-Cap, and High-Growth Small-Cap companies.",
      "Stock Deep-Dives: Structured equity research notes evaluating fundamental business drivers, competitive moats, and financial ratios.",
    ],
    methodology: [
      "Fundamental ratio analysis: ROCE, ROE, Debt/Equity, Free Cash Flow yields, and EV/EBITDA multiples.",
      "Macroeconomic indicator tracking: Brent Crude, INR/USD exchange rates, bond yields, and domestic inflation data.",
    ],
    tools: [
      "Market Risk Radar",
      "Macro News Impact",
      "Stock Deep Dives",
      "Cap-Wise Equity Screener",
      "Next.js / Financial Web",
    ],
    liveDemoUrl: "#", // TODO: Replace with your deployed Market's Mind URL
    reportUrl: "#",   // TODO: Replace with your Market's Mind documentation
  },
  {
    id: "nirmal-bang-sip",
    title: "Nirmal Bang SIP Equity Research",
    subtitle: "Empirical Study on Systematic Investment Patterns & Retail Perception",
    period: "Jun 2026 – Aug 2026",
    category: "Equity Research",
    badge: "Summer Internship Research",
    summary:
      "Equity research summer internship project investigating investment patterns, mutual fund SIP adoption, and retail customer perceptions in Indian equity markets.",
    description:
      "A comprehensive equity research project undertaken during the summer internship at Nirmal Bang. The study assessed the transition of retail capital from traditional physical assets into equity systematic investment plans (SIPs), pinpointing risk behavioral barriers and awareness drivers.",
    highlights: [
      "Investor Perception Index: Quantified retail customer attitudes toward equity volatility vs. guaranteed-return instruments.",
      "Risk Appetite Segmentation: Clustered investors into conservative, balanced, and aggressive asset allocation categories.",
      "SIP Return Expectation Gap: Identified discrepancies between realistic equity CAGR (12-15%) and retail investor expectations.",
      "Actionable Recommendations: Outlined advisory frameworks for wealth managers to increase SIP retention during market drawdowns.",
    ],
    methodology: [
      "Primary research through structured field surveys of active and prospective retail investors.",
      "Statistical cross-tabulation of income levels, age demographics, and equity asset allocation percentages.",
    ],
    tools: [
      "Equity Research",
      "Statistical Analysis",
      "SIP Behavioral Modeling",
      "MS Excel",
      "Data Synthesis",
    ],
    liveDemoUrl: undefined,
    reportUrl: "#", // TODO: Replace with your research project PDF / Presentation link
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // Technical Skills (no fake % numbers; honest level ratings)
  {
    name: "MS Excel",
    level: "Proficient",
    category: "Technical",
    description: "Financial modeling, lookup functions, pivot tables, scenario analysis, sensitivity tables, and data consolidation.",
    icon: "Sheet",
  },
  {
    name: "Power BI",
    level: "Proficient",
    category: "Technical",
    description: "Interactive executive dashboards, DAX measures, financial trend visualizations, and KPI reporting.",
    icon: "BarChart3",
  },
  {
    name: "Banking & Finance Knowledge",
    level: "Proficient",
    category: "Technical",
    description: "Corporate finance, banking regulations, credit assessment, financial statement decomposition, and capital adequacy.",
    icon: "Landmark",
  },
  {
    name: "MS Office Suite",
    level: "Proficient",
    category: "Technical",
    description: "Executive presentations (PowerPoint), analytical reports (Word), professional communication, and documentation.",
    icon: "Layers",
  },
  {
    name: "Financial Analytical Tools",
    level: "Working Knowledge",
    category: "Technical",
    description: "Ratio analysis, financial screening frameworks, valuation multiples, and equity research spreadsheets.",
    icon: "Calculator",
  },
  {
    name: "Derivatives & Capital Markets",
    level: "Working Knowledge",
    category: "Technical",
    description: "Futures & options concepts, hedging fundamentals, equity market mechanics, and risk-return optimization.",
    icon: "TrendingUp",
  },
  // Interpersonal Skills
  {
    name: "Team Collaboration",
    level: "Advanced Competency",
    category: "Interpersonal",
    description: "Cross-functional project coordination, group research initiatives, and consensus building in academic & corporate teams.",
    icon: "Users2",
  },
  {
    name: "Adaptability",
    level: "Advanced Competency",
    category: "Interpersonal",
    description: "Thrives in fast-evolving market conditions, rapid onboarding into new analytical tools and financial regulatory frameworks.",
    icon: "Compass",
  },
  {
    name: "Leadership & Stakeholder Liaison",
    level: "Advanced Competency",
    category: "Interpersonal",
    description: "Elected Class Representative representing student body with faculty, coordinating institutional agendas and resolving concerns.",
    icon: "Crown",
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "Banking and Insurance",
    issuer: "IIM Bangalore",
    year: "2024",
    category: "Finance & Banking",
    credentialUrl: "#", // TODO: Add credential verification link
    skillsTaught: [
      "Commercial Banking Operations",
      "Risk Mitigation & Insurance Principles",
      "Asset-Liability Management",
      "Regulatory Frameworks",
    ],
  },
  {
    title: "Basics of Stocks",
    issuer: "Varsity Zerodha",
    year: "2025",
    category: "Capital Markets",
    credentialUrl: "#", // TODO: Add credential verification link
    skillsTaught: [
      "Stock Market Mechanics & Settlement",
      "Fundamental Analysis Primer",
      "Corporate Actions Decomposition",
      "Risk Management in Equities",
    ],
  },
  {
    title: "Data Analytics Essentials",
    issuer: "CISCO",
    year: "2026",
    category: "Analytics & AI",
    credentialUrl: "#", // TODO: Add credential verification link
    skillsTaught: [
      "Data Cleaning & Transformation",
      "Descriptive & Diagnostic Analytics",
      "Statistical Visualization",
      "Analytical Decision-Making",
    ],
  },
  {
    title: "Introduction to Modern AI",
    issuer: "CISCO",
    year: "2026",
    category: "Analytics & AI",
    credentialUrl: "#", // TODO: Add credential verification link
    skillsTaught: [
      "Machine Learning Fundamentals",
      "Generative AI & LLM Use-Cases",
      "Ethical AI & Automation Impact",
      "AI in Decision Science",
    ],
  },
];

export const LEADERSHIP_DATA: LeadershipItem = {
  role: "Class Representative",
  organization: "MBA Applied Finance (PwC Program), Chandigarh University",
  period: "Aug 2025 – Jul 2026",
  tenure: "Elected for 2 Consecutive Semesters",
  description:
    "Elected by peers to serve as the official institutional liaison between the MBA Applied Finance student cohort and university faculty & administration.",
  responsibilities: [
    "Represented academic cohort in department meetings, communicating curriculum feedback and scheduling preferences.",
    "Coordinated guest lectures, corporate seminars, and specialized finance workshops in alignment with the PwC industry curriculum.",
    "Facilitated peer study groups and collaborative project teams for financial modeling and corporate finance coursework.",
    "Resolved academic scheduling conflicts and maintained transparency across multi-section communications.",
  ],
};

// Decorative / Sample Market Ticker data (clearly labeled as decorative demo indicators)
export const DECORATIVE_TICKER_DATA: TickerItem[] = [
  { symbol: "NIFTY 50", price: "24,936.40", change: "+118.25 (+0.48%)", isPositive: true, type: "Benchmark" },
  { symbol: "SENSEX", price: "81,611.40", change: "+368.50 (+0.45%)", isPositive: true, type: "Benchmark" },
  { symbol: "BANK NIFTY", price: "51,780.20", change: "+320.15 (+0.62%)", isPositive: true, type: "Sectoral" },
  { symbol: "INDIA VIX", price: "13.25", change: "-0.28 (-2.07%)", isPositive: false, type: "Volatility" },
  { symbol: "BRENT CRUDE", price: "$74.20/bbl", change: "-0.60 (-0.80%)", isPositive: false, type: "Commodity" },
  { symbol: "USD / INR", price: "83.98", change: "+0.04 (+0.05%)", isPositive: true, type: "Currency" },
  { symbol: "INDIA 10Y BOND", price: "6.78%", change: "-2 bps", isPositive: false, type: "Sovereign Yield" },
  { symbol: "NIFTY IT", price: "42,150.80", change: "+440.10 (+1.05%)", isPositive: true, type: "Sectoral" },
];

// Sample historical data for the Recharts interactive benchmark showcase
export const SAMPLE_MARKET_CHART_DATA = [
  { month: "Apr 25", nifty: 22400, pe: 21.8, fpiFlow: 4500 },
  { month: "May 25", nifty: 22800, pe: 22.1, fpiFlow: 3800 },
  { month: "Jun 25", nifty: 23500, pe: 22.6, fpiFlow: 6200 },
  { month: "Jul 25", nifty: 24100, pe: 23.2, fpiFlow: 7100 },
  { month: "Aug 25", nifty: 24500, pe: 23.5, fpiFlow: 5400 },
  { month: "Sep 25", nifty: 24800, pe: 23.8, fpiFlow: 4900 },
  { month: "Oct 25", nifty: 24936, pe: 23.9, fpiFlow: 5300 },
];
