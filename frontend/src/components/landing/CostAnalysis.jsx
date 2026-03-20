import React, { useState, useMemo } from 'react';
import { costAnalysisData } from '../../data/mock';
import { useInView } from '../../hooks/useInView';
import { Card, CardContent } from '../ui/card';
import { Users, Zap, TrendingDown, DollarSign, Minus, Plus } from 'lucide-react';

const formatCurrency = (amount) => {
  if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`;
  if (amount >= 1000) return `$${Math.round(amount / 1000)}K`;
  return `$${amount.toLocaleString()}`;
};

const Stepper = ({ label, value, onChange, min, max, step = 1 }) => (
  <div className="flex flex-col items-center" data-testid={`stepper-${label.toLowerCase()}`}>
    <span className="text-sm text-slate-500 mb-2 font-medium">{label}</span>
    <div className="flex items-center gap-3">
      <button
        onClick={() => onChange(Math.max(min, value - step))}
        className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-sky-50 hover:border-sky-300 disabled:opacity-30"
        style={{ transition: 'all 0.15s ease' }}
        disabled={value <= min}
        data-testid={`stepper-${label.toLowerCase()}-minus`}
      >
        <Minus size={16} className="text-slate-600" />
      </button>
      <span className="text-3xl font-bold text-slate-900 font-mono w-14 text-center">{value}</span>
      <button
        onClick={() => onChange(Math.min(max, value + step))}
        className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-sky-50 hover:border-sky-300 disabled:opacity-30"
        style={{ transition: 'all 0.15s ease' }}
        disabled={value >= max}
        data-testid={`stepper-${label.toLowerCase()}-plus`}
      >
        <Plus size={16} className="text-slate-600" />
      </button>
    </div>
  </div>
);

export const CostAnalysis = () => {
  const [ref, isInView] = useInView();
  const [people, setPeople] = useState(6);
  const [sprints, setSprints] = useState(5);

  const { traditionalRate, agenticRate, hoursPerWeek, weeksPerSprint } = costAnalysisData;

  const calc = useMemo(() => {
    const weeks = sprints * weeksPerSprint;
    const tradHours = weeks * hoursPerWeek * people;
    const tradCost = tradHours * traditionalRate;

    // Agentic: 1 person, dramatically fewer hours
    // Rough model: ~2-4% of traditional hours depending on scale
    const agenticHours = Math.max(4, Math.round(tradHours * 0.03));
    const agenticCost = agenticHours * agenticRate;
    const savings = tradCost - agenticCost;
    const savingsPercent = Math.round((savings / tradCost) * 100);

    const agenticDays = Math.round(agenticHours / 8);
    const agenticWeeks = parseFloat((agenticHours / 40).toFixed(1));

    return { weeks, tradHours, tradCost, agenticHours, agenticCost, agenticDays, agenticWeeks, savings, savingsPercent };
  }, [people, sprints, traditionalRate, agenticRate, hoursPerWeek, weeksPerSprint]);

  return (
    <section id="cost" ref={ref} className="py-14 lg:py-20 bg-white" aria-label="Cost comparison calculator">
      <div className={`max-w-5xl mx-auto px-6 lg:px-8 section-animate ${isInView ? 'visible' : ''}`}>
        <div className="mb-10 text-center">
          <span className="text-sm font-mono uppercase tracking-[0.2em] text-sky-500 mb-2 block">
            Cost Analysis
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
            {costAnalysisData.title}
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            {costAnalysisData.description}
          </p>
        </div>

        {/* Selector */}
        <Card className="border-slate-200 shadow-sm bg-slate-50/80 mb-6" data-testid="cost-selector">
          <CardContent className="py-8 px-6">
            <div className="flex items-center justify-center gap-12 flex-wrap">
              <Stepper label="People" value={people} onChange={setPeople} min={1} max={20} />
              <Stepper label="Sprints" value={sprints} onChange={setSprints} min={1} max={20} />
              <div className="flex flex-col items-center">
                <span className="text-sm text-slate-500 mb-2 font-medium">Weeks</span>
                <span className="text-3xl font-bold text-slate-900 font-mono">{calc.weeks}</span>
                <span className="text-sm text-slate-400 mt-1">auto-calculated</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Traditional */}
          <Card className="border-slate-200 shadow-sm bg-white overflow-hidden" data-testid="traditional-cost-result">
            <div className="bg-slate-800 px-6 py-4">
              <div className="flex items-center gap-3">
                <Users size={20} className="text-slate-300" strokeWidth={1.5} />
                <div>
                  <h3 className="text-base font-bold text-white">Traditional Delivery</h3>
                  <p className="text-sm text-slate-400">{people} people &middot; {sprints} sprints &middot; Avg market rate</p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="text-center mb-5">
                <span className="text-5xl font-bold text-slate-900 font-mono">{formatCurrency(calc.tradCost)}</span>
                <span className="text-base text-slate-400 block mt-2">Estimated total cost</span>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-5">
                <div className="text-center">
                  <span className="text-lg font-bold text-slate-700 font-mono">{calc.tradHours.toLocaleString()}</span>
                  <span className="text-sm text-slate-400 block">Total hours</span>
                </div>
                <div className="text-center">
                  <span className="text-lg font-bold text-slate-700 font-mono">{calc.weeks}</span>
                  <span className="text-sm text-slate-400 block">Weeks</span>
                </div>
                <div className="text-center">
                  <span className="text-lg font-bold text-slate-700 font-mono">{people}</span>
                  <span className="text-sm text-slate-400 block">People</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agentic */}
          <Card className="border-sky-200 shadow-sm bg-white overflow-hidden" data-testid="agentic-cost-result">
            <div className="bg-sky-500 px-6 py-4">
              <div className="flex items-center gap-3">
                <Zap size={20} className="text-white/90" strokeWidth={1.5} />
                <div>
                  <h3 className="text-base font-bold text-white">Agentic Delivery</h3>
                  <p className="text-sm text-white/70">1 person &middot; Avg market rate</p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="text-center mb-5">
                <span className="text-5xl font-bold text-emerald-600 font-mono">{formatCurrency(calc.agenticCost)}</span>
                <span className="text-base text-slate-400 block mt-2">Estimated total cost</span>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-5">
                <div className="text-center">
                  <span className="text-lg font-bold text-slate-700 font-mono">{calc.agenticHours}</span>
                  <span className="text-sm text-slate-400 block">Total hours</span>
                </div>
                <div className="text-center">
                  <span className="text-lg font-bold text-slate-700 font-mono">{calc.agenticDays}</span>
                  <span className="text-sm text-slate-400 block">Days</span>
                </div>
                <div className="text-center">
                  <span className="text-lg font-bold text-slate-700 font-mono">{calc.agenticWeeks}</span>
                  <span className="text-sm text-slate-400 block">Weeks</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Savings callout */}
        <div className="mt-6">
          <Card className="border-emerald-200 bg-emerald-50/60 shadow-sm" data-testid="savings-callout">
            <CardContent className="py-5 px-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <TrendingDown size={20} className="text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-base font-bold text-emerald-800">Estimated Savings</span>
                    <span className="text-sm text-emerald-600 block">With CompassX AI agentic delivery</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="text-3xl font-bold text-emerald-700 font-mono">{formatCurrency(calc.savings)}</span>
                  </div>
                  <div className="w-px h-10 bg-emerald-200" />
                  <div className="text-right">
                    <span className="text-3xl font-bold text-emerald-700 font-mono">{calc.savingsPercent}%</span>
                    <span className="text-sm text-emerald-600 block">reduction</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
