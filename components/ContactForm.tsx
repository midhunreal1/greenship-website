'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';
import SuccessModal from '@/components/SuccessModal';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '007d5799-9171-4c15-b1b6-0f55f18a9040',
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: `New Enquiry from ${form.name} - Green Ship Technologies`,
          message: `Contact Details:\n-----------------\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\nService of Interest: ${form.service || 'Not specified'}\n\nMessage:\n-----------------\n${form.message}`,
          from_name: 'GST Website Contact Form',
          reply_to: form.email,
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
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Message Sent!"
        message="Thank you for contacting Green Ship Technologies. Our team will get back to you within 24 hours."
      />
      <div className="bg-light-grey rounded-2xl p-6 sm:p-8">
        <h3 className="text-xl font-bold text-navy mb-6">Send Us a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1">Full Name *</label>
            <input
              id="name" type="text" name="name" value={form.name} onChange={handleChange} required
              placeholder="Capt. John Smith"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal text-sm"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1">Email *</label>
              <input
                id="email" type="email" name="email" value={form.email} onChange={handleChange} required
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal text-sm"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1">Phone</label>
              <input
                id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange}
                placeholder="+X XXXXX XXXXX"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal text-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-navy mb-1">Service of Interest</label>
            <input
              id="service" type="text" name="service" value={form.service} onChange={handleChange}
              placeholder="e.g. Ship Design, IHM Survey, Flag Registration..."
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1">Message *</label>
            <textarea
              id="message" name="message" value={form.message} onChange={handleChange} required rows={5}
              placeholder="Describe your requirements or project details..."
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal text-sm resize-none"
            />
          </div>
          <button
            type="submit" disabled={isSubmitting}
            className="w-full bg-linear-to-r from-teal to-teal-dark text-white px-6 py-3.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Sending...' : (<>Send Message <Icon name="Send" size={16} /></>)}
          </button>
        </form>
      </div>
    </>
  );
}
