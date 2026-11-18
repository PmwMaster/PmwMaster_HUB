# 🎮 PMW Master Hub

> Plataforma digital oficial e hub de entretenimento gamer do criador **PmwMaster**.

Construído com arquitetura moderna, identidade visual gamer premium no estilo **Vice City / GTA VI**, foco em multistreaming (TikTok, Kick, YouTube), comunidade no Discord e contagem regressiva para o lançamento de **GTA VI**.

---

## ⚡ Tecnologias

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS (tema Vice City neon personalizado)
- **Animações:** Framer Motion (Helicóptero Vice City, estrelas de perseguição, transições suaves)
- **Áudio / Web Audio API:** Síntese de efeitos sonoros clássicos para Easter Eggs de teclado (`GTA`, `VICE`, `PMW`)
- **Ícones:** Lucide React
- **SEO & Performance:** Metadados dinâmicos, Open Graph, Sitemap e Robots.txt
- **Deploy:** Otimizado para publicação direta na Vercel

---

## 🌐 Conecte-se

- **Kick:** [kick.com/pmw-master](https://kick.com/pmw-master)
- **TikTok:** [@pmwmaster](https://www.tiktok.com/@pmwmaster)
- **YouTube:** [@PmwMaster](https://www.youtube.com/@PmwMaster)
- **Discord:** [discord.gg/7tAB7BRzc](https://discord.gg/7tAB7BRzc)
- **GitHub:** [@PmwMaster](https://github.com/PmwMaster)

---

## 🚀 Como Executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar servidor de desenvolvimento
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
| `src/config/site.ts` | Informações do site, SEO, textos da Hero e metadados |
| `src/config/platforms.ts` | Canais de transmissão (TikTok, Kick, YouTube) |
| `src/config/social.ts` | Links e dados de todas as redes sociais oficiais |
| `src/config/events.ts` | Cronograma de transmissões semanais e contagem regressiva |

---

## 💎 Estrutura do Projeto

```text
pmwmaster_hub/
├── public/
│   └── assets/           # Imagens, logos e artes oficiais da marca
├── src/
│   ├── app/              # Rotas, layout e metadados SEO do App Router
│   ├── components/
│   │   ├── effects/      # CheatCodeListener, ViceCityHelicopter, WantedLevel, GtaCountdown
│   │   ├── layout/       # Navbar e Footer
│   │   ├── sections/     # Hero, LivePlatforms, About, Community, Schedule, SocialLinks
│   │   └── ui/           # Button, Card, SectionHeading
│   ├── config/           # Arquivos centrais de configuração
│   ├── lib/              # Utilitários (cn, tailwind-merge)
│   └── types/            # Tipagens TypeScript estritas
└── README.md
```

---

© PmwMaster. *Mais que gameplay. Uma comunidade.*
