import React from 'react';
import { timelineSteps } from '../../data/mock';
import { getIcon } from '../../utils/iconMap';
import { useInView } from '../../hooks/useInView';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';

const StepCard = ({ step }) => {
  const IconComponent = getIcon(step.iconName);

  return (
    <Card className="border-slate-100 shadow-sm hover:shadow-md bg-white h-full" style={{ transition: 'box-shadow 0.3s ease' }}>
      <CardContent className="p-5 text-center">
        <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-3 mx-auto">
          {IconComponent && <IconComponent size={18} className="text-slate-600" strokeWidth={1.5} />}
        </div>
        <h3 className="text-sm font-semibold text-slate-900 mb-1 leading-tight">{step.title}</h3>
        {step.subtitle && (
          <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest block mb-2">
            {step.subtitle}
          </span>
        )}
        <p className="text-[11px] text-slate-500 leading-relaxed mt-1">{step.description}</p>
      </CardContent>
    </Card>
  );
};

export const DeliveryFlow = () => {
  const [ref, isInView] = useInView();

  return (
    <section
      id="delivery"
      ref={ref}
      className="py-20 lg:py-28 bg-slate-50/60"
      aria-label="Delivery walkthrough"
    >
      <div className={`max-w-7xl mx-auto px-6 lg:px-8 section-animate ${isInView ? 'visible' : ''}`}>
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-orange-500 mb-3 block">
            Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Delivery Walkthrough
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            From design to production — a governed, traceable delivery path
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block" role="list" aria-label="Delivery steps">
          {/* Timeline line with step numbers */}
          <div className="relative mb-8">
            <div className="absolute top-5 left-[7%] right-[7%] h-[2px] bg-slate-200" aria-hidden="true" />
            <div className="grid grid-cols-7 relative">
              {timelineSteps.map((step) => (
                <div key={step.id} className="flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold font-mono z-10 relative shadow-sm">
                    {step.order}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-7 gap-3">
            {timelineSteps.map((step) => (
              <div key={step.id} role="listitem">
                <StepCard step={step} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: vertical timeline */}
        <div className="lg:hidden" role="list" aria-label="Delivery steps">
          {timelineSteps.map((step, index) => {
            const IconComponent = getIcon(step.iconName);
            return (
              <div key={step.id} className="flex gap-4 mb-1" role="listitem">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold font-mono shrink-0 shadow-sm">
                    {step.order}
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <div className="w-[2px] flex-1 bg-slate-200 my-2" aria-hidden="true" />
                  )}
                </div>
                <Card className="flex-1 border-slate-100 shadow-sm mb-4 bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                        {IconComponent && <IconComponent size={16} className="text-slate-600" strokeWidth={1.5} />}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 mb-0.5">{step.title}</h3>
                        {step.subtitle && (
                          <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest">{step.subtitle}</span>
                        )}
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
