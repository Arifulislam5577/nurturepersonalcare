import lotionImage from '@/public/images/body-lotion-outdoors.jpg'

export const testimonial = {
  title: ['What our', 'customers say'],
  product: 'Body Lotion',
  quote:
    '“Living and working in Joburg takes a real toll on your skin. Nurture’s body lotion has completely changed my morning routine, it’s deeply hydrating, absorbs instantly, and keeps my skin comfortable through the whole workday without feeling heavy.”',
  name: 'Zinhle Mlingwa',
  location: 'Kempton Park',
  image: {
    src: lotionImage,
    alt: 'Nurture Body Lotion resting on a stone wall while a woman smooths it onto her arm',
  },
} as const
