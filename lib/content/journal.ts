import citrusRoseImage from '@/public/images/journal-citrus-rose.jpg'
import dehydratedImage from '@/public/images/journal-dehydrated-skin.jpg'
import lotionCremeImage from '@/public/images/journal-lotion-vs-creme.jpg'

export const journal = {
  eyebrow: 'Science Hub',
  title: 'Skin & Self-Care Stories',
  description:
    'Practical guides on plant-powered hydration, protecting your skin in urban climates, and elevating your daily rituals.',
  action: {
    label: 'Visit the Science Hub',
    href: '/blog-nurture-personal-care',
  },
  posts: [
    {
      id: 'citrus-rose',
      title: 'Behind the Scent: How We Chose Citrus Rose',
      excerpt:
        'Not every scent makes the cut. Here’s how we landed on Citrus Rose, and why balance mattered more than anything else.',
      publishedAt: '2026-08-24',
      href: '/2026/08/24/behind-the-scent-how-we-chose-citrus-rose',
      image: {
        src: citrusRoseImage,
        alt: 'Citrus peel and dried petals on a rustic wooden table',
      },
    },
    {
      id: 'dehydrated-skin',
      title: '5 Signs Your Skin Is Dehydrated (And What To Do About It)',
      excerpt:
        'Dehydrated skin isn’t the same as dry skin. Here are five signs to watch for, and simple ways to fix it.',
      publishedAt: '2026-08-24',
      href: '/2026/08/24/5-signs-your-skin-is-dehydrated-and-what-to-do-about-it',
      image: {
        src: dehydratedImage,
        alt: 'A woman touching her forearm beside a glass of water',
      },
    },
    {
      id: 'lotion-vs-creme',
      title: 'Lotion vs Creme: Which One Does Your Skin Actually Need?',
      excerpt:
        'Lotions and cremes aren’t interchangeable. Here’s the real difference between them.',
      publishedAt: '2026-08-24',
      href: '/2026/08/24/lotion-vs-creme-which-one-does-your-skin-actually-need',
      image: {
        src: lotionCremeImage,
        alt: 'A woman applying lotion to her arm at a bathroom basin',
      },
    },
  ],
} as const
