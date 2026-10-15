import creamImage from '@/public/images/product-citrus-rose-creme.jpg'
import lotionImage from '@/public/images/product-fresh-lemon-lotion.jpg'
import showerImage from '@/public/images/product-nostalgic-burst-shower-gel-for-men.jpg'

export const statement = {
  sentence: 'Plant-powered care for real lives, proudly South African.',
  rows: [
    {
      id: 'first',
      parts: [
        { id: 'plant', kind: 'word', text: 'Plant-powered' },
        { id: 'lotion', kind: 'image', src: lotionImage },
        { id: 'care', kind: 'word', text: 'care' },
      ],
    },
    {
      id: 'second',
      parts: [
        { id: 'real-lives', kind: 'word', text: 'for real lives,' },
        { id: 'creme', kind: 'image', src: creamImage },
      ],
    },
    {
      id: 'third',
      parts: [
        { id: 'shower', kind: 'image', src: showerImage },
        { id: 'proudly', kind: 'word', text: 'proudly South African' },
      ],
    },
  ],
} as const
