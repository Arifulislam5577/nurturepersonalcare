import founderImage from '@/public/images/team-itumeleng-makgato.jpg'
import operationsImage from '@/public/images/team-nomathemba-mkhonto.jpg'

export const team = {
  eyebrow: 'Our people',
  title: 'The Minds Behind the Routine',
  description:
    'A passionate local team dedicated to creating purposeful, plant-powered skincare designed for your everyday South African lifestyle.',
  members: [
    {
      id: 'itumeleng-makgato',
      name: 'Itumeleng Daisy Makgato',
      role: 'Founder & CEO',
      image: {
        src: founderImage,
        alt: 'Portrait of Itumeleng Daisy Makgato in a white blazer',
      },
    },
    {
      id: 'nomathemba-mkhonto',
      name: 'Nomathemba Lehlohonolo Mkhonto',
      role: 'Chief Operating Officer (COO)',
      image: {
        src: operationsImage,
        alt: 'Portrait of Nomathemba Lehlohonolo Mkhonto in front of a colourful geometric wall',
      },
    },
  ],
} as const
