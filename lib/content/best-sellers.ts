import creamImage from '@/public/images/best-seller-body-creme-for-men.jpg'
import lotionImage from '@/public/images/best-seller-body-lotion.jpg'
import showerGelImage from '@/public/images/best-seller-orange-burst-shower-gel.jpg'

export const bestSellers = {
  eyebrow: 'Customer favourites',
  title: 'Our Best Sellers',
  description: 'The daily rituals your skin has been waiting for.',
  action: { label: 'Shop all products', href: '#range' },
  items: [
    {
      id: 'orange-burst-shower-gel',
      name: 'Orange Burst Shower Gel',
      description:
        'Infused with natural orange zest, this shower gel is a burst of sunshine in a bottle, crafted to deliver the perfect balance of freshness, indulgence, and sense of aroma.',
      priceCents: 9199,
      href: 'https://nurturepersonalcare.co.za/product/orange-burst-shower-gel/',
      image: {
        src: showerGelImage,
        alt: 'Nurture Orange Burst Shower Gel beside a halved orange and folded towels',
      },
    },
    {
      id: 'body-lotion',
      name: 'Body Lotion',
      description:
        'A biodegradable formula designed to soothe all skin types and deliver 100% comfort. Perfect for locking in moisture after a morning shower or pre-work gym session.',
      priceCents: 9599,
      href: 'https://nurturepersonalcare.co.za/product/fresh-lemon-lotion/',
      image: {
        src: lotionImage,
        alt: 'Nurture Lemon Fresh Body Lotion pump bottle with sliced lemons and a basket of towels',
      },
    },
    {
      id: 'body-creme-for-men',
      name: 'Body Crème For Men',
      description:
        'Enriched with warm gardenia extracts and 0% harsh chemicals. Deeply conditions rough skin on hands, elbows, and body with a masculine, subtle earthiness.',
      priceCents: 10800,
      href: 'https://nurturepersonalcare.co.za/product/warm-gardenia-creme-for-men/',
      image: {
        src: creamImage,
        alt: 'A tub of Nurture Warm Gardenia Body Crème for Men on a wooden board with gardenia flowers',
      },
    },
  ],
} as const
