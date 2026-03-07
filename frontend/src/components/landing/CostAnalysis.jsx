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

const TraditionalRow = ({ size, rate }) => {
  const totalWeeks = size.sprints * 2;
  const totalHours = totalWeeks * 40 * size.people;
  const totalCost = totalHours * rate;

  return (
    <div className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0">
      <div className={`w-2 h-10 rounded-full ${sizeColors[size.label]} shrink-0`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-base font-bold text-slate-900">{size.label}</span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
          <span>{size.sprints} sprints</span>
          <span>{totalWeeks} wks</span>
          <span>{size.people} people</span>
        </div>
      </div>
      <div className="text-right shrink-0">
        <span className="text-xl font-bold text-slate-900 font-mono">{formatCurrency(totalCost)}</span>
        <span className="text-sm text-slate-400 block">{totalHours.toLocaleString()} hrs @ ${rate}/hr</span>
      </div>
    </div>
  );
};

const AgenticRow = ({ size, traditionalSize, tradRate, agenticRate }) => {
  const tradTotalHours = traditionalSize.sprints * 2 * 40 * traditionalSize.people;
  const tradCost = tradTotalHours * tradRate;
  const agenticCost = size.hours * agenticRate;
  const savings = tradCost - agenticCost;

  return (
    <div className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0">
      <div className={`w-2 h-10 rounded-full ${sizeColors[size.label]} shrink-0`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-base font-bold text-slate-900">{size.label}</span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
          <span>{size.hours} hrs</span>
          <span>{size.days} days</span>
          {size.weeks > 0 && <span>{size.weeks} wk{size.weeks !== 1 ? 's' : ''}</span>}
        </div>
      </div>
      <div className="text-right shrink-0">
        <span className="text-xl font-bold text-emerald-600 font-mono">{formatCurrency(agenticCost)}</span>
        <span className="text-sm text-slate-400 block">{size.hours} hrs @ ${agenticRate}/hr</span>
        <div className="flex items-center gap-1 justify-end mt-1">
          <TrendingDown size={12} className="text-emerald-500" />
          <span className="text-sm font-bold text-emerald-600">Save {formatCurrency(savings)}</span>
        </div>
      </div>
    </div>
  );
};

export const CostAnalysis = () => {
  const [ref, isInView] = useInView();
  const { traditional, agentic } = costAnalysisData;

  // Calculate total possible savings for the callout
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Traditional Delivery */}
          <Card className="border-slate-200 shadow-sm bg-white overflow-hidden" data-testid="traditional-cost-card">
            <div className="bg-slate-800 px-6 py-5">
              <div className="flex items-center gap-3">
                <Users size={20} className="text-slate-300" strokeWidth={1.5} />
                <div>
                  <h3 className="text-base font-bold text-white">{traditional.label}</h3>
                  <p className="text-sm text-slate-400 mt-0.5">
                    {traditional.teamSize} &middot; {traditional.sprintLength} &middot; ${traditional.hourlyRate}/hr blended rate
                  </p>
                </div>
              </div>
            </div>
            <CardContent className="p-5">
              {traditional.sizes.map((size) => (
                <TraditionalRow key={size.label} size={size} rate={traditional.hourlyRate} />
              ))}
            </CardContent>
          </Card>

          {/* Agentic Delivery */}
          <Card className="border-sky-200 shadow-sm bg-white overflow-hidden" data-testid="agentic-cost-card">
            <div className="bg-sky-500 px-6 py-5">
              <div className="flex items-center gap-3">
                <Zap size={20} className="text-white/90" strokeWidth={1.5} />
                <div>
                  <h3 className="text-base font-bold text-white">{agentic.label}</h3>
                  <p className="text-sm text-white/70 mt-0.5">
                    {agentic.teamSize} &middot; ${agentic.hourlyRate}/hr &middot; Measured in hours to weeks
                  </p>
                </div>
              </div>
            </div>
            <CardContent className="p-5">
              {agentic.sizes.map((size, i) => (
                <AgenticRow
                  key={size.label}
                  size={size}
                  traditionalSize={traditional.sizes[i]}
                  tradRate={traditional.hourlyRate}
                  agenticRate={agentic.hourlyRate}
                />
              ))}
            </CardContent>
          </Card>
        </div>

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
