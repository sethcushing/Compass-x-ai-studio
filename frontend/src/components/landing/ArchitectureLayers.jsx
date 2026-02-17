import React from 'react';
import { architectureLayers } from '../../data/mock';
import { getIcon } from '../../utils/iconMap';
import { useInView } from '../../hooks/useInView';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { ChevronDown } from 'lucide-react';

export const ArchitectureLayers = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="architecture" ref={ref} className="py-14 lg:py-20 bg-slate-50/60" aria-label="Architecture layers">
      <div className={`max-w-4xl mx-auto px-6 lg:px-8 section-animate ${isInView ? 'visible' : ''}`}>
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-orange-500 mb-2 block">Architecture</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Architecture Layers</h2>
          <p className="text-base text-slate-500 max-w-2xl">
            Stacked layers from experience to data — click any layer to explore
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {architectureLayers.map((layer, index) => {
            const IconComponent = getIcon(layer.iconName);

            return (
              <AccordionItem
                key={layer.id}
                value={layer.id}
                className="border-0"
              >
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md overflow-hidden" style={{ transition: 'box-shadow 0.3s ease' }}>
                  <AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]]:bg-orange-50/40">
                    <div className="flex items-center gap-4 flex-1 text-left">
                      {/* Left orange accent */}
                      <div className="w-1 h-10 bg-orange-400 rounded-full shrink-0" />

                      {/* Layer number */}
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          {String(layer.order).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                        {IconComponent && <IconComponent size={20} className="text-orange-500" strokeWidth={1.5} />}
                      </div>

                      {/* Title and description */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-mono font-semibold text-slate-900 uppercase tracking-wide">
                          {layer.title}
                        </h3>
                        <p className="text-sm text-slate-500 mt-0.5">{layer.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-5">
                    <div className="ml-[92px]">
                      {/* Expanded details */}
                      <ul className="space-y-2.5 mb-4">
                        {layer.expandedDetails.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-[7px] shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>

                      {/* Branches for Data Integration Layer */}
                      {layer.branches && (
                        <div className="flex flex-wrap gap-3 pt-2" role="list" aria-label="Data integration options">
                          {layer.branches.map((branch) => {
                            const BranchIcon = getIcon(branch.iconName);
                            return (
                              <div
                                key={branch.id}
                                className="flex items-center gap-2 bg-slate-50 rounded-lg px-4 py-2.5 border border-slate-200"
                                role="listitem"
                              >
                                {BranchIcon && <BranchIcon size={14} className="text-orange-500" strokeWidth={1.5} />}
                                <span className="text-xs font-mono font-medium text-slate-700">{branch.title}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </div>

                {/* Connector between layers */}
                {index < architectureLayers.length - 1 && (
                  <div className="flex justify-center py-1" aria-hidden="true">
                    <ChevronDown size={16} className="text-slate-300" />
                  </div>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};
