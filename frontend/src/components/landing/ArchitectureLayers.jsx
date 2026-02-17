import React from 'react';
import { architectureLayers } from '../../data/mock';
import { getIcon } from '../../utils/iconMap';
import { useInView } from '../../hooks/useInView';
import { ChevronDown } from 'lucide-react';

const LayerCard = ({ layer, index, total }) => {
  const IconComponent = getIcon(layer.iconName);

  return (
    <div className="group" role="listitem">
      <div
        className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md overflow-hidden"
        style={{ transition: 'box-shadow 0.3s ease' }}
      >
        <div className="flex items-start gap-5 p-6 relative">
          {/* Left orange accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-400 rounded-l-xl" aria-hidden="true" />

          {/* Layer order number */}
          <div className="ml-3 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
            <span className="text-[10px] font-mono font-bold text-slate-400">
              {String(layer.order).padStart(2, '0')}
            </span>
          </div>

          {/* Icon */}
          <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
            {IconComponent && <IconComponent size={20} className="text-orange-500" strokeWidth={1.5} />}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-mono font-semibold text-slate-900 uppercase tracking-wide mb-1">
              {layer.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">{layer.description}</p>

            {/* Branches for Data Integration Layer */}
            {layer.branches && (
              <div className="mt-4 flex flex-wrap gap-3" role="list" aria-label="Data integration options">
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
        </div>
      </div>

      {/* Connector between layers */}
      {index < total - 1 && (
        <div className="flex justify-center py-1.5" aria-hidden="true">
          <ChevronDown size={16} className="text-slate-300" />
        </div>
      )}
    </div>
  );
};

export const ArchitectureLayers = () => {
  const [ref, isInView] = useInView();

  return (
    <section
      id="architecture"
      ref={ref}
      className="py-20 lg:py-28 bg-slate-50/60"
      aria-label="Architecture layers"
    >
      <div className={`max-w-4xl mx-auto px-6 lg:px-8 section-animate ${isInView ? 'visible' : ''}`}>
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-orange-500 mb-3 block">
            Architecture
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Architecture Layers
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            Stacked layers from experience to data — each with distinct responsibilities
          </p>
        </div>

        <div role="list" aria-label="Architecture layer stack">
          {architectureLayers.map((layer, index) => (
            <LayerCard
              key={layer.id}
              layer={layer}
              index={index}
              total={architectureLayers.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
