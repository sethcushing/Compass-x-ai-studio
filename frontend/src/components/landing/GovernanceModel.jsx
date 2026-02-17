import React from 'react';
import { governanceData, guardrailsData } from '../../data/mock';
import { getIcon } from '../../utils/iconMap';
import { useInView } from '../../hooks/useInView';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { ClipboardCheck, ShieldAlert } from 'lucide-react';

export const GovernanceModel = () => {
  const [ref, isInView] = useInView();

  return (
    <section
      id="governance"
      ref={ref}
      className="py-20 lg:py-28 bg-slate-50/60"
      aria-label="Governance and guardrails"
    >
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 section-animate ${isInView ? 'visible' : ''}`}>
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-orange-500 mb-3 block">
            Controls
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Governance Model
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            Enterprise controls ensuring security, traceability, and compliance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column: Governance */}
          <Card className="border-slate-200 shadow-sm bg-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                  <ClipboardCheck size={20} className="text-orange-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Governance</h3>
              </div>

              {/* Approval lifecycle states */}
              <div className="mb-8">
                <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-orange-500 mb-4">
                  Approval Lifecycle States
                </h4>
                <div className="flex flex-wrap gap-2">
                  {governanceData.approvalStates.map((state, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className={`px-3 py-1.5 text-xs font-medium rounded-full ${
                        state.status === 'active'
                          ? 'bg-orange-50 text-orange-600 border-orange-200'
                          : 'bg-slate-50 text-slate-600 border-slate-200'
                      }`}
                    >
                      {state.label}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="my-6 bg-slate-100" />

              {/* Required reviewers */}
              <div className="mb-8">
                <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-orange-500 mb-4">
                  Required Reviewers
                </h4>
                <ul className="space-y-2.5">
                  {governanceData.reviewers.map((reviewer, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      {reviewer}
                    </li>
                  ))}
                </ul>
              </div>

              <Separator className="my-6 bg-slate-100" />

              {/* Traceability */}
              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-orange-500 mb-4">
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
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                  <ShieldAlert size={20} className="text-orange-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Guardrails</h3>
              </div>

              {Object.values(guardrailsData).map((section, sectionIndex) => {
                const SectionIcon = getIcon(section.iconName);
                return (
                  <React.Fragment key={section.title}>
                    {sectionIndex > 0 && <Separator className="my-6 bg-slate-100" />}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        {SectionIcon && (
                          <SectionIcon size={14} className="text-orange-500" strokeWidth={1.5} />
                        )}
                        <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-orange-500">
                          {section.title}
                        </h4>
                      </div>
                      <ul className="space-y-2.5">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
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
