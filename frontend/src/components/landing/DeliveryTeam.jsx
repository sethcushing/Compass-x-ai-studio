import React, { useState } from 'react';
import { deliveryTeamData } from '../../data/mock';
import { getIcon } from '../../utils/iconMap';
import { useInView } from '../../hooks/useInView';
import { Card, CardContent } from '../ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { X } from 'lucide-react';

const RoleCard = ({ role, onClick }) => {
  const IconComponent = getIcon(role.iconName);
  return (
    <Card
      className="border-slate-200 shadow-sm bg-white hover:shadow-lg hover:border-sky-200 cursor-pointer overflow-hidden group"
      style={{ transition: 'all 0.2s ease' }}
      onClick={onClick}
      data-testid={`role-card-${role.id}`}
    >
      <CardContent className="p-6 text-center">
        <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-100" style={{ transition: 'background-color 0.2s ease' }}>
          {IconComponent && <IconComponent size={24} className="text-sky-500" strokeWidth={1.5} />}
        </div>
        <h3 className="text-base font-bold text-slate-900 mb-2">{role.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{role.summary}</p>
        <span className="inline-block mt-3 text-sm font-semibold text-sky-500 group-hover:text-sky-600" style={{ transition: 'color 0.2s ease' }}>
          View Details
        </span>
      </CardContent>
    </Card>
  );
};

const OfferingCard = ({ offering, onClick }) => {
  const IconComponent = getIcon(offering.iconName);
  return (
    <Card
      className="border-slate-200 shadow-sm bg-white hover:shadow-lg hover:border-sky-200 cursor-pointer overflow-hidden group"
      style={{ transition: 'all 0.2s ease' }}
      onClick={onClick}
      data-testid={`offering-card-${offering.id}`}
    >
      <CardContent className="p-6 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center shrink-0 group-hover:bg-sky-100" style={{ transition: 'background-color 0.2s ease' }}>
          {IconComponent && <IconComponent size={22} className="text-sky-500" strokeWidth={1.5} />}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-slate-900 mb-1">{offering.title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed">{offering.summary}</p>
          <span className="inline-block mt-2 text-sm font-semibold text-sky-500 group-hover:text-sky-600" style={{ transition: 'color 0.2s ease' }}>
            Learn More
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

const DetailModal = ({ item, open, onClose }) => {
  if (!item) return null;
  const IconComponent = getIcon(item.iconName);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg" data-testid="detail-modal">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
              {IconComponent && <IconComponent size={20} className="text-sky-500" strokeWidth={1.5} />}
            </div>
            <DialogTitle className="text-xl font-bold text-slate-900">{item.title}</DialogTitle>
          </div>
          <DialogDescription className="text-sm text-slate-500 mt-1">
            {item.summary}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <ul className="space-y-3">
            {item.details.map((detail, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-[7px] shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const DeliveryTeam = () => {
  const [ref, isInView] = useInView();
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section id="team" ref={ref} className="py-14 lg:py-20 bg-slate-50/60" aria-label="Delivery team and offerings">
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 section-animate ${isInView ? 'visible' : ''}`}>
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm font-mono uppercase tracking-[0.2em] text-sky-500 mb-2 block">
            Delivery Team
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
            {deliveryTeamData.title}
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            {deliveryTeamData.description}
          </p>
        </div>

        {/* Core Roles */}
        <div className="mb-12">
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-sky-500 mb-5 text-center">
            Core Roles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryTeamData.roles.map((role) => (
              <RoleCard key={role.id} role={role} onClick={() => setActiveItem(role)} />
            ))}
          </div>
        </div>

        {/* Delivery Offerings */}
        <div>
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-sky-500 mb-5 text-center">
            What We Deliver
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {deliveryTeamData.offerings.map((offering) => (
              <OfferingCard key={offering.id} offering={offering} onClick={() => setActiveItem(offering)} />
            ))}
          </div>
        </div>

        {/* Modal */}
        <DetailModal
          item={activeItem}
          open={!!activeItem}
          onClose={() => setActiveItem(null)}
        />
      </div>
    </section>
  );
};
