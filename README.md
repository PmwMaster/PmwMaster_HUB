# 🎮 PmwMaster Hub

> Plataforma digital oficial do ecossistema e comunidade gamer do criador **PmwMaster**.

Construído com arquitetura moderna, identidade visual gamer premium, foco em transmissões, vídeos, Discord e preparação para a era de **GTA VI**.

---

## ⚡ Tecnologias

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS (tema gamer neon customizado)
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **SEO:** Metadados dinâmicos, Open Graph, Twitter Cards, Sitemap e Robots.txt
- **Deploy:** Otimizado para publicação direta na Vercel

---

## 🚀 Como Executar

### 1. Instalar as dependências
```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### 3. Build de produção
```bash
npm run build
npm run start
```

---

## ⚙️ Configuração Centralizada

Toda a personalização de links, textos e conteúdos está centralizada na pasta `src/config/`:

| Arquivo | Descrição |
| :--- | :--- |
| `src/config/site.ts` | Informações do site, SEO, textos da Hero, história e estatísticas da seção Sobre |
| `src/config/platforms.ts` | Canais de transmissão (TikTok Live, Kick, Twitch) e status de live |
| `src/config/social.ts` | Links e seguidores de todas as redes sociais oficiais |
| `src/config/events.ts` | Cronograma de transmissões semanais e eventos especiais |
| `src/config/gallery.ts` | Galeria de melhores momentos, cortes e Shorts (formatos 9:16 e 16:9) |

---

## 🎨 Sistema de Assets & Imagens

Consulte o arquivo [`ASSETS.md`](./ASSETS.md) para detalhes completos sobre as dimensões recomendadas e pastas de cada imagem em `public/assets/`.

O projeto conta com o componente `ImagePlaceholder`, que garante que o layout permaneça impecável com visual neon mesmo antes das fotos e banners oficiais serem adicionados.

---

## 💎 Estrutura do Projeto

```text
pmwmaster_hub/
├── public/
│   └── assets/           # Imagens, logos e artes da marca
├── src/
│   ├── app/              # Rotas, layout e metadados SEO do App Router
│   ├── components/
│   │   ├── layout/       # Navbar e Footer
│   │   ├── sections/     # Hero, LivePlatforms, About, Community, Gallery, Schedule, SocialLinks
│   │   └── ui/           # Button, Card, SectionHeading, ImagePlaceholder
│   ├── config/           # Arquivos centrais de configuração
│   ├── lib/              # Utilitários (cn, tailwind-merge)
│   └── types/            # Tipagens TypeScript estritas
├── ASSETS.md             # Guia de dimensões e substituição de imagens
└── prompt inicial.md     # Especificação técnica do ecossistema PmwMaster
```

---

© PmwMaster. *Play Together. Create Moments.*
