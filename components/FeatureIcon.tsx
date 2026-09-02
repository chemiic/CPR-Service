interface FeatureIconProps {
  icon: 'car' | 'chip' | 'location';
  className?: string;
}

const ACCENT = '#2B65E2';

const FeatureIcon = ({ icon, className = 'feature__icon' }: FeatureIconProps) => {
  const icons = {
    car: (
      <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="24" width="48" height="20" rx="2" stroke={ACCENT} strokeWidth="2.5" />
        <path d="M16 24L22 14H42L48 24" stroke={ACCENT} strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="20" cy="44" r="4" fill={ACCENT} />
        <circle cx="44" cy="44" r="4" fill={ACCENT} />
      </svg>
    ),
    chip: (
      <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="18" width="28" height="28" rx="2" stroke={ACCENT} strokeWidth="2.5" />
        <path d="M26 18V10M32 18V10M38 18V10M26 54V46M32 54V46M38 54V46" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 26H10M18 32H10M18 38H10M46 26H54M46 32H54M46 38H54" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
        <rect x="26" y="26" width="12" height="12" rx="1" fill={ACCENT} fillOpacity="0.2" stroke={ACCENT} strokeWidth="2" />
      </svg>
    ),
    location: (
      <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8C22.06 8 14 16.06 14 26C14 38.5 32 56 32 56C32 56 50 38.5 50 26C50 16.06 41.94 8 32 8Z" stroke={ACCENT} strokeWidth="2.5" />
        <circle cx="32" cy="26" r="6" stroke={ACCENT} strokeWidth="2.5" />
      </svg>
    ),
  };

  return icons[icon];
};

export default FeatureIcon;
