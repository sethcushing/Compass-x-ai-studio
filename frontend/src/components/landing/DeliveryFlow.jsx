import React, { useState } from 'react';
import { timelineSteps } from '../../data/mock';
import { getIcon } from '../../utils/iconMap';
import { useInView } from '../../hooks/useInView';
import { Card, CardContent } from '../ui/card';
import { ChevronDown } from 'lucide-react';

const StepCircle = ({ step, isSelected, onClick }) => (
  <div
    className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold font-mono z-10 relative shadow-sm cursor-pointer ${
      isSelected
        ? 'bg-sky-600 text-white ring-4 ring-sky-100'
        : 'bg-sky-500 text-white hover:bg-sky-600'
    }`}
    style={{ transition: 'background-color 0.2s ease, box-shadow 0.2s ease' }}
    onClick={onClick}
    role="button"
    tabIndex={0}
    aria-label={`Step ${step.order}: ${step.title}`}
    onKeyDown={(e) => e.key === 'Enter' && onClick()}
  >
    {step.order}
  </div>
);

const DetailPanel = ({ step }) => {
  const IconComponent = getIcon(step.iconName);
  return (
    <div className="animate-slide-down mt-6 bg-white rounded-xl border border-sky-100 shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
            {IconComponent && <IconComponent size={22} className="text-sky-500" strokeWidth={1.5} />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
              {step.subtitle && (
                <span className="text-[11px] font-mono text-sky-500 uppercase tracking-widest bg-sky-50 px-2 py-0.5 rounded">
                  {step.subtitle}
                </span>
              )}
            </div>
            <p className="text-sm text-slate-500 mb-4">{step.description}</p>
            <ul className="space-y-2.5">
              {step.expandedDetails.map((detail, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-[7px] shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DeliveryFlow = () => {
  const [ref, isInView] = useInView();
  const [selectedStep, setSelectedStep] = useState(null);

  const toggleStep = (stepId) => {
    setSelectedStep(prev => prev === stepId ? null : stepId);
  };

  const activeStep = timelineSteps.find(s => s.id === selectedStep);

  return (
    <section id="delivery" ref={ref} className="py-14 lg:py-20 bg-slate-50/60" aria-label="Delivery walkthrough">
      <div className={`max-w-7xl mx-auto px-6 lg:px-8 section-animate ${isInView ? 'visible' : ''}`}>
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-500 mb-2 block">Process</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Delivery Walkthrough</h2>
          <p className="text-base text-slate-500 max-w-2xl">
            From design to production — click any step to explore details
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block" role="list" aria-label="Delivery steps">
          <div className="relative mb-6">
            <div className="absolute top-5 left-[7%] right-[7%] h-[2px] bg-slate-200" aria-hidden="true" />
            <div className="grid grid-cols-7 relative">
              {timelineSteps.map((step) => (
                <div key={step.id} className="flex justify-center">
                  <StepCircle step={step} isSelected={selectedStep === step.id} onClick={() => toggleStep(step.id)} />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-7 gap-3">
            {timelineSteps.map((step) => {
              const IconComponent = getIcon(step.iconName);
              return (
                <div key={step.id} role="listitem">
                  <Card
                    className={`border-slate-100 shadow-sm bg-white h-full cursor-pointer ${
                      selectedStep === step.id ? 'ring-2 ring-sky-200 border-sky-200' : 'hover:shadow-md'
                    }`}
                    style={{ transition: 'box-shadow 0.2s ease, border-color 0.2s ease' }}
                    onClick={() => toggleStep(step.id)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center mb-2.5 mx-auto">
                        {IconComponent && <IconComponent size={18} className="text-slate-600" strokeWidth={1.5} />}
                      </div>
                      <h3 className="text-[13px] font-semibold text-slate-900 mb-0.5 leading-tight">{step.title}</h3>
                      {step.subtitle && (
                        <span className="text-[10px] font-mono text-sky-500 uppercase tracking-widest block mb-1.5">{step.subtitle}</span>
                      )}
                      <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
                      <ChevronDown
                        size={14}
                        className={`mx-auto mt-2 text-slate-300 ${selectedStep === step.id ? 'rotate-180 text-sky-400' : ''}`}
                        style={{ transition: 'transform 0.2s ease, color 0.2s ease' }}
                      />
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {activeStep && <DetailPanel step={activeStep} />}
        </div>

        {/* Mobile & Tablet: vertical timeline */}
        <div className="lg:hidden" role="list" aria-label="Delivery steps">
          {timelineSteps.map((step, index) => {
            const IconComponent = getIcon(step.iconName);
            const isExpanded = selectedStep === step.id;
            return (
              <div key={step.id} className="flex gap-4 mb-1" role="listitem">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-mono shrink-0 shadow-sm cursor-pointer ${
                      isExpanded ? 'bg-sky-600 text-white ring-4 ring-sky-100' : 'bg-sky-500 text-white'
                    }`}
                    onClick={() => toggleStep(step.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && toggleStep(step.id)}
                  >
                    {step.order}
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <div className="w-[2px] flex-1 bg-slate-200 my-1.5" aria-hidden="true" />
                  )}
                </div>
                <div className="flex-1 mb-3">
                  <Card
                    className={`border-slate-100 shadow-sm bg-white cursor-pointer ${
                      isExpanded ? 'ring-2 ring-sky-200 border-sky-200' : ''
                    }`}
                    onClick={() => toggleStep(step.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                          {IconComponent && <IconComponent size={16} className="text-slate-600" strokeWidth={1.5} />}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-slate-900 mb-0.5">{step.title}</h3>
                          {step.subtitle && (
                            <span className="text-[10px] font-mono text-sky-500 uppercase tracking-widest">{step.subtitle}</span>
                          )}
                          <p className="text-xs text-slate-500 mt-1">{step.description}</p>
                        </div>
                        <ChevronDown
                          size={14}
                          className={`shrink-0 text-slate-300 mt-1 ${isExpanded ? 'rotate-180 text-sky-400' : ''}`}
                          style={{ transition: 'transform 0.2s ease' }}
                        />
                      </div>
                      {isExpanded && (
                        <div className="animate-slide-down mt-4 pt-4 border-t border-slate-100">
                          <ul className="space-y-2">
                            {step.expandedDetails.map((detail, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-[5px] shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
