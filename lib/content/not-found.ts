export const notFound = {
  meta: {
    title: 'Page not found | Nurture Personal Care',
    description:
      'This page doesn’t exist yet. Head back to Nurture Personal Care to find plant-based body care made in South Africa.',
  },
  eyebrow: 'Error 404',
  code: '404',
  title: 'This page has wandered off.',
  description:
    'The page you’re looking for may have been moved, renamed, or isn’t ready yet. Let’s guide you back to something good for your skin.',
  homeAction: { label: 'Back to Home', href: '/' },
  shopAction: { label: 'Shop All Products', href: '/shop' },
  help: {
    title: 'Maybe you were looking for…',
    description: 'A few good places to pick up where you left off.',
    links: [
      { id: 'shop', label: 'Shop', title: 'Browse all products', href: '/shop' },
      {
        id: 'about',
        label: 'Our story',
        title: 'Rooted in South Africa',
        href: '/about-nurture-personal-care',
      },
      {
        id: 'science-hub',
        label: 'Science Hub',
        title: 'Skin & self-care stories',
        href: '/blog-nurture-personal-care',
      },
      {
        id: 'contact',
        label: 'Support',
        title: 'Talk to our team',
        href: '/contact-us-nurture-personal-care',
      },
    ],
  },
} as const
