import React from 'react';

interface PricingOption {
  title: string;
  price?: string;
  priceRange?: string;
  features: string[];
  duration?: string;
  serviceId?: string;
}

interface PricingSectionProps {
  title: string;
  subtitle: string;
  options: PricingOption[];
  note?: string;
}

export default function PricingSection({ title, subtitle, options, note }: PricingSectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mb-12">
      <h2 className="text-2xl font-bold text-pest-dark mb-6">{title}</h2>
      
      {subtitle && (
        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
          <div className="flex items-start space-x-3">
            <div className="text-yellow-500 text-xl">💡</div>
            <p className="text-yellow-700">{subtitle}</p>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {options.map((option, index) => (
          <button
            key={index}
            data-service-id={option.serviceId}
            className="text-left w-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold mb-2">{option.title}</h3>
            {option.priceRange ? (
              <p className="text-3xl font-bold text-pest-green mb-4">{option.priceRange}</p>
            ) : option.price ? (
              <p className="text-3xl font-bold text-pest-green mb-4">{option.price}€</p>
            ) : null}
            <ul className="space-y-2">
              {option.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-pest-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 text-sm">{feature}</span>
                </li>
              ))}
              {option.duration && (
                <li className="text-sm text-gray-500 mt-2">{option.duration}</li>
              )}
            </ul>
          </button>
        ))}
      </div>

      {note && (
        <p className="text-sm text-gray-500 text-center">
          {note}
        </p>
      )}
    </div>
  );
}