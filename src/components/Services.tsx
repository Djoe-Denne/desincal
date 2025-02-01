import React, { useState } from 'react';
import servicesData from '../data/services.json';
import ThemeIcon from './icons/ThemeIcon';

export default function Services() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const { themes } = servicesData;

  const scrollToContact = (serviceId: string) => {
    const contactForm = document.getElementById('contact');
    const serviceSelect = document.getElementById('service-select') as HTMLSelectElement;
    
    if (contactForm && serviceSelect) {
      serviceSelect.value = serviceId;
      contactForm.scrollIntoView({ behavior: 'smooth' });
      serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  const renderPrice = (service: any) => {
    if (service.priceRange) {
      return (
        <div className="inline-flex items-start justify-center">
          <span className="text-5xl font-bold text-pest-dark">{service.priceRange}</span>
        </div>
      );
    }

    if (service.priceUnit) {
      return (
        <div className="inline-flex items-start justify-center">
          <span className="text-7xl font-bold text-pest-dark">{service.price}</span>
          <div className="ml-2 mt-3 text-left">
            <div className="text-xl text-gray-600">{service.priceUnit}</div>
            <div className="text-sm text-gray-500">Forfait*</div>
          </div>
        </div>
      );
    }

    return (
      <div className="inline-flex items-start justify-center">
        <span className="text-7xl font-bold text-pest-dark">{service.price}</span>
        <div className="ml-2 mt-3 text-left">
          <div className="text-xl text-gray-600">euro</div>
          <div className="text-sm text-gray-500">Forfait*</div>
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="container mx-auto px-4 h-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pest-dark mb-2">
            Nos services <span className="text-pest-green">professionnels</span>
          </h2>
          <div className="w-24 h-1 bg-pest-green mx-auto mt-4 rounded-full"></div>
        </div>

        {!selectedTheme ? (
          <div className="h-[calc(100vh-20rem)] flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme.id)}
                  className="group relative transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pest-blue/10 to-pest-green/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative flex flex-col items-center bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                    <ThemeIcon icon={theme.icon} />
                    <h3 className="text-2xl font-bold text-pest-dark mt-4">{theme.title}</h3>
                    <p className="text-gray-600 mt-2">{theme.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={() => setSelectedTheme(null)}
              className="absolute -top-12 left-0 text-gray-600 hover:text-pest-green flex items-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Retour aux services
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideFromRight">
              {themes
                .find((t) => t.id === selectedTheme)
                ?.services.map((service, index) => (
                  <div 
                    key={index}
                    className="group relative transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-white/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <div className="bg-pest-dark px-8 py-10 text-white">
                        <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                        <p className="text-2xl opacity-90">{service.subtitle}</p>
                        {service.infoPage && (
                          <a 
                            href={service.infoPage}
                            className="inline-block mt-4 text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
                          >
                            En savoir plus
                          </a>
                        )}
                      </div>

                      <div className="flex-1 flex flex-col p-8">
                        <div className="text-center mb-10">
                          {renderPrice(service)}
                        </div>

                        <ul className="space-y-4 mb-10">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start group/item">
                              <span className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full bg-green-100 flex items-center justify-center group-hover/item:bg-green-200 transition-colors duration-200">
                                <svg 
                                  className="w-3 h-3 text-green-600" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="3" 
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </span>
                              <span className="text-gray-600 leading-tight group-hover/item:text-gray-900 transition-colors duration-200">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto">
                          <button
                            onClick={() => scrollToContact(service.id)}
                            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition-all duration-200"
                          >
                            Je suis intéressé
                          </button>
                          
                          <p className="text-xs text-gray-500 text-center mt-4">
                            * Tarifs indicatifs, peut varier suivant éloignement et prolifération
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}