import lotionImage from '@/public/images/product-fresh-lemon-lotion.jpg'
import ritualImage from '@/public/images/ritual-cream-application.jpg'

export const mission = {
  statement: [
    '100% Plant-based approaches.',
    'Nurture Personal Care is a proudly South African skincare brand focused on everyday personal care products designed to nourish, moisturise, and care for the skin.',
  ],
  body: 'Our products are formulated free from parabens and mineral oil, utilizing 100% plant-based approaches.',
  action: { label: 'Read more', href: '#story' },
  primaryImage: {
    src: ritualImage,
    alt: 'A woman with closed eyes smoothing moisturising crème onto her cheek',
  },
  secondaryImage: {
    src: lotionImage,
    alt: 'Nurture Lemon Fresh Body Lotion with sliced lemons',
  },
} as const
