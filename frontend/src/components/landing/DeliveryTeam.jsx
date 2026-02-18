import React from 'react';
import { deliveryTeamData } from '../../data/mock';
import { useInView } from '../../hooks/useInView';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Settings, Briefcase, Code2 } from 'lucide-react';

const categoryIcons = {
  functional: Settings,
  business: Briefcase,
  technical: Code2
};

const categoryStyles = {
  functional: { circle: 'bg-sky-400/15 border-sky-300/30', label: 'text-sky-700', accent: 'bg-sky-500', dot: 'bg-sky-400', badge: 'bg-sky-50 text-sky-600 border-sky-200' },
  business: { circle: 'bg-sky-300/15 border-sky-200/30', label: 'text-sky-600', accent: 'bg-sky-400', dot: 'bg-sky-400', badge: 'bg-sky-50 text-sky-500 border-sky-200' },
  technical: { circle: 'bg-cyan-400/15 border-cyan-300/30', label: 'text-cyan-600', accent: 'bg-cyan-500', dot: 'bg-cyan-400', badge: 'bg-cyan-50 text-cyan-600 border-cyan-200' }
};

const VennDiagram = () => (
  <div className="relative w-[280px] h-[240px] lg:w-[340px] lg:h-[280px] mx-auto mb-6" role="img" aria-label="Venn diagram showing the intersection of Functional, Business, and Technical roles">
    {/* Functional circle - top left */}
    <div className={`absolute top-0 left-0 w-[170px] h-[170px] lg:w-[200px] lg:h-[200px] rounded-full ${categoryStyles.functional.circle} border`} />
    <div className="absolute top-[50px] left-[20px] lg:top-[58px] lg:left-[25px] text-center w-[70px] lg:w-[80px]">
      <Settings size={14} className="text-sky-500 mx-auto mb-1" strokeWidth={1.5} />
      <p className="text-[10px] lg:text-[11px] font-bold text-sky-700 leading-tight">Functional</p>
    </div>

    {/* Business circle - top right */}
    <div className={`absolute top-0 right-0 w-[170px] h-[170px] lg:w-[200px] lg:h-[200px] rounded-full ${categoryStyles.business.circle} border`} />
    <div className="absolute top-[50px] right-[18px] lg:top-[58px] lg:right-[22px] text-center w-[70px] lg:w-[80px]">
      <Briefcase size={14} className="text-sky-500 mx-auto mb-1" strokeWidth={1.5} />
      <p className="text-[10px] lg:text-[11px] font-bold text-sky-600 leading-tight">Business</p>
    </div>

    {/* Technical circle - bottom center */}
    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[170px] h-[170px] lg:w-[200px] lg:h-[200px] rounded-full ${categoryStyles.technical.circle} border`} />
    <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 text-center w-[70px] lg:w-[80px]">
      <Code2 size={14} className="text-cyan-500 mx-auto mb-1" strokeWidth={1.5} />
      <p className="text-[10px] lg:text-[11px] font-bold text-cyan-600 leading-tight">Technical</p>
    </div>
  </div>
);

export const DeliveryTeam = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="team" ref={ref} className="py-14 lg:py-20 bg-white" aria-label="Delivery team structure">
      <div className={`max-w-5xl mx-auto px-6 lg:px-8 section-animate ${isInView ? 'visible' : ''}`}>
        <div className="mb-6 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-500 mb-2 block">
            Delivery Team
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
            {deliveryTeamData.title}
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            {deliveryTeamData.description}
          </p>
        </div>

        {/* Venn Diagram */}
        <VennDiagram />
        <p className="text-center text-xs text-slate-400 italic mb-8">
          The intersection represents the convergence of all roles into the delivery team
        </p>

        {/* Category Accordions */}
        <Accordion type="multiple" className="space-y-3">
          {deliveryTeamData.categories.map((cat) => {
            const styles = categoryStyles[cat.id];
            const CatIcon = categoryIcons[cat.id];

            return (
              <AccordionItem key={cat.id} value={cat.id} className="border-0">
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md overflow-hidden" style={{ transition: 'box-shadow 0.2s ease' }}>
                  <AccordionTrigger className="px-5 py-4 hover:no-underline">
                    <div className="flex items-center gap-3 flex-1 text-left">
                      <div className={`w-9 h-9 rounded-lg ${styles.badge} border flex items-center justify-center shrink-0`}>
                        {CatIcon && <CatIcon size={16} className={styles.label} strokeWidth={1.5} />}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">{cat.title}</h3>
                        <p className="text-sm text-slate-500 mt-0.5">{cat.description}</p>
                      </div>
                      <span className="ml-auto text-xs font-mono text-slate-400 shrink-0 mr-2">
                        {cat.roles.length} roles
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-5 pb-5">
                    <div className="space-y-4 pt-1">
                      {cat.roles.map((role, ri) => (
                        <div key={ri} className="flex gap-3">
                          <div className={`w-1 rounded-full ${styles.accent} shrink-0`} />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-slate-800 mb-1.5">{role.title}</h4>
                            <ul className="space-y-1">
                              {role.items.map((item, ii) => (
                                <li key={ii} className="flex items-start gap-2 text-sm text-slate-500">
                                  <div className={`w-1.5 h-1.5 rounded-full ${styles.dot} mt-[7px] shrink-0`} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* Note */}
        <p className="text-sm text-slate-400 text-center mt-6 italic max-w-2xl mx-auto">
          {deliveryTeamData.note}
        </p>
      </div>
    </section>
  );
};
