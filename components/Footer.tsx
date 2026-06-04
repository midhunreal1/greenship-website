'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { companyInfo, contactInfo, socialMedia } from '@/data/company';
import SuccessModal from './SuccessModal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleNewsletterSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '007d5799-9171-4c15-b1b6-0f55f18a9040',
          email,
          subject: 'New Newsletter Subscription - Green Ship Technologies',
          message: `New newsletter subscription from: ${email}`,
          from_name: 'GST Newsletter',
          reply_to: email,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setShowSuccessModal(true);
        setEmail('');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSocialIcon = (iconName: string) => {
    const icons: Record<string, React.ComponentType<{ className?: string }>> = {
      linkedin: FaLinkedin,
      youtube: FaYoutube,
    };
    return icons[iconName] || FaLinkedin;
  };

  const footerLinks = {
    services: [
      { href: '/services', label: 'Marine Software Services' },
      { href: '/services', label: 'Ship Design & Engineering' },
      { href: '/services', label: 'Survey & Certification' },
      { href: '/services', label: 'Flag Registration' },
    ],
    expertise: [
      { href: '/services', label: 'Renewable Energy' },
      { href: '/services', label: 'Ship Broking & Chartering' },
      { href: '/client-portfolio', label: 'Client Portfolio' },
    ],
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/services', label: 'Our Services' },
      { href: '/client-portfolio', label: 'Clients' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact Us' },
    ]
  };

  return (
    <>
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Subscribed!"
        message="Thank you for subscribing to Green Ship Technologies newsletter. We'll keep you updated with the latest maritime industry news."
      />
      <footer className="bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.svg" alt="Green Ship Technologies Logo" width={40} height={40} loading="lazy" className="object-contain" />
                <span className="text-lg font-bold text-white">Green Ship Technologies</span>
              </div>
              <p className="text-white mb-2 text-sm font-medium italic">&quot;Your Partner in Maritime Innovation&quot;</p>
              <p className="text-white/80 mb-4 text-sm">
                {companyInfo.description.substring(0, 160)}...
              </p>
              <div className="flex space-x-4">
                {socialMedia.map((social) => {
                  const IconComponent = getSocialIcon(social.icon);
                  return (
                    <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer"
                      className="text-white hover:text-teal-dark transition-colors duration-200 text-2xl"
                      aria-label={social.platform}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white hover:text-teal-dark transition-colors duration-200 text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Expertise</h4>
              <ul className="space-y-2">
                {footerLinks.expertise.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white hover:text-teal-dark transition-colors duration-200 text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white hover:text-teal-dark transition-colors duration-200 text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-sm text-white">
                <p className="mb-2"><strong>Address:</strong> {contactInfo.address}</p>
                <p className="mb-2">
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-teal">{contactInfo.email}</a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-teal">{contactInfo.phone}</a>
                  {contactInfo.phone2 && (
                    <>, <a href={`tel:${contactInfo.phone2}`} className="hover:text-teal">{contactInfo.phone2}</a></>
                  )}
                </p>
              </div>

              <div className="text-sm text-white">
                <h5 className="font-semibold mb-3">Company Brochure</h5>
                <a
                  href="/brochures/GST%20COMPANY%20PROFILE.pdf"
                  download="GST Company Profile.pdf"
                  className="inline-flex items-center gap-2 bg-linear-to-r from-teal to-teal-dark text-white px-4 py-2 rounded-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm font-semibold"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Brochure
                </a>
              </div>

              <div className="text-sm text-white">
                <h5 className="font-semibold mb-2">Stay Updated</h5>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 px-3 py-2 rounded-md bg-navy text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal text-sm disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-linear-to-r from-teal to-teal-dark text-white px-4 py-2 rounded-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Subscribe'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-white/80">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p>&copy; {currentYear} {companyInfo.name}. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link href="/privacy-policy" className="hover:text-teal">Privacy Policy</Link>
                <Link href="/terms-of-service" className="hover:text-teal">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
