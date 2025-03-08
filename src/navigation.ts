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
          href: getPermalink('https://www.ebay.com/str/kickznkardzstore'),
        },
        {
          text: 'TCGPlayer',
          href: getPermalink('https://www.tcgplayer.com/search/all/product?seller=c488d2d6&_gl=1*1w709rc*_gcl_aw*R0NMLjE3MzU4NzM2MzUuQ2owS0NRaUFqOW03QmhEMUFSSXNBTnNJSXZCQ1ptRXhDVk42MUVOLVV4SkEyOG94OFNrQUdONmp0WkhCQ2dmanh5MUcxcDJHa3JDNTBCMGFBbEljRUFMd193Y0I.*_gcl_au*MjA3ODM3NTI5MS4xNzM5NzYyMzQwLjg5NzE5MDA3Ni4xNzQwNDYxNzM5LjE3NDA0NjE3Mzk.*_ga*MTE5NTc2ODI4NS4xNzQwNzEyMjAw*_ga_VS9BE2Z3GY*MTc0MTM4MDg1OC4yNS4xLjE3NDEzODA4OTIuMjYuMC4xMDM2NTI2MjEz&view=grid'),
        }
      ],
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
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Sell Your Cards',
      href: '#',
    },
  ],
  actions: [{ text: 'Contact', href: '/contact' }],
};

export const footerData = {
  
  links: [
    {
      title: 'Stores',
      links: [
        { text: 'eBay', href: 'https://www.ebay.com/str/kickznkardzstore' },
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
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
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
