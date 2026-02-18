import React, { useState } from 'react';
import { deliveryTeamData } from '../../data/mock';
import { getIcon } from '../../utils/iconMap';
import { useInView } from '../../hooks/useInView';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ChevronDown, Users } from 'lucide-react';

const categoryColors = {
  functional: { bg: 'bg-sky-500', light: 'bg-sky-100', text: 'text-sky-600', border: 'border-sky-200' },
  business: { bg: 'bg-sky-400', light: 'bg-sky-50', text: 'text-sky-500', border: 'border-sky-200' },
  technical: { bg: 'bg-cyan-500', light: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200' }
};

const VennDiagram = () => (
  <div className="relative w-[340px] h-[300px] lg:w-[420px] lg:h-[360px] mx-auto my-8" role="img" aria-label="Venn diagram showing Functional, Business, and Technical roles converging in the Data Product Management Team">
    {/* Functional circle - top left */}
    <div className="absolute top-0 left-0 w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] rounded-full bg-sky-400/15 border border-sky-300/30" />
    <div className="absolute top-[60px] left-[30px] lg:top-[75px] lg:left-[38px] text-center w-[80px] lg:w-[100px]">
      <p className="text-[11px] lg:text-xs font-bold text-sky-700">Functional Roles</p>
      <p className="text-[8px] lg:text-[9px] text-slate-500 mt-0.5 leading-tight hidden lg:block">
        {deliveryTeamData.categories.functional.description.substring(0, 60)}...
      </p>
    </div>

    {/* Business circle - top right */}
    <div className="absolute top-0 right-0 w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] rounded-full bg-sky-300/15 border border-sky-200/30" />
    <div className="absolute top-[60px] right-[25px] lg:top-[75px] lg:right-[30px] text-center w-[80px] lg:w-[100px]">
      <p className="text-[11px] lg:text-xs font-bold text-sky-600">Business Roles</p>
      <p className="text-[8px] lg:text-[9px] text-slate-500 mt-0.5 leading-tight hidden lg:block">
        {deliveryTeamData.categories.business.description.substring(0, 60)}...
      </p>
    </div>

    {/* Technical circle - bottom center */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] rounded-full bg-cyan-400/15 border border-cyan-300/30" />
    <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 text-center w-[90px] lg:w-[110px]">
      <p className="text-[11px] lg:text-xs font-bold text-cyan-600">Technical Roles</p>
      <p className="text-[8px] lg:text-[9px] text-slate-500 mt-0.5 leading-tight hidden lg:block">
        {deliveryTeamData.categories.technical.description.substring(0, 60)}...
      </p>
    </div>

    {/* Center intersection label */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <div className="bg-white rounded-xl shadow-sm border border-sky-200 px-4 py-3">
        <Users size={18} className="text-sky-500 mx-auto mb-1" strokeWidth={1.5} />
        <p className="text-[10px] lg:text-[11px] font-bold text-slate-800 leading-tight">
          Data Product<br />Management Team
        </p>
      </div>
    </div>
  </div>
);

const RoleCard = ({ role }) => {
  const [expanded, setExpanded] = useState(false);
  const IconComponent = getIcon(role.iconName);
  const colors = categoryColors[role.category];

  return (
    <Card
      className={`border-slate-200 shadow-sm bg-white cursor-pointer hover:shadow-md ${expanded ? 'ring-2 ring-sky-100' : ''}`}
      style={{ transition: 'box-shadow 0.2s ease' }}
      onClick={() => setExpanded(prev => !prev)}
    >
      <CardContent className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className={`w-8 h-8 rounded-full ${colors.bg} text-white flex items-center justify-center text-sm font-bold font-mono shrink-0`}>
            {role.order}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <h4 className="text-base font-bold text-slate-900">{role.title}</h4>
              {role.combinable && (
                <Badge variant="outline" className="text-[9px] px-1.5 py-0 rounded bg-slate-50 text-slate-500 border-slate-200 font-mono">
                  May be combined
                </Badge>
              )}
            </div>
            <Badge variant="outline" className={`text-[9px] px-2 py-0 rounded-full ${colors.light} ${colors.text} ${colors.border} font-mono`}>
              {deliveryTeamData.categories[role.category].title}
            </Badge>
          </div>
          <ChevronDown
            size={16}
            className={`shrink-0 text-slate-300 mt-1 ${expanded ? 'rotate-180 text-sky-500' : ''}`}
            style={{ transition: 'transform 0.2s ease, color 0.2s ease' }}
          />
        </div>

        {/* Responsibilities */}
        <ul className="mt-3 space-y-1.5">
          {role.responsibilities.map((resp, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-[7px] shrink-0" />
              {resp}
            </li>
          ))}
        </ul>

        {/* Expanded: Sub-roles */}
        {expanded && role.subRoles && (
          <div className="animate-slide-down mt-4 pt-4 border-t border-slate-100 space-y-4">
            {role.subRoles.map((sub, si) => (
              <div key={si}>
                <h5 className="text-sm font-semibold text-slate-800 mb-1.5 flex items-center gap-2">
                  <div className="w-1 h-4 bg-sky-400 rounded-full" />
                  {sub.title}
                </h5>
                <ul className="ml-3 space-y-1">
                  {sub.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2 text-sm text-slate-500">
                      <div className="w-1 h-1 rounded-full bg-slate-300 mt-[8px] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export const DeliveryTeam = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="team" ref={ref} className="py-14 lg:py-20 bg-white" aria-label="Delivery team structure">
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 section-animate ${isInView ? 'visible' : ''}`}>
        <div className="mb-8 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-500 mb-2 block">
            Delivery Team
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
            {deliveryTeamData.title}
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto mb-4">
            {deliveryTeamData.description}
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto italic">
            {deliveryTeamData.note}
          </p>
        </div>

        {/* Venn Diagram */}
        <VennDiagram />

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          {deliveryTeamData.roles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
};
