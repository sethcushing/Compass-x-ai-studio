import React, { useState } from 'react';
import { deliveryTeamData } from '../../data/mock';
import { useInView } from '../../hooks/useInView';
import { Card, CardContent } from '../ui/card';
import { Settings, Briefcase, Code2, ChevronRight } from 'lucide-react';

const categoryMeta = {
  functional: { icon: Settings, accent: 'bg-sky-500', accentLight: 'bg-sky-50', accentText: 'text-sky-500', accentBorder: 'border-sky-200', dot: 'bg-sky-400' },
  business: { icon: Briefcase, accent: 'bg-sky-500', accentLight: 'bg-sky-50', accentText: 'text-sky-500', accentBorder: 'border-sky-200', dot: 'bg-sky-400' },
  technical: { icon: Code2, accent: 'bg-sky-500', accentLight: 'bg-sky-50', accentText: 'text-sky-500', accentBorder: 'border-sky-200', dot: 'bg-sky-400' }
};

const RoleItem = ({ role, meta, isOpen, onToggle }) => (
  <div className="group">
    <div
      className={`flex items-center gap-2.5 py-2.5 px-3 rounded-lg cursor-pointer ${
        isOpen ? `${meta.accentLight} ${meta.accentBorder} border` : 'hover:bg-slate-50'
      }`}
      style={{ transition: 'background-color 0.15s ease' }}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onToggle()}
    >
      <ChevronRight
        size={14}
        className={`shrink-0 ${isOpen ? `${meta.accentText} rotate-90` : 'text-slate-300'}`}
        style={{ transition: 'transform 0.2s ease, color 0.2s ease' }}
      />
      <span className={`text-sm font-semibold ${isOpen ? meta.accentText : 'text-slate-700'}`}>
        {role.title}
      </span>
    </div>

    {isOpen && (
      <div className="animate-slide-down ml-9 mt-1 mb-2">
        <ul className="space-y-1.5 py-1">
          {role.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-500 leading-relaxed">
              <div className={`w-1 h-1 rounded-full ${meta.dot} mt-[8px] shrink-0`} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const CategoryColumn = ({ category }) => {
  const meta = categoryMeta[category.id];
  const CatIcon = meta.icon;
  const [openRoles, setOpenRoles] = useState({});

  const toggleRole = (title) => {
    setOpenRoles(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Card className="border-slate-200 shadow-sm bg-white overflow-hidden h-full">
      {/* Category header bar */}
      <div className={`${meta.accent} px-5 py-4`}>
        <div className="flex items-center gap-2.5">
          <CatIcon size={18} className="text-white/90" strokeWidth={1.5} />
          <h3 className="text-base font-bold text-white">{category.title}</h3>
        </div>
        <p className="text-xs text-white/70 mt-1 leading-relaxed">{category.description}</p>
      </div>

      {/* Roles list */}
      <CardContent className="p-3">
        <div className="space-y-0.5">
          {category.roles.map((role) => (
            <RoleItem
              key={role.title}
              role={role}
              meta={meta}
              isOpen={!!openRoles[role.title]}
              onToggle={() => toggleRole(role.title)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const DeliveryTeam = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="team" ref={ref} className="py-14 lg:py-20 bg-slate-50/60" aria-label="Delivery team structure">
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 section-animate ${isInView ? 'visible' : ''}`}>
        {/* Header */}
        <div className="mb-10 text-center">
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

        {/* Converging visual header */}
        <div className="flex items-end justify-center gap-0 mb-1 px-4" aria-hidden="true">
          <div className="h-[3px] flex-1 max-w-[200px] bg-sky-500 rounded-l-full" />
          <div className="h-[3px] flex-1 max-w-[200px] bg-sky-500" />
          <div className="h-[3px] flex-1 max-w-[200px] bg-sky-500 rounded-r-full" />
        </div>

        {/* Three-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {deliveryTeamData.categories.map((cat) => (
            <CategoryColumn key={cat.id} category={cat} />
          ))}
        </div>

        {/* Converging bottom + note */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3" aria-hidden="true">
            <div className="h-[1px] w-16 bg-slate-200" />
            <div className="w-2 h-2 rounded-full bg-sky-400" />
            <div className="h-[1px] w-16 bg-slate-200" />
          </div>
          <p className="text-sm text-slate-500 font-medium">
            Together, these roles converge to form the data product delivery team
          </p>
          <p className="text-xs text-slate-400 italic mt-2 max-w-xl mx-auto">
            {deliveryTeamData.note}
          </p>
        </div>
      </div>
    </section>
  );
};
