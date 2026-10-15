import lotionImage from '@/public/images/body-lotion-outdoors.jpg'

export const introduction = {
  eyebrow: '100% Plant-based approaches',
  statement:
    'Nurture Personal Care is a proudly South African skincare brand focused on everyday personal care products designed to nourish, moisturise, and care for the skin.',
  body: 'Our products are formulated free from parabens and mineral oil, utilizing 100% plant-based approaches.',
  action: { label: 'Read More', href: '#story' },
  image: {
    src: lotionImage,
    alt: 'A woman smoothing Nurture Body Lotion onto her arm outdoors, with the bottle resting on a stone wall',
  },
} as const
