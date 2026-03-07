import React from 'react';
import { costAnalysisData } from '../../data/mock';
import { useInView } from '../../hooks/useInView';
import { Card, CardContent } from '../ui/card';
import { Users, Zap, TrendingDown, DollarSign } from 'lucide-react';

const sizeColors = {
  Small: 'bg-emerald-500',
  Medium: 'bg-sky-500',
  Large: 'bg-amber-500',
  'X-Large': 'bg-rose-500',
};

const formatCurrency = (amount) => {
  if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`;
  if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`;
  return `$${amount.toLocaleString()}`;
};

const ComparisonRow = ({ tradSize, agenticSize, tradRate, agenticRate }) => {
  const totalWeeks = tradSize.sprints * 2;
  const tradHours = totalWeeks * 40 * tradSize.people;
  const tradCost = tradHours * tradRate;
  const agenticCost = agenticSize.hours * agenticRate;
  const savings = tradCost - agenticCost;

  return (
    <div className="grid grid-cols-2 gap-6 py-4 border-b border-slate-100 last:border-0">
      {/* Traditional side */}
      <div className="flex items-center gap-3">
        <div className={`w-2 h-12 rounded-full ${sizeColors[tradSize.label]} shrink-0`} />
        <div className="flex-1 min-w-0">
          <span className="text-base font-bold text-slate-900">{tradSize.label}</span>
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-sm text-slate-500 mt-0.5">
            <span>{tradSize.sprints} sprints</span>
            <span>{totalWeeks} wks</span>
            <span>{tradSize.people} people</span>
          </div>
        </div>
        <div className="text-right shrink-0">
          <span className="text-xl font-bold text-slate-900 font-mono">{formatCurrency(tradCost)}</span>
        </div>
      </div>

      {/* Agentic side */}
      <div className="flex items-center gap-3">
        <div className={`w-2 h-12 rounded-full ${sizeColors[agenticSize.label]} shrink-0`} />
        <div className="flex-1 min-w-0">
          <span className="text-base font-bold text-slate-900">{agenticSize.label}</span>
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-sm text-slate-500 mt-0.5">
            <span>{agenticSize.hours} hrs</span>
            <span>{agenticSize.days} days</span>
            {agenticSize.weeks > 0 && <span>{agenticSize.weeks} wk{agenticSize.weeks !== 1 ? 's' : ''}</span>}
          </div>
        </div>
        <div className="text-right shrink-0">
          <span className="text-xl font-bold text-emerald-600 font-mono">{formatCurrency(agenticCost)}</span>
          <div className="flex items-center gap-1 justify-end mt-0.5">
            <TrendingDown size={12} className="text-emerald-500" />
            <span className="text-sm font-bold text-emerald-600">Save {formatCurrency(savings)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CostAnalysis = () => {
  const [ref, isInView] = useInView();
  const { traditional, agentic } = costAnalysisData;

  const xlTradCost = 24 * 40 * 8 * traditional.hourlyRate;
  const xlAgenticCost = 320 * agentic.hourlyRate;
  const maxSavings = xlTradCost - xlAgenticCost;

  return (
    <section id="cost" ref={ref} className="py-14 lg:py-20 bg-white" aria-label="Cost comparison analysis">
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 section-animate ${isInView ? 'visible' : ''}`}>
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

        <Card className="border-slate-200 shadow-sm bg-white overflow-hidden" data-testid="cost-comparison-card">
          {/* Side-by-side headers */}
          <div className="grid grid-cols-2 gap-0">
            <div className="bg-slate-800 px-6 py-5">
              <div className="flex items-center gap-3">
                <Users size={20} className="text-slate-300" strokeWidth={1.5} />
                <div>
                  <h3 className="text-base font-bold text-white">{traditional.label}</h3>
                  <p className="text-sm text-slate-400 mt-0.5">
                    {traditional.teamSize} &middot; {traditional.sprintLength} &middot; Avg market rate
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-sky-500 px-6 py-5">
              <div className="flex items-center gap-3">
                <Zap size={20} className="text-white/90" strokeWidth={1.5} />
                <div>
                  <h3 className="text-base font-bold text-white">{agentic.label}</h3>
                  <p className="text-sm text-white/70 mt-0.5">
                    {agentic.teamSize} &middot; Avg market rate &middot; Hours to weeks
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Aligned rows */}
          <CardContent className="p-6">
            {traditional.sizes.map((tradSize, i) => (
              <ComparisonRow
                key={tradSize.label}
                tradSize={tradSize}
                agenticSize={agentic.sizes[i]}
                tradRate={traditional.hourlyRate}
                agenticRate={agentic.hourlyRate}
              />
            ))}
          </CardContent>
        </Card>

        {/* Summary callout */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-full px-6 py-3">
            <DollarSign size={18} className="text-emerald-600" />
            <span className="text-base font-semibold text-emerald-700">
              Save up to {formatCurrency(maxSavings)} on an X-Large product with agentic delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
