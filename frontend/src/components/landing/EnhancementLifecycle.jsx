import React from 'react';
import { loopFlow } from '../../data/mock';
import { getIcon } from '../../utils/iconMap';
import { useInView } from '../../hooks/useInView';
import { ChevronRight, ChevronLeft, ArrowDown, ArrowUp, RotateCcw } from 'lucide-react';

const LoopNode = ({ step }) => {
  const IconComponent = getIcon(step.iconName);
  return (
    <div className="flex flex-col items-center text-center shrink-0 w-[110px]">
      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-2">
        {IconComponent && <IconComponent size={18} className="text-orange-500" strokeWidth={1.5} />}
      </div>
      <span className="text-[11px] font-semibold text-slate-700 leading-tight">{step.title}</span>
    </div>
  );
};

export const EnhancementLifecycle = () => {
  const [ref, isInView] = useInView();

  const topRow = loopFlow.slice(0, 4);
  const bottomRow = [loopFlow[6], loopFlow[5], loopFlow[4]];

  return (
    <section
      id="enhancement"
      ref={ref}
      className="py-20 lg:py-28 bg-white"
      aria-label="Enhancement lifecycle"
    >
      <div className={`max-w-5xl mx-auto px-6 lg:px-8 section-animate ${isInView ? 'visible' : ''}`}>
        <div className="mb-14 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-orange-500 mb-3 block">
            Lifecycle
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Enhancements follow the same governed path
          </h2>
        </div>

        {/* Desktop: rectangular loop diagram */}
        <div className="hidden lg:block" role="img" aria-label="Continuous enhancement lifecycle diagram">
          <div className="relative border-2 border-dashed border-orange-200 rounded-[2rem] py-10 px-12">
            {/* Continuous cycle label */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white px-5">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400">
                Continuous Cycle
              </span>
            </div>

            {/* Top row: steps 1-4, left to right */}
            <div className="flex items-center justify-between gap-2 mb-10">
              {topRow.map((step, i) => (
                <React.Fragment key={step.id}>
                  <LoopNode step={step} />
                  {i < topRow.length - 1 && (
                    <ChevronRight size={18} className="text-orange-400 shrink-0 mx-1" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Direction indicators between rows */}
            <div className="flex items-center justify-between px-6 mb-10">
              <div className="flex items-center gap-1.5 text-orange-400">
                <ArrowUp size={14} />
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-orange-400">
                  return
                </span>
              </div>
              <div className="flex-1 border-t border-dashed border-slate-200 mx-6" />
              <div className="flex items-center gap-1.5 text-orange-400">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-orange-400">
                  continue
                </span>
                <ArrowDown size={14} />
              </div>
            </div>

            {/* Bottom row: steps 7, 6, 5, right to left */}
            <div className="flex items-center gap-2">
              {bottomRow.map((step, i) => (
                <React.Fragment key={step.id}>
                  <LoopNode step={step} />
                  {i < bottomRow.length - 1 && (
                    <ChevronLeft size={18} className="text-orange-400 shrink-0 mx-1" />
                  )}
                </React.Fragment>
              ))}
              <div className="flex-1" />
            </div>
          </div>
        </div>

        {/* Mobile: vertical flow with loop indicator */}
        <div className="lg:hidden">
          <div className="relative pl-8 border-l-2 border-dashed border-orange-200">
            {loopFlow.map((step, i) => {
              const IconComponent = getIcon(step.iconName);
              return (
                <div key={step.id} className="relative mb-6 last:mb-0">
                  <div className="absolute -left-[25px] top-3 w-3.5 h-3.5 rounded-full bg-orange-500 border-[3px] border-white shadow-sm" />
                  <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                        {IconComponent && <IconComponent size={16} className="text-orange-500" strokeWidth={1.5} />}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800">{step.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="absolute -left-[25px] -bottom-1 flex items-center justify-center">
              <RotateCcw size={14} className="text-orange-500" />
            </div>
          </div>
        </div>

        <p className="text-center text-slate-500 mt-14 max-w-2xl mx-auto text-sm leading-relaxed">
          All updates and enhancements follow the identical enterprise-approved
          lifecycle. No production changes bypass enterprise controls.
        </p>
      </div>
    </section>
  );
};
