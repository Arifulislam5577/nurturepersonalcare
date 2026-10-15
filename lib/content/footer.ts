export const footer = {
  columns: [
    {
      id: 'company',
      title: 'Company',
      links: [
        { label: 'Shop', href: '/shop' },
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about-nurture-personal-care' },
        { label: 'Contact', href: '/contact-us-nurture-personal-care' },
      ],
    },
    {
      id: 'shop',
      title: 'Shop',
      links: [
        {
          label: 'Gift Sets',
          href: '/product-category/gift-sets',
        },
        {
          label: 'Men’s Collection',
          href: '/product-category/mens-collection',
        },
        {
          label: 'Women’s Collection',
          href: '/product-category/womens-collection',
        },
        {
          label: 'Body Cremes',
          href: '/product-category/body-cremes',
        },
        {
          label: 'Body Lotions',
          href: '/product-category/body-lotions',
        },
        {
          label: 'Shower Gels',
          href: '/product-category/shower-gels-2',
        },
      ],
    },
    {
      id: 'quick-links',
      title: 'Quick Links',
      links: [
        {
          label: 'Science Hub',
          href: '/blog-nurture-personal-care',
        },
        { label: 'FAQs', href: '/contact-us-nurture-personal-care' },
        { label: 'Cart', href: '/cart' },
      ],
    },
  ],
  copyright: 'All rights reserved.',
  copyrightYear: 2026,
} as const
