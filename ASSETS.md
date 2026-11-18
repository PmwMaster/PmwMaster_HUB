# GUIA DE ASSETS — PMWMASTER HUB

Este documento descreve toda a estrutura de mídia do **PmwMaster Hub**, incluindo caminhos, dimensões ideais, formatos recomendados e orientações para substituição rápida.

O sistema conta com componentes de fallback inteligente (`ImagePlaceholder.tsx`), garantindo que o visual continue atraente e consistente mesmo se um arquivo ainda não tiver sido adicionado.

---

## 📁 Estrutura de Pastas (`public/assets/`)

```text
public/
  assets/
    brand/
      logo.png               # Logo principal oficial (512x512 ou 800x200 PNG transparente)
      logo-white.png         # Variação da logo monocromática branca
      clover-icon.png        # Ícone do trevo da sorte oficial (256x256 PNG transparente)
      favicon.png            # Ícone de aba do navegador (64x64 PNG)
      og-image.png           # Banner de compartilhamento em redes (1200x630 PNG/JPG)

    hero/
      hero-desktop.webp      # Imagem de fundo da Hero em desktop (1920x1080 ou 2560x1440 WebP)
      hero-mobile.webp       # Versão vertical adaptada para telas de celulares (1080x1920 WebP)
      hero-background.webp   # Textura atmosférica de fundo (1920x1080 WebP)

    profile/
      creator-photo.webp     # Foto profissional do criador PmwMaster (800x1000 WebP)
      creator-background.webp# Background estilizado da seção sobre (1200x800 WebP)

    platforms/
      tiktok.png             # Logo TikTok (128x128 PNG transparente)
      kick.png               # Logo Kick (128x128 PNG transparente)
      twitch.png             # Logo Twitch (128x128 PNG transparente)
      youtube.png            # Logo YouTube (128x128 PNG transparente)
      discord.png            # Logo Discord (128x128 PNG transparente)
      instagram.png          # Logo Instagram (128x128 PNG transparente)

    games/
      gta-vi-cover.webp      # Arte promocional de GTA VI (800x1200 ou 1920x1080 WebP)
      game-placeholder.webp  # Capa padrão para novos jogos (800x600 WebP)

    gallery/
      moment-01.webp         # Capa de vídeo vertical 9:16 (1080x1920 WebP)
      moment-02.webp         # Capa de vídeo horizontal 16:9 (1920x1080 WebP)
      moment-03.webp         # Capa de vídeo vertical 9:16 (1080x1920 WebP)
      moment-04.webp         # Capa de vídeo horizontal 16:9 (1920x1080 WebP)

    community/
      discord-background.webp# Arte de fundo imersiva do Discord (1920x1080 WebP)
      community-art.webp     # Ilustração da comunidade gamer (1000x800 WebP)

    events/
      event-01.webp          # Capa para transmissões semanais (800x600 WebP)
      event-02.webp          # Capa para noites especiais da comunidade (800x600 WebP)

    decorative/
      particles.png          # Textura sutil de partículas (1920x1080 PNG)
      glow-texture.png       # Iluminação radial neon roxa/verde (1000x1000 PNG)
      background-texture.png # Ruído/grid cibernético sutil (1920x1080 PNG)
```

---

## 🎨 Especificações Técnicas e Diretrizes

1. **Formatos Preferenciais:** Utilize `.webp` para fotos e banners (alta compressão sem perda de qualidade visual) e `.png` transparente para logos e ícones.
2. **Cores de Contraste:** Mantenha os logos da marca em versões com bom contraste sobre o fundo escuro (`#080810` e `#11111B`).
3. **Lazy Loading:** Todas as imagens fora da primeira dobra (fora da Hero) possuem carregamento assíncrono (`loading="lazy"`), mantendo a pontuação máxima de performance.
4. **Como substituir:**
   - Basta colar os arquivos correspondentes dentro da pasta com o nome exato indicado na tabela acima.
   - Caso queira usar um nome de arquivo diferente, edite o arquivo de configuração correspondente em `src/config/`.
