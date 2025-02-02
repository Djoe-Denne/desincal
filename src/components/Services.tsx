import React, { useState, useEffect } from 'react';
import servicesData from '../data/services.json';
import ThemeIcon from './icons/ThemeIcon';

export default function Services() {
  const [selectedTheme, setSelectedTheme] = useState<string>('desinsectisation');
  const [isMobile, setIsMobile] = useState(false);
  const { themes } = servicesData;

  // Initialize theme from URL parameter and handle mobile detection
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const themeParam = params.get('theme');
    if (themeParam && servicesData.themes.some(theme => theme.id === themeParam)) {
      setSelectedTheme(themeParam);
    }

    // Set initial mobile state
    setIsMobile(window.innerWidth < 768);

    // Add resize listener
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const getThemePosition = (themeId: string) => {
    const index = themes.findIndex(t => t.id === themeId);
    const selectedIndex = themes.findIndex(t => t.id === selectedTheme);
    return index - selectedIndex;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pest-dark mb-2">
            Nos services <span className="text-pest-green">professionnels</span>
          </h2>
          <div className="w-24 h-1 bg-pest-green mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Theme Selection - Updated container and positioning */}
        <div className="flex justify-center items-center mb-16 relative h-48">
          <div className="absolute left-1/2 -translate-x-[60%] flex items-center">
            <div className="flex items-center relative" style={{ minWidth: `${themes.length * 160}px` }}>
              {themes.map((theme) => {
                const position = getThemePosition(theme.id);
                const isSelected = theme.id === selectedTheme;
                const scale = isSelected ? 1 : 0.6;
                const translateX = `${position * 160}px`;

                return (
                  <button
                    key={theme.id}
                    onClick={() => setSelectedTheme(theme.id)}
                    className="absolute transform transition-all duration-1000 ease-in-out cursor-pointer"
                    style={{
                      transform: `translateX(${translateX}) scale(${scale})`,
                      left: '50%',
                      zIndex: isSelected ? 10 : 0,
                    }}
                  >
                    <div 
                      className={`relative group ${
                        isSelected ? 'bg-pest-dark text-white' : 'bg-white text-pest-dark'
                      } rounded-2xl p-3 md:p-6 shadow-lg transition-all duration-1000 hover:shadow-xl`}
                    >
                      <ThemeIcon 
                        icon={theme.icon} 
                        className={`w-10 h-10 md:w-16 md:h-16 ${
                          isSelected ? 'text-pest-green' : 'text-pest-dark'
                        } transition-colors duration-1000`}
                      />
                      <h3 className="text-base md:text-xl font-bold mt-2">{theme.title}</h3>
                      <p className={`text-xs mt-1 ${
                        isSelected ? 'text-white/80' : 'text-gray-600'
                      }`}>{theme.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Service Cards Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${
                themes.findIndex(t => t.id === selectedTheme) * 100
              }%)`,
            }}
          >
            {themes.map((theme) => (
              <div key={theme.id} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {theme.services.map((service, index) => (
                    <div 
                      key={index}
                      className="group relative transform hover:-translate-y-1 transition-all duration-1000"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-white/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      
                      <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-1000">
                        <div className="bg-pest-dark px-8 py-10 text-white">
                          <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                          <p className="text-2xl opacity-90">{service.subtitle}</p>
                          {service.infoPage && (
                            <a 
                              href={service.infoPage}
                              className="inline-block mt-4 text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors duration-1000"
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
                                <span className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full bg-green-100 flex items-center justify-center group-hover/item:bg-green-200 transition-colors duration-1000">
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
                                <span className="text-gray-600 leading-tight group-hover/item:text-gray-900 transition-colors duration-1000">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-auto">
                            <button
                              onClick={() => scrollToContact(service.id)}
                              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition-all duration-1000"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}