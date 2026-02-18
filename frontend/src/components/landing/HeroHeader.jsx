import React from 'react';
import { Badge } from '../ui/badge';
import { useInView } from '../../hooks/useInView';

const heroTags = [
  { label: 'Human Designed', id: 'tag-1' },
  { label: 'Agentic Built', id: 'tag-2' },
  { label: 'Enterprise Deployed', id: 'tag-3' },
];

export const HeroHeader = () => {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className="pt-24 pb-14 lg:pt-32 lg:pb-20 bg-white"
      aria-label="Hero section"
    >
      <div
        className={`max-w-5xl mx-auto px-6 lg:px-8 section-animate ${
          isInView ? 'visible' : ''
        }`}
      >
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-500">
            Enterprise Architecture
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.1] mb-8 max-w-4xl">
          Emergent Builder within your{' '}
          <span className="text-sky-500">enterprise ecosystem</span>
        </h1>

        <p className="text-lg lg:text-xl text-slate-500 leading-relaxed mb-12 max-w-3xl">
          This architecture demonstrates how applications move from
          human-validated design to agentic build to enterprise deployment
          while aligning with your security, governance, and release
          standards.
        </p>

        <div className="flex flex-wrap gap-3" role="list" aria-label="Key principles">
          {heroTags.map((tag) => (
            <Badge
              key={tag.id}
              variant="outline"
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-sky-50 text-sky-600 border-sky-200 hover:bg-sky-100"
              style={{ transition: 'background-color 0.2s ease' }}
              role="listitem"
            >
              {tag.label}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
