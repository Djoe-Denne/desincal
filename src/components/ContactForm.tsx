import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import servicesData from '../data/services.json';

// Flatten services from all themes into a single array
const allServices = servicesData.themes.flatMap(theme => theme.services);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: allServices[0].id,
    consent: false
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

  useEffect(() => {
    // Check for service parameter in URL
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const serviceId = params.get('service');
    if (serviceId) {
      setFormData(prev => ({ ...prev, service: serviceId }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Veuillez accepter la politique de confidentialité pour continuer.');
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const selectedService = allServices.find(s => s.id === formData.service);
      const serviceTitle = selectedService ? `${selectedService.title} - ${selectedService.subtitle}` : formData.service;

      // Track form submission start
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'form_submission_start',
        'service_requested': serviceTitle
      });

      const templateParams = {
        service: serviceTitle,
        name: formData.name,
        email: formData.email,
        tel: formData.phone,
        message: formData.message
      };

      await emailjs.send(
        'desincal_contact',
        'template_viiegqg',
        templateParams,
        '6K1Kw14EsbSqtO2YZ'
      );

      // Track successful form submission
      window.dataLayer.push({
        'event': 'form_submission_success',
        'service_requested': serviceTitle
      });

      setStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès. Nous vous contacterons bientôt.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: allServices[0].id,
        consent: false
      });

    } catch (error) {
      console.error('Failed to send email:', error);
      
      // Track form submission error
      window.dataLayer.push({
        'event': 'form_submission_error',
        'error_message': error.message
      });

      setStatus({
        type: 'error',
        message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-pest-blue bg-opacity-10" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-pest-dark mb-12">
          Contactez-nous
        </h2>
        <div className="max-w-2xl mx-auto">
          {status && (
            <div className={`mb-6 p-4 rounded-lg ${
              status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {status.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Nom</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-pest-blue focus:border-pest-blue"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-pest-blue focus:border-pest-blue"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Téléphone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:ring-pest-blue focus:border-pest-blue"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Type de service</label>
              <select
                id="service-select"
                className="w-full px-4 py-2 border rounded-lg focus:ring-pest-blue focus:border-pest-blue"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                disabled={loading}
              >
                {allServices.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title} - {service.subtitle}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:ring-pest-blue focus:border-pest-blue"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                disabled={loading}
              ></textarea>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="consent"
                className="mt-1"
                checked={formData.consent}
                onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                required
                disabled={loading}
              />
              <label htmlFor="consent" className="text-sm text-gray-600">
                J'accepte que mes données personnelles soient collectées pour le traitement de ma demande. Pour en savoir plus sur la gestion de vos données et vos droits, consultez notre{' '}
                <a href="/legal#politique-confidentialite" className="text-pest-green hover:underline">politique de confidentialité</a>.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-pest-green text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}