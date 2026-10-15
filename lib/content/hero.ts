import heroImage from '@/public/images/hero-product-range.jpg'

export const hero = {
  eyebrow: '#healthyskin',
  title: { lead: 'Nourish Your Skin.', accent: 'Naturally South African.' },
  description:
    'Premium, plant-derived body care crafted for urban professionals who value clean ingredients, sustainable choices, and radiant skin.',
  primaryAction: { label: 'Shop the Collection', href: '#range' },
  secondaryAction: { label: 'About Us', href: '#story' },
  promises: ['Free from parabens', 'Free from mineral oil', 'Made in South Africa'],
  image: {
    src: heroImage,
    alt: 'The Nurture range of shower gels, body lotions and body crèmes arranged with orange slices, gardenia flowers and cinnamon on a marble counter',
  },
} as const
