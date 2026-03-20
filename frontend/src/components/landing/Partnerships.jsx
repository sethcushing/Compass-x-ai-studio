import React from 'react';
import { partnershipsData } from '../../data/mock';
import { getIcon } from '../../utils/iconMap';
import { useInView } from '../../hooks/useInView';
import { Card, CardContent } from '../ui/card';

export const Partnerships = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="partnerships" ref={ref} className="py-14 lg:py-20 bg-white" aria-label="Delivery partnerships">
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 section-animate ${isInView ? 'visible' : ''}`}>
        <div className="mb-10 text-center">
          <span className="text-sm font-mono uppercase tracking-[0.2em] text-sky-500 mb-2 block">
            Partnerships
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
            {partnershipsData.title}
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            {partnershipsData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {partnershipsData.partners.map((partner) => {
            const IconComponent = getIcon(partner.iconName);
            return (
              <Card
                key={partner.id}
                className="border-slate-200 shadow-sm bg-white hover:shadow-md overflow-hidden"
                style={{ transition: 'box-shadow 0.2s ease' }}
                data-testid={`partner-card-${partner.id}`}
              >
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mx-auto mb-3">
                    {IconComponent && <IconComponent size={22} className="text-sky-500" strokeWidth={1.5} />}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{partner.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{partner.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
