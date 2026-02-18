import React from 'react';
import { pipelineStages, releaseIncludes } from '../../data/mock';
import { getIcon } from '../../utils/iconMap';
import { useInView } from '../../hooks/useInView';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

export const ReleasePipeline = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="pipeline" ref={ref} className="py-14 lg:py-20 bg-white" aria-label="Release pipeline">
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 section-animate ${isInView ? 'visible' : ''}`}>
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-500 mb-2 block">Pipeline</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3">Release Pipeline</h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            Enterprise-governed stages from design approval to production release
          </p>
        </div>

        {/* Pipeline diagram - Desktop */}
        <div className="hidden lg:block" role="img" aria-label="Release pipeline diagram">
          <div className="relative bg-slate-50/80 rounded-2xl border border-slate-200 p-8">
            <div className="flex items-start justify-between">
              {pipelineStages.map((stage, index) => {
                const IconComponent = getIcon(stage.iconName);
                return (
                  <React.Fragment key={stage.id}>
                    <div className="flex flex-col items-center text-center">
                      <div
                        className="w-14 h-14 rounded-full bg-white border-2 border-sky-200 flex items-center justify-center mb-2.5 shadow-sm hover:border-sky-400"
                        style={{ transition: 'border-color 0.2s ease' }}
                      >
                        {IconComponent && <IconComponent size={20} className="text-sky-500" strokeWidth={1.5} />}
                      </div>
                      <span className="text-xs font-semibold text-slate-700 max-w-[90px] leading-tight">
                        {stage.title}
                      </span>
                      {/* Environment badges for CI/CD stage */}
                      {stage.environments && (
                        <div className="flex flex-wrap gap-1 mt-2 justify-center max-w-[110px]">
                          {stage.environments.map((env) => (
                            <Badge
                              key={env}
                              variant="outline"
                              className="text-[8px] px-1.5 py-0 rounded bg-sky-50 text-sky-600 border-sky-200 font-mono"
                            >
                              {env}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    {index < pipelineStages.length - 1 && (
                      <div className="flex-1 flex items-center mt-7 mx-1" aria-hidden="true">
                        <div className="h-[2px] bg-sky-200 flex-1" />
                        <ChevronRight size={14} className="text-sky-400 -ml-1" />
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
            {pipelineStages.map((stage) => {
              const IconComponent = getIcon(stage.iconName);
              return (
                <div key={stage.id} className="flex flex-col items-center text-center" role="listitem">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-sky-200 flex items-center justify-center shadow-sm">
                      {IconComponent && <IconComponent size={18} className="text-sky-500" strokeWidth={1.5} />}
                    </div>
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-sky-500 text-white text-[9px] font-mono font-bold flex items-center justify-center">
                      {stage.order}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-700 mt-2 leading-tight">
                    {stage.title}
                  </span>
                  {stage.environments && (
                    <div className="flex flex-wrap gap-1 mt-1.5 justify-center">
                      {stage.environments.map((env) => (
                        <Badge
                          key={env}
                          variant="outline"
                          className="text-[8px] px-1 py-0 rounded bg-sky-50 text-sky-600 border-sky-200 font-mono"
                        >
                          {env}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Release includes - enriched */}
        <Card className="mt-8 border-slate-200 shadow-sm bg-white">
          <CardContent className="p-6 lg:p-8">
            <h4 className="text-xs font-mono font-semibold text-slate-900 uppercase tracking-[0.15em] mb-5">
              Each release includes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {releaseIncludes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-[7px] shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-slate-800">{item.title}</span>
                    <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
