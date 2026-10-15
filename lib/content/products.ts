import citrusRoseImage from '@/public/images/product-citrus-rose-creme.jpg'
import comboLadiesImage from '@/public/images/product-combo-for-ladies.jpg'
import comboMenImage from '@/public/images/product-combo-for-men.jpg'
import lemonLotionImage from '@/public/images/product-fresh-lemon-lotion.jpg'
import nostalgicImage from '@/public/images/product-nostalgic-burst-shower-gel-for-men.jpg'
import orangeBurstImage from '@/public/images/product-orange-burst-shower-gel.jpg'
import gardeniaImage from '@/public/images/product-warm-gardenia-creme-for-men.jpg'
import woodExtractImage from '@/public/images/product-wood-extract-lotion-for-men.jpg'

export const products = {
  eyebrow: 'The full range',
  title: 'Shop the collection',
  description: 'Body lotions, shower gels and body crèmes for men and women.',
  action: { label: 'Visit the online shop', href: 'https://nurturepersonalcare.co.za/shop/' },
  filters: [
    { id: 'all', label: 'All products' },
    { id: 'women', label: 'Women’s' },
    { id: 'men', label: 'Men’s' },
    { id: 'gift-sets', label: 'Gift sets' },
  ],
  items: [
    {
      id: 'combo-for-ladies',
      name: 'Combo for Ladies',
      type: 'Gift set',
      categories: ['women', 'gift-sets'],
      priceCents: 28799,
      originalPriceCents: 36100,
      href: 'https://nurturepersonalcare.co.za/product/combo-for-ladies/',
      image: {
        src: comboLadiesImage,
        alt: 'Nurture Lemon Fresh Body Lotion, Orange Burst Shower Gel and Citrus Rose Body Crème together',
      },
    },
    {
      id: 'combo-for-men',
      name: 'Combo for Men',
      type: 'Gift set',
      categories: ['men', 'gift-sets'],
      priceCents: 33199,
      originalPriceCents: 41500,
      href: 'https://nurturepersonalcare.co.za/product/combo-for-men/',
      image: {
        src: comboMenImage,
        alt: 'Nurture Nostalgic Burst Shower Gel, Wood Extract Body Lotion and Warm Gardenia Body Crème for Men together',
      },
    },
    {
      id: 'orange-burst-shower-gel',
      name: 'Orange Burst Shower Gel',
      type: 'Shower gel',
      categories: ['women'],
      priceCents: 9199,
      originalPriceCents: 10000,
      href: 'https://nurturepersonalcare.co.za/product/orange-burst-shower-gel/',
      image: { src: orangeBurstImage, alt: 'Nurture Orange Burst Shower Gel with a halved orange' },
    },
    {
      id: 'fresh-lemon-lotion',
      name: 'Fresh Lemon Lotion',
      type: 'Body lotion',
      categories: ['women'],
      priceCents: 9599,
      originalPriceCents: 12000,
      href: 'https://nurturepersonalcare.co.za/product/fresh-lemon-lotion/',
      image: { src: lemonLotionImage, alt: 'Nurture Lemon Fresh Body Lotion with sliced lemons' },
    },
    {
      id: 'citrus-rose-creme',
      name: 'Citrus Rose Creme',
      type: 'Body crème',
      categories: ['women'],
      priceCents: 9999,
      originalPriceCents: 13600,
      href: 'https://nurturepersonalcare.co.za/product/citrus-rose-creme/',
      image: {
        src: citrusRoseImage,
        alt: 'Nurture Citrus Rose Body Crème with grapefruit and roses',
      },
    },
    {
      id: 'nostalgic-burst-shower-gel-for-men',
      name: 'Nostalgic Burst Shower Gel for Men',
      type: 'Shower gel',
      categories: ['men'],
      priceCents: 9999,
      originalPriceCents: 13600,
      href: 'https://nurturepersonalcare.co.za/product/nostalgic-burst-shower-gel-for-men/',
      image: {
        src: nostalgicImage,
        alt: 'Nurture Nostalgic Burst Shower Gel for Men on a bathroom shelf',
      },
    },
    {
      id: 'wood-extract-lotion-for-men',
      name: 'Wood Extract Lotion for Men',
      type: 'Body lotion',
      categories: ['men'],
      priceCents: 12399,
      originalPriceCents: 15500,
      href: 'https://nurturepersonalcare.co.za/product/wood-extract-lotion-for-men/',
      image: {
        src: woodExtractImage,
        alt: 'Nurture Wood Extract Body Lotion for Men in a black pump bottle',
      },
    },
    {
      id: 'warm-gardenia-creme-for-men',
      name: 'Warm Gardenia Creme for Men',
      type: 'Body crème',
      categories: ['men'],
      priceCents: 10800,
      originalPriceCents: 13600,
      href: 'https://nurturepersonalcare.co.za/product/warm-gardenia-creme-for-men/',
      image: {
        src: gardeniaImage,
        alt: 'Nurture Warm Gardenia Body Crème for Men with gardenia flowers',
      },
    },
  ],
} as const
