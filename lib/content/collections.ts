import mensImage from '@/public/images/mens-collection-lifestyle.jpg'
import womensImage from '@/public/images/womens-collection-lifestyle.jpg'

export const collections = {
  eyebrow: 'Shop by collection',
  title: 'Two collections, one daily ritual.',
  items: [
    {
      id: 'womens',
      title: 'The Women’s Collection',
      description:
        'Refreshing and indulgent essentials featuring the Orange Burst Shower Gel, nourishing Body Lotion, and rich Body Crème (Citrus & Rose).',
      action: {
        label: 'Explore Women’s Care',
        href: 'https://nurturepersonalcare.co.za/product-category/womens-collection/',
      },
      image: {
        src: womensImage,
        alt: 'A smiling woman leaning on a wooden table beside a bottle of Nurture Orange Burst Shower Gel, with Table Mountain behind her',
      },
    },
    {
      id: 'mens',
      title: 'The Men’s Collection',
      description:
        'Grounded, invigorating care featuring the Nostalgic Burst Shower Gel for Men, Body Lotion for Men (Cinnamon), and Body Crème for Men (Gardenia).',
      action: {
        label: 'Explore Men’s Care',
        href: 'https://nurturepersonalcare.co.za/product-category/mens-collection/',
      },
      image: {
        src: mensImage,
        alt: 'A man applying moisturiser to his neck in a bathroom, with Nurture Shower Gel for Men on the counter',
      },
    },
  ],
} as const
