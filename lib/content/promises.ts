import centreImage from '@/public/images/best-seller-body-lotion.jpg'

export const promises = {
  title: 'The Nurture Formulation Standard',
  intro:
    'Plant-derived ingredients, strictly clean methods and proudly local manufacturing: supporting healthy skin, self-care, and everyday confidence without the harsh additives.',
  action: { label: 'Shop the range', href: '#shop' },
  image: {
    src: centreImage,
    alt: 'Nurture Lemon Fresh Body Lotion surrounded by sliced lemons, folded towels and green leaves',
  },
  items: [
    {
      id: 'natural-excellence',
      title: ['Natural', 'Excellence'],
      description:
        'We incorporate beneficial plant-derived ingredients while making sure we maintain product performance, safety, and stability.',
    },
    {
      id: 'clean-methods',
      title: ['Strictly Clean', 'Methods'],
      description:
        'Our formulations are entirely free from parabens and mineral oil, ensuring your skin receives clean hydration without the clutter.',
    },
    {
      id: 'made-local',
      title: ['Made', 'Proudly Local'],
      description:
        'Every product is manufactured in South Africa, supporting local industries and tailoring our formulas to our climate.',
    },
    {
      id: 'purposeful',
      title: ['Purposeful', 'Skincare'],
      description:
        'Supporting healthy skin, self-care, and everyday confidence without the harsh additives.',
    },
  ],
} as const
