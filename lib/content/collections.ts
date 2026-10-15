import mensImage from '@/public/images/mens-collection-lifestyle.jpg'
import womensImage from '@/public/images/womens-collection-lifestyle.jpg'

export const collections = {
  eyebrow: 'Skincare with purpose',
  title: 'Skincare with Purpose for Real Lives',
  body: 'Whether you’re commuting through Johannesburg, closing deals in Sandton, or unwinding on a Cape Town balcony, your skin takes a beating. Nurture Personal Care bridges the gap between premium luxury and everyday practicality.',
  items: [
    {
      id: 'womens',
      eyebrow: 'For her',
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
      eyebrow: 'For him',
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
