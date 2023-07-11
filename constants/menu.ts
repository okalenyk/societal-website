import { ReactComponent as Twitter } from 'public/images/icons/twitter.svg';
import { ReactComponent as Discord } from 'public/images/icons/discord.svg';
import { ReactComponent as Medium } from 'public/images/icons/medium.svg';
import { ReactComponent as Email } from 'public/images/icons/email.svg';
import { ReactComponent as Youtube } from 'public/images/icons/youtube.svg';
import { ABOUT, BENEFITS, HOME, PRODUCT } from './paths';

export const menuList = [
  {
    id: 'home',
    name: 'Home',
    href: HOME,
    isExternal: false
  },
  {
    id: 'benefits',
    name: 'Benefits',
    href: BENEFITS,
    isExternal: false
  },
  {
    id: 'product',
    name: 'Product',
    href: PRODUCT,
    isExternal: false
  },
  {
    id: 'about',
    name: 'About',
    href: ABOUT,
    isExternal: false
  }
];

export const menuResources = [
  {
    id: 'whitepaper',
    name: 'Whitepaper',
    href: 'https://docsend.com/view/2gte2fd8wc4jp4rg',
    isExternal: true
  },
  {
    id: 'docs',
    name: 'Docs',
    href: 'https://docs.sctl.xyz/introduction/what-is-societal',
    isExternal: true
  },
  {
    id: 'github',
    name: 'GitHub',
    href: 'https://github.com/sctllabs',
    isExternal: true
  }
];

export const socialList = [
  {
    icon: Youtube,
    link: 'https://www.youtube.com/@societal_xyz'
  },
  {
    icon: Twitter,
    link: 'https://twitter.com/societal_xyz'
  },
  {
    icon: Discord,
    link: 'https://discord.gg/u6fGdRVBF3'
  },
  {
    icon: Medium,
    link: 'https://medium.com/@societal.xyz'
  },
  {
    icon: Email,
    link: 'mailto:info@sctl.xyz'
  }
];
