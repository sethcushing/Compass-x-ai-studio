import React from 'react';
import { useInView } from '../../hooks/useInView';
import { Zap } from 'lucide-react';
import { Separator } from '../ui/separator';

export const ClosingStatement = () => {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24 bg-white"
      aria-label="Closing statement"
    >
      <div className={`max-w-3xl mx-auto px-6 lg:px-8 text-center section-animate ${isInView ? 'visible' : ''}`}>
        <Separator className="mb-10 max-w-xs mx-auto bg-sky-200" />

        <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center mx-auto mb-8">
          <Zap size={22} className="text-sky-500" strokeWidth={1.5} />
        </div>

        <p className="text-2xl lg:text-3xl text-slate-600 leading-relaxed mb-4">
          Compass AI Studio powered by Emergent accelerates application delivery while preserving
          enterprise ownership of infrastructure, identity, data, and release
          governance.
        </p>

        <p className="text-2xl lg:text-3xl text-slate-900 leading-relaxed font-semibold">
          The result is faster innovation without compromising architectural
          standards.
        </p>

        <Separator className="mt-10 max-w-xs mx-auto bg-sky-200" />
      </div>
    </section>
  );
};
