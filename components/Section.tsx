interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'grey' | 'navy';
  id?: string;
}

export default function Section({ children, className = '', background = 'white', id }: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    grey: 'bg-light-grey',
    navy: 'bg-navy text-white'
  };

  return (
    <section id={id} className={`py-12 sm:py-16 lg:py-20 ${bgClasses[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  centered = true
}: {
  title: string;
  subtitle?: string;
  centered?: boolean
}) {
  return (
    <div className={`mb-10 sm:mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight">{title}</h2>
      {subtitle && <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-medium">{subtitle}</p>}
    </div>
  );
}
