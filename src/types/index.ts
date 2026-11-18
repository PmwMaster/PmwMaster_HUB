export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  creator: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  slogan: string;
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: {
      text: string;
      href: string;
    };
    ctaSecondary: {
      text: string;
      href: string;
    };
  };
  about: {
    title: string;
    description: string;
    history: string[];
    stats: {
      label: string;
      value: string;
    }[];
  };
}

export interface LivePlatform {
  id: string;
  name: string;
  handle: string;
  url: string;
  icon: string;
  color: string;
  badgeText?: string;
  description: string;
  image?: string;
  isLive?: boolean;
}

export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  url: string;
  icon: string;
  followers?: string;
  description: string;
}

export interface EventItem {
  id: string;
  title: string;
  game: string;
  date: string;
  time: string;
  description: string;
  status: "confirmado" | "em_breve" | "especial";
  image?: string;
  platform: string;
  link?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  platform: "YouTube" | "TikTok" | "Instagram";
  type: "short" | "corte" | "destaque";
  aspectRatio: "vertical" | "horizontal";
  thumbnail?: string;
  url: string;
  views?: string;
}
