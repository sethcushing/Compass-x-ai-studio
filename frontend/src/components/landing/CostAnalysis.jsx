import React, { useState } from 'react';
import { costAnalysisData } from '../../data/mock';
import { useInView } from '../../hooks/useInView';
import { Card, CardContent } from '../ui/card';
import { Users, Zap, Clock, TrendingDown } from 'lucide-react';

const sizeColors = {
  Small: 'bg-emerald-500',
  Medium: 'bg-sky-500',
  Large: 'bg-amber-500',
  'X-Large': 'bg-rose-500',
};

const TraditionalRow = ({ size }) => {
  const totalWeeks = size.sprints * 2;
  const totalPersonWeeks = totalWeeks * size.people;
  return (
    <div className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0">
      <div className={`w-2 h-10 rounded-full ${sizeColors[size.label]} shrink-0`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-base font-bold text-slate-900">{size.label}</span>
          <span className="text-sm text-slate-400 font-mono">{size.label[0]}</span>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-500">
          <span>{size.sprints} sprints</span>
          <span>{totalWeeks} weeks</span>
          <span>{size.people} people</span>
        </div>
      </div>
      <div className="text-right shrink-0">
        <span className="text-lg font-bold text-slate-900 font-mono">{totalPersonWeeks}</span>
        <span className="text-sm text-slate-400 block">person-weeks</span>
      </div>
    </div>
  );
};

const AgenticRow = ({ size, traditionalSize }) => {
  const tradWeeks = traditionalSize.sprints * 2 * traditionalSize.people;
  const agenticWeeks = size.weeks || (size.days / 5) || (size.hours / 40);
  const savings = tradWeeks > 0 && agenticWeeks > 0 ? Math.round(((tradWeeks - agenticWeeks) / tradWeeks) * 100) : 99;

  const timeDisplay = () => {
    if (size.hours <= 40) return `${size.hours} hours`;
    if (size.weeks <= 4) return `${size.weeks} week${size.weeks !== 1 ? 's' : ''}`;
    return `${size.months} month${size.months !== 1 ? 's' : ''}`;
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0">
      <div className={`w-2 h-10 rounded-full ${sizeColors[size.label]} shrink-0`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-base font-bold text-slate-900">{size.label}</span>
          <span className="text-sm text-slate-400 font-mono">{size.label[0]}</span>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-500">
          <span>{size.hours} hrs</span>
          <span>{size.days} days</span>
          {size.weeks > 0 && <span>{size.weeks} wk{size.weeks !== 1 ? 's' : ''}</span>}
          {size.months > 0 && <span>{size.months} mo</span>}
        </div>
      </div>
      <div className="text-right shrink-0">
        <span className="text-lg font-bold text-emerald-600 font-mono">{timeDisplay()}</span>
        <div className="flex items-center gap-1 justify-end mt-0.5">
          <TrendingDown size={12} className="text-emerald-500" />
          <span className="text-sm font-semibold text-emerald-500">{savings}% savings</span>
        </div>
      </div>
    </div>
  );
};

export const CostAnalysis = () => {
  const [ref, isInView] = useInView();
  const { traditional, agentic } = costAnalysisData;

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
                    {traditional.teamSize} &middot; {traditional.sprintLength}
                  </p>
                </div>
              </div>
            </div>
            <CardContent className="p-5">
              {traditional.sizes.map((size) => (
                <TraditionalRow key={size.label} size={size} />
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
                    {agentic.teamSize} &middot; Measured in hours to weeks
                  </p>
                </div>
              </div>
            </div>
            <CardContent className="p-5">
              {agentic.sizes.map((size, i) => (
                <AgenticRow key={size.label} size={size} traditionalSize={traditional.sizes[i]} />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Summary callout */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-full px-6 py-3">
            <TrendingDown size={18} className="text-emerald-600" />
            <span className="text-base font-semibold text-emerald-700">
              Reduce delivery time by up to 95% and team cost by 85% with agentic delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
