import React from 'react';

const features = [
  {
    title: 'Rapidité et Efficacité',
    description: 'Fort de 17 ans d\'expérience sur le terrain en temps qu\'applicateur en Nouvelle calédonie, DESINCAL est à vos côtés pour l\'extermination de nuisibles.',
    details: 'Nos avantages -Rapidité d\'intervention -Proximité -Interlocuteur dédié -Suivi, maintenance -Gestion des urgences',
    icon: (
      <div className="w-24 h-24 mb-6 relative">
        <svg className="w-full h-full text-pest-green" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v2m10 10h-2M4 14H2m3.268-7.732l1.414 1.414M19.732 4.268l-1.414 1.414" />
        </svg>
      </div>
    )
  },
  {
    title: 'Prix modulables',
    description: 'Nos garanties sont adaptées en fonction de chaque prestation. Nos prix sont clairs et disponibles dans notre grille tarifaire.',
    details: 'Toute augmentation due à un éloignement ou une prolifération excessive vous sera expliquée lors de l\'évaluation par téléphone. Si le problème persiste nous revenons à nos frais dans les 3 semaines suivant l\'intervention.',
    icon: (
      <div className="w-24 h-24 mb-6 relative">
        <svg className="w-full h-full text-pest-green" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
        </svg>
      </div>
    )
  },
  {
    title: 'Votre vie privée, notre priorité',
    description: 'Nous vous assurons du respect de votre habitation et de votre vie privée lors des différentes interventions.',
    details: 'Nous nous engageons également à ne jamais divulguer quelques informations en rapport avec nos interventions ou toutes autres sujets que vous auriez portés à notre connaissance.',
    icon: (
      <div className="w-24 h-24 mb-6 relative">
        <svg className="w-full h-full text-pest-green" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      </div>
    )
  }
];

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pest-dark">
            Qui <span className="text-pest-green">sommes</span> nous?
          </h2>
          <div className="w-24 h-1 bg-pest-green mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pest-blue/5 to-pest-green/5 rounded-2xl -z-10"></div>
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-bold text-pest-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <p className="text-sm text-gray-500">
                  {feature.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}