import React, { useState } from 'react';
import { partnershipsData } from '../../data/mock';
import { getIcon } from '../../utils/iconMap';
import { useInView } from '../../hooks/useInView';
import { Card, CardContent } from '../ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';

export const Partnerships = () => {
  const [ref, isInView] = useInView();
  const [activePartner, setActivePartner] = useState(null);

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
          {partnershipsData.partners.map((partner) => (
            <Card
              key={partner.id}
              className="border-slate-200 shadow-sm bg-white hover:shadow-lg hover:border-sky-200 cursor-pointer overflow-hidden group"
              style={{ transition: 'all 0.2s ease' }}
              onClick={() => setActivePartner(partner)}
              data-testid={`partner-card-${partner.id}`}
            >
              <CardContent className="p-5 text-center">
                <div className="h-16 flex items-center justify-center mx-auto mb-3">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-14 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{partner.description}</p>
                <span className="inline-block mt-2 text-sm font-semibold text-sky-500 group-hover:text-sky-600" style={{ transition: 'color 0.2s ease' }}>
                  See How
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Detail Modal */}
        <Dialog open={!!activePartner} onOpenChange={() => setActivePartner(null)}>
          <DialogContent className="sm:max-w-lg" data-testid="partner-detail-modal">
            {activePartner && (() => {
              const IconComponent = getIcon(activePartner.iconName);
              return (
                <>
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-1">
                      <img
                        src={activePartner.logo}
                        alt={`${activePartner.name} logo`}
                        className="h-8 object-contain"
                      />
                      <DialogTitle className="text-xl font-bold text-slate-900">{activePartner.name}</DialogTitle>
                    </div>
                    <DialogDescription className="text-sm text-slate-500 mt-1">
                      {activePartner.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <h4 className="text-sm font-mono uppercase tracking-[0.15em] text-sky-500 mb-3">
                      What This Enables
                    </h4>
                    <ul className="space-y-3">
                      {activePartner.enablement.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                          <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-[7px] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              );
            })()}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
