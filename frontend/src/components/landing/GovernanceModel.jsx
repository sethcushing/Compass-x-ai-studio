import React, { useState } from 'react';
import { governanceData, guardrailsData } from '../../data/mock';
import { getIcon } from '../../utils/iconMap';
import { useInView } from '../../hooks/useInView';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { ClipboardCheck, ShieldAlert, User } from 'lucide-react';

const StateDetailPanel = ({ state }) => {
  if (!state) return null;

  return (
    <div className="animate-slide-down mt-4 bg-orange-50/50 rounded-xl border border-orange-100 p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-orange-500" />
        <h5 className="text-sm font-bold text-slate-900">{state.label}</h5>
      </div>
      <p className="text-sm text-slate-600 mb-4">{state.description}</p>

      <div className="mb-4">
        <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-orange-500 block mb-2">
          Requirements
        </span>
        <ul className="space-y-1.5">
          {state.requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-[7px] shrink-0" />
              {req}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-2 text-sm text-slate-500">
        <User size={14} className="text-orange-500" strokeWidth={1.5} />
        <span className="font-medium">{state.owner}</span>
      </div>
    </div>
  );
};

export const GovernanceModel = () => {
  const [ref, isInView] = useInView();
  const [selectedState, setSelectedState] = useState(null);

  const activeState = governanceData.approvalStates.find(s => s.label === selectedState);

  const toggleState = (label) => {
    setSelectedState(prev => prev === label ? null : label);
  };

  return (
    <section id="governance" ref={ref} className="py-14 lg:py-20 bg-slate-50/60" aria-label="Governance and guardrails">
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 section-animate ${isInView ? 'visible' : ''}`}>
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-orange-500 mb-2 block">Controls</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Governance Model</h2>
          <p className="text-base text-slate-500 max-w-2xl">
            Enterprise controls ensuring security, traceability, and compliance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column: Governance */}
          <Card className="border-slate-200 shadow-sm bg-white">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                  <ClipboardCheck size={20} className="text-orange-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Governance</h3>
              </div>

              {/* Approval lifecycle states - clickable */}
              <div className="mb-6">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-orange-500 mb-3">
                  Approval Lifecycle States
                </h4>
                <div className="flex flex-wrap gap-2">
                  {governanceData.approvalStates.map((state) => (
                    <Badge
                      key={state.label}
                      variant="outline"
                      className={`px-3 py-1.5 text-xs font-medium rounded-full cursor-pointer ${
                        selectedState === state.label
                          ? 'bg-orange-500 text-white border-orange-500'
                          : state.status === 'active'
                            ? 'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                      style={{ transition: 'all 0.2s ease' }}
                      onClick={() => toggleState(state.label)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && toggleState(state.label)}
                    >
                      {state.label}
                    </Badge>
                  ))}
                </div>

                {/* Detail panel for selected state */}
                <StateDetailPanel state={activeState} />
              </div>

              <Separator className="my-5 bg-slate-100" />

              {/* Required reviewers */}
              <div className="mb-6">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-orange-500 mb-3">
                  Required Reviewers
                </h4>
                <ul className="space-y-2">
                  {governanceData.reviewers.map((reviewer, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      {reviewer}
                    </li>
                  ))}
                </ul>
              </div>

              <Separator className="my-5 bg-slate-100" />

              {/* Traceability */}
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-orange-500 mb-3">
                  Traceability
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {governanceData.traceability}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Right Column: Guardrails */}
          <Card className="border-slate-200 shadow-sm bg-white">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                  <ShieldAlert size={20} className="text-orange-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Guardrails</h3>
              </div>

              {Object.values(guardrailsData).map((section, sectionIndex) => {
                const SectionIcon = getIcon(section.iconName);
                return (
                  <React.Fragment key={section.title}>
                    {sectionIndex > 0 && <Separator className="my-5 bg-slate-100" />}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        {SectionIcon && (
                          <SectionIcon size={14} className="text-orange-500" strokeWidth={1.5} />
                        )}
                        <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-orange-500">
                          {section.title}
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </React.Fragment>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
