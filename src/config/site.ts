import { SiteConfig, NavItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "PmwMaster Hub",
  creator: "PmwMaster",
  title: "PmwMaster | GTA VI, Lives e Comunidade Gamer",
  description: "A sua casa para acompanhar as lives de GTA VI e gameplays ao vivo. Entre na comunidade do Discord e assista no TikTok, Kick e YouTube.",
  url: "https://pmwmaster.com",
  ogImage: "/assets/brand/og-image.png",
  slogan: "A SUA CASA NO GTA VI",
  hero: {
    headline: "A CASA DO GTA VI.\nVIVA O JOGO AO VIVO.",
    subheadline: "Lives diárias, comunidade no Discord e a cobertura completa do GTA VI ao vivo.",
    ctaPrimary: {
      text: "ASSISTIR ÀS LIVES",
      href: "#transmissoes",
    },
    ctaSecondary: {
      text: "ENTRAR NO DISCORD",
      href: "#comunidade",
    },
  },
  about: {
    title: "O HUB DO GTA VI",
    description: "Transmissão ao vivo desde o primeiro minuto, novidades de Vice City e comunidade ativa no Discord para jogar junto.",
    history: [
      "Transmissão ao vivo desde o primeiro minuto do lançamento oficial de GTA VI.",
      "Lives dinâmicas no TikTok, Kick e YouTube com bate-papo sem filtro e foco na resenha.",
      "Salas abertas no Discord para montar equipe, trocar dicas e jogar junto.",
    ],
    stats: [
      { label: "Foco Principal", value: "GTA VI & Open World" },
      { label: "Plataformas", value: "TikTok, Kick & YT" },
      { label: "Esquadrão", value: "Discord Aberto" },
      { label: "Objetivo", value: "Zerar com o Chat" },
    ],
  },
};

export const navItems: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Ao Vivo", href: "#transmissoes" },
  { label: "GTA VI & Hub", href: "#sobre" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Agenda", href: "#agenda" },
  { label: "Redes", href: "#redes" },
];
