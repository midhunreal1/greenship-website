'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Icon from '@/components/Icon';
import SuccessModal from '@/components/SuccessModal';
import { contactInfo, companyInfo } from '@/data/company';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          ...form,
          subject: `New Enquiry from ${form.name} - Green Ship Technologies`,
          from_name: 'GST Website Contact',
        }),
      });
      const data = await response.json();
      if (data.success) {
        setShowSuccess(true);
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        alert('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      alert('Failed to send. Please email us at contact@greenshiptech.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Message Sent!"
        message="Thank you for contacting Green Ship Technologies. Our team will get back to you within 24 hours."
      />
      <main>
        {/* Page Header */}
        <section className="relative bg-[#0a1e3c] text-white py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-20 w-72 h-72 bg-teal rounded-full filter blur-xl"></div>
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-ocean rounded-full filter blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="text-teal text-sm font-semibold tracking-wider uppercase mb-4 block">Get In Touch</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">Contact Us</h1>
              <p className="text-white text-lg leading-relaxed">
                Reach out to our maritime experts for enquiries, consultations, and project discussions
              </p>
            </div>
          </div>
        </section>

        <Section background="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">Let&apos;s Work Together</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you need marine software development, ship design, survey services, or any of our maritime expertise — we&apos;re here to help.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-light-grey rounded-xl">
                  <div className="w-11 h-11 bg-gradient-to-br from-teal to-ocean rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Office Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{contactInfo.address}</p>
                    <a
                      href={contactInfo.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-dark text-sm font-semibold hover:underline mt-1 inline-flex items-center gap-1"
                    >
                      Get Directions <Icon name="ExternalLink" size={12} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-grey rounded-xl">
                  <div className="w-11 h-11 bg-gradient-to-br from-teal to-ocean rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Phone / WhatsApp</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-600 text-sm hover:text-teal-dark transition-colors block">
                      {contactInfo.phone}
                    </a>
                    {contactInfo.phone2 && (
                      <a href={`tel:${contactInfo.phone2}`} className="text-gray-600 text-sm hover:text-teal-dark transition-colors block">
                        {contactInfo.phone2}
                      </a>
                    )}
                    <p className="text-white/80 text-xs mt-1">WhatsApp enabled</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-grey rounded-xl">
                  <div className="w-11 h-11 bg-gradient-to-br from-teal to-ocean rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-600 text-sm hover:text-teal-dark transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-grey rounded-xl">
                  <div className="w-11 h-11 bg-gradient-to-br from-teal to-ocean rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-sm">{contactInfo.supportHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-light-grey rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-navy mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Capt. John Smith"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1">Email *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-navy mb-1">Service of Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal text-sm text-gray-700"
                    >
                      <option value="">Select a service...</option>
                      <option>Marine Software Services</option>
                      <option>Ship Design & Engineering</option>
                      <option>Survey & Certification</option>
                      <option>Renewable Energy & Oil Gas</option>
                      <option>Ship Broking & Chartering</option>
                      <option>Flag Registration Services</option>
                      <option>NDT & Manpower Services</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your requirements or project details..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal to-teal-dark text-white px-6 py-3.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Icon name="Send" size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Section>

        {/* Map placeholder */}
        <div className="h-64 bg-light-grey flex items-center justify-center border-t border-gray-200">
          <div className="text-center">
            <Icon name="MapPin" size={32} className="text-teal-dark mx-auto mb-2" />
            <p className="text-gray-600 font-medium">CBD Belapur, Navi Mumbai, Maharashtra 400614</p>
            <a
              href={contactInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-dark font-semibold text-sm hover:underline mt-1 inline-flex items-center gap-1"
            >
              Open in Google Maps <Icon name="ExternalLink" size={12} />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
