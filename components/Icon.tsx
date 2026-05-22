import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className = '', size = 24 }: IconProps) {
  const IconComponent = (LucideIcons as any)[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return <LucideIcons.Circle className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}
