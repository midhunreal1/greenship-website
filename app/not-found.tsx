import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center bg-light-grey">
        <div className="text-center px-4">
          <div className="w-20 h-20 bg-linear-to-br from-teal to-ocean rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Icon name="Anchor" size={36} className="text-white" />
          </div>
          <h1 className="text-6xl sm:text-8xl font-bold text-navy mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
            The page you are looking for may have been moved, deleted, or does not exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-linear-to-r from-teal to-teal-dark text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Icon name="Home" size={16} />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-navy text-navy px-8 py-3 rounded-full font-semibold hover:bg-navy hover:text-white transition-all duration-200"
            >
              <Icon name="Mail" size={16} />
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
