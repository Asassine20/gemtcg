import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    /*
    {
      text: 'Homes',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    */
    {
      text: 'Stores',
      links: [
        {
          text: 'eBay',
          href: getPermalink('https://ebay.us/Nt2NFw'),
        },
        {
          text: 'TCGPlayer',
          href: getPermalink('https://partner.tcgplayer.com/9LnkyE'),
        }
      ],
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Supplies',
      href: '/affiliate/products',
    },
    {
      text: 'Tools',
      links: [
        {
          text: 'eBay Fee Calculator',
          href: getPermalink('/ebay-fee-calculator'),
        },
        {
          text: 'TCG Spike',
          href: getPermalink('/tcg-spike'),
        }
      ],
    },
    {
      text: 'Sell Your Cards',
      links: [
        {
          text: 'Sell Your Collection',
          href: getPermalink('/sell-collection'),
        },
        {
          text: 'Sell Your Bulk',
          href: getPermalink('/sell-bulk'),
        }
      ],
    }
  ],
  actions: [{ text: 'Contact Me', href: '/contact' }],
};

export const footerData = {
  
  links: [
    {
      title: 'Stores',
      links: [
        { text: 'eBay', href: 'https://ebay.us/Nt2NFw' },
        { text: 'TCGPlayer', href: 'https://partner.tcgplayer.com/9LnkyE' },
      ],
    },
    /*
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    */
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Supplies',
      links: [
        { text: 'All Supplies', href: '/affiliate/products' },
        { text: 'Card Scanners', href: '/auto-feed-card-scanners' },
        { text: 'Shipping Supplies', href: '#' },
        { text: 'Office Supplies', href: '#' },
      ],
    },
    {
      title: 'Tools',
      links: [
        { text: 'eBay Fee Calculator', href: '/ebay-fee-calculator' },
        { text: 'TCG Watch', href: '/tcg-watch' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@GemTCG' },
    { ariaLabel: 'Patreon', icon: 'tabler:brand-patreon', href: 'https://www.patreon.com/c/GemTCG' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/officialgemtcg/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/kickzNkardz/' },
  ],
  
  footNote: `
  Web Design & SEO by <a class="text-blue-600 underline dark:text-muted" 
  href="https://targetrankseo.com/" target="_blank" rel="noopener noreferrer">
  Target Rank SEO</a> · All rights reserved.
`,

};
