import heroImage from '@/public/images/hero-radiant-smile.jpg'

export const hero = {
  eyebrow: '#healthyskin',
  title: ['Nourish Your Skin.', 'Naturally South African.'],
  description:
    'Premium, plant-derived body care crafted for urban professionals who value clean ingredients, sustainable choices, and radiant skin.',
  action: { label: 'Shop the Collection', href: '#shop' },
  image: {
    src: heroImage,
    alt: 'A smiling woman with radiant, moisturised skin holding her face in her hands',
  },
} as const
