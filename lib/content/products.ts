import citrusRoseImage from '@/public/images/product-citrus-rose-creme.jpg'
import comboLadiesImage from '@/public/images/product-combo-for-ladies.jpg'
import comboMenImage from '@/public/images/product-combo-for-men.jpg'
import lemonLotionImage from '@/public/images/product-fresh-lemon-lotion.jpg'
import nostalgicImage from '@/public/images/product-nostalgic-burst-shower-gel-for-men.jpg'
import orangeBurstImage from '@/public/images/product-orange-burst-shower-gel.jpg'
import gardeniaImage from '@/public/images/product-warm-gardenia-creme-for-men.jpg'
import woodExtractImage from '@/public/images/product-wood-extract-lotion-for-men.jpg'

export const products = {
  eyebrow: 'Our best sellers',
  title: 'The daily rituals your skin has been waiting for',
  action: { label: 'View all', href: 'https://nurturepersonalcare.co.za/shop/' },
  items: [
    {
      id: 'orange-burst-shower-gel',
      name: 'Orange Burst Shower Gel',
      tag: 'Best seller',
      collection: 'Women’s Collection',
      description:
        'Infused with natural orange zest, this shower gel is a burst of sunshine in a bottle, crafted to deliver the perfect balance of freshness, indulgence, and sense of aroma.',
      priceCents: 9199,
      originalPriceCents: 10000,
      href: 'https://nurturepersonalcare.co.za/product/orange-burst-shower-gel/',
      image: { src: orangeBurstImage, alt: 'Nurture Orange Burst Shower Gel with a halved orange' },
    },
    {
      id: 'fresh-lemon-lotion',
      name: 'Fresh Lemon Lotion',
      tag: 'Best seller',
      collection: 'Women’s Collection',
      description:
        'A biodegradable formula designed to soothe all skin types and deliver 100% comfort. Perfect for locking in moisture after a morning shower or pre-work gym session.',
      priceCents: 9599,
      originalPriceCents: 12000,
      href: 'https://nurturepersonalcare.co.za/product/fresh-lemon-lotion/',
      image: { src: lemonLotionImage, alt: 'Nurture Lemon Fresh Body Lotion with sliced lemons' },
    },
    {
      id: 'warm-gardenia-creme-for-men',
      name: 'Warm Gardenia Creme for Men',
      tag: 'Best seller',
      collection: 'Men’s Collection',
      description:
        'Enriched with warm gardenia extracts and 0% harsh chemicals. Deeply conditions rough skin on hands, elbows, and body with a masculine, subtle earthiness.',
      priceCents: 10800,
      originalPriceCents: 13600,
      href: 'https://nurturepersonalcare.co.za/product/warm-gardenia-creme-for-men/',
      image: {
        src: gardeniaImage,
        alt: 'Nurture Warm Gardenia Body Crème for Men with gardenia flowers',
      },
    },
    {
      id: 'wood-extract-lotion-for-men',
      name: 'Wood Extract Lotion for Men',
      tag: 'Body lotion',
      collection: 'Men’s Collection',
      description: null,
      priceCents: 12399,
      originalPriceCents: 15500,
      href: 'https://nurturepersonalcare.co.za/product/wood-extract-lotion-for-men/',
      image: {
        src: woodExtractImage,
        alt: 'Nurture Wood Extract Body Lotion for Men in a black pump bottle',
      },
    },
    {
      id: 'combo-for-men',
      name: 'Combo for Men',
      tag: 'Gift set',
      collection: 'Men’s Collection',
      description: null,
      priceCents: 33199,
      originalPriceCents: 41500,
      href: 'https://nurturepersonalcare.co.za/product/combo-for-men/',
      image: {
        src: comboMenImage,
        alt: 'Nurture Nostalgic Burst Shower Gel, Wood Extract Body Lotion and Warm Gardenia Body Crème for Men together',
      },
    },
    {
      id: 'nostalgic-burst-shower-gel-for-men',
      name: 'Nostalgic Burst Shower Gel for Men',
      tag: 'Shower gel',
      collection: 'Men’s Collection',
      description: null,
      priceCents: 9999,
      originalPriceCents: 13600,
      href: 'https://nurturepersonalcare.co.za/product/nostalgic-burst-shower-gel-for-men/',
      image: {
        src: nostalgicImage,
        alt: 'Nurture Nostalgic Burst Shower Gel for Men on a bathroom shelf',
      },
    },
    {
      id: 'combo-for-ladies',
      name: 'Combo for Ladies',
      tag: 'Gift set',
      collection: 'Women’s Collection',
      description: null,
      priceCents: 28799,
      originalPriceCents: 36100,
      href: 'https://nurturepersonalcare.co.za/product/combo-for-ladies/',
      image: {
        src: comboLadiesImage,
        alt: 'Nurture Lemon Fresh Body Lotion, Orange Burst Shower Gel and Citrus Rose Body Crème together',
      },
    },
    {
      id: 'citrus-rose-creme',
      name: 'Citrus Rose Creme',
      tag: 'Body crème',
      collection: 'Women’s Collection',
      description: null,
      priceCents: 9999,
      originalPriceCents: 13600,
      href: 'https://nurturepersonalcare.co.za/product/citrus-rose-creme/',
      image: {
        src: citrusRoseImage,
        alt: 'Nurture Citrus Rose Body Crème with grapefruit and roses',
      },
    },
  ],
} as const
