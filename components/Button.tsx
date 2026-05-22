import Link from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: never;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-teal to-teal-dark text-white hover:shadow-lg hover:scale-105 transition-all duration-200 focus:ring-teal',
    secondary: 'bg-gradient-to-r from-ocean to-ocean-dark text-white hover:shadow-lg hover:scale-105 transition-all duration-200 focus:ring-ocean',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-navy focus:ring-white transition-all duration-200'
  };

  const sizeClasses = {
    sm:  'px-4 py-2 text-sm',
    md:  'px-6 py-2.5 text-sm',
    lg:  'px-8 py-3.5 text-base',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
