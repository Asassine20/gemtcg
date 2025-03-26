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
          href: getPermalink('https://www.tcgplayer.com/search/all/product?seller=c488d2d6&_gl=1*1w709rc*_gcl_aw*R0NMLjE3MzU4NzM2MzUuQ2owS0NRaUFqOW03QmhEMUFSSXNBTnNJSXZCQ1ptRXhDVk42MUVOLVV4SkEyOG94OFNrQUdONmp0WkhCQ2dmanh5MUcxcDJHa3JDNTBCMGFBbEljRUFMd193Y0I.*_gcl_au*MjA3ODM3NTI5MS4xNzM5NzYyMzQwLjg5NzE5MDA3Ni4xNzQwNDYxNzM5LjE3NDA0NjE3Mzk.*_ga*MTE5NTc2ODI4NS4xNzQwNzEyMjAw*_ga_VS9BE2Z3GY*MTc0MTM4MDg1OC4yNS4xLjE3NDEzODA4OTIuMjYuMC4xMDM2NTI2MjEz&view=grid'),
        }
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        /*
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },

        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
        */
      ],
    },
    {
      text: 'Supplies',
      href: '/affiliate/products',
    },
    {
      text: 'Pokemon Alert Tool',
      href: '/pokemon-alert-tool',
    },
    {
      text: 'Socials',
      links: [
        {
          text: 'YouTube',
          href: getPermalink('https://www.youtube.com/@GemTCG'),
        },
        {
          text: 'Patreon',
          href: getPermalink('https://www.patreon.com/c/GemTCG'),
        },
        {
          text: 'Facebook',
          href: getPermalink('https://www.facebook.com/kickzNkardz/'),
        },
        {
          text: 'Instagram',
          href: getPermalink('https://www.instagram.com/officialgemtcg/'),
        },
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
  actions: [{ text: 'Contact', href: '/contact' }],
};

export const footerData = {
  
  links: [
    {
      title: 'Stores',
      links: [
        { text: 'eBay', href: 'https://ebay.us/Nt2NFw' },
        { text: 'TCGPlayer', href: 'https://www.tcgplayer.com/search/all/product?seller=c488d2d6&_gl=1*1w709rc*_gcl_aw*R0NMLjE3MzU4NzM2MzUuQ2owS0NRaUFqOW03QmhEMUFSSXNBTnNJSXZCQ1ptRXhDVk42MUVOLVV4SkEyOG94OFNrQUdONmp0WkhCQ2dmanh5MUcxcDJHa3JDNTBCMGFBbEljRUFMd193Y0I.*_gcl_au*MjA3ODM3NTI5MS4xNzM5NzYyMzQwLjg5NzE5MDA3Ni4xNzQwNDYxNzM5LjE3NDA0NjE3Mzk.*_ga*MTE5NTc2ODI4NS4xNzQwNzEyMjAw*_ga_VS9BE2Z3GY*MTc0MTM4MDg1OC4yNS4xLjE3NDEzODA4OTIuMjYuMC4xMDM2NTI2MjEz&view=grid' },
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
