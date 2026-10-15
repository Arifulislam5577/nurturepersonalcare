import citrusImage from '@/public/images/pill-citrus.jpg'
import leafImage from '@/public/images/pill-dewy-leaf.jpg'
import skinImage from '@/public/images/pill-glowing-skin.jpg'

export const statement = {
  sentence: 'Plant-powered care for real lives, proudly South African skincare.',
  rows: [
    {
      id: 'first',
      parts: [
        { id: 'leaf', kind: 'image', src: leafImage },
        { id: 'plant', kind: 'word', text: 'Plant-powered care' },
        { id: 'citrus', kind: 'image', src: citrusImage },
        { id: 'real-lives', kind: 'word', text: 'for real lives,' },
      ],
    },
    {
      id: 'second',
      parts: [
        { id: 'proudly', kind: 'word', text: 'proudly South African' },
        { id: 'skin', kind: 'image', src: skinImage },
        { id: 'skincare', kind: 'word', text: 'skincare' },
      ],
    },
  ],
} as const
