import React from 'react';
import { pipelineStages, releaseIncludes } from '../../data/mock';
import { getIcon } from '../../utils/iconMap';
import { useInView } from '../../hooks/useInView';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export const ReleasePipeline = () => {
  const [ref, isInView] = useInView();

  return (
    <section
      id="pipeline"
      ref={ref}
      className="py-20 lg:py-28 bg-white"
      aria-label="Release pipeline"
    >
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 section-animate ${isInView ? 'visible' : ''}`}>
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-orange-500 mb-3 block">
            Pipeline
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Release Pipeline
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            Enterprise-governed stages from design approval to production release
          </p>
        </div>

        {/* Pipeline diagram - Desktop */}
        <div className="hidden lg:block" role="img" aria-label="Release pipeline diagram">
          <div className="relative bg-slate-50/80 rounded-2xl border border-slate-200 p-10">
            <div className="flex items-center justify-between">
              {pipelineStages.map((stage, index) => {
                const IconComponent = getIcon(stage.iconName);
                return (
                  <React.Fragment key={stage.id}>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-white border-2 border-orange-200 flex items-center justify-center mb-3 shadow-sm hover:border-orange-400" style={{ transition: 'border-color 0.2s ease' }}>
                        {IconComponent && <IconComponent size={20} className="text-orange-500" strokeWidth={1.5} />}
                      </div>
                      <span className="text-[10px] font-semibold text-slate-700 max-w-[85px] leading-tight">
                        {stage.title}
                      </span>
                    </div>
                    {index < pipelineStages.length - 1 && (
                      <div className="flex-1 flex items-center -mt-8 mx-1" aria-hidden="true">
                        <div className="h-[2px] bg-orange-200 flex-1" />
                        <ChevronRight size={14} className="text-orange-400 -ml-1" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pipeline diagram - Mobile */}
        <div className="lg:hidden" role="list" aria-label="Release pipeline stages">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {pipelineStages.map((stage, index) => {
              const IconComponent = getIcon(stage.iconName);
              return (
                <div key={stage.id} className="flex flex-col items-center text-center" role="listitem">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-orange-200 flex items-center justify-center shadow-sm">
                      {IconComponent && <IconComponent size={18} className="text-orange-500" strokeWidth={1.5} />}
                    </div>
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange-500 text-white text-[9px] font-mono font-bold flex items-center justify-center">
                      {stage.order}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-700 mt-2 leading-tight">
                    {stage.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Release includes */}
        <Card className="mt-10 border-slate-200 shadow-sm bg-white">
          <CardContent className="p-6 lg:p-8">
            <h4 className="text-xs font-mono font-semibold text-slate-900 uppercase tracking-[0.15em] mb-5">
              Each release includes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {releaseIncludes.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
