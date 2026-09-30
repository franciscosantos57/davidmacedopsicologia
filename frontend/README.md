# David Santos Macedo - Psicologia Clínica

Site expositivo em React, TypeScript, Vite e Tailwind CSS, seguindo a organização do repositório de referência `franciscoseabrasantos`.

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Conteúdo a substituir

- Fotos: `src/assets/profilepicture*.png`
- Conteúdo, contactos e links de marcação/localização: `src/data/content.json`

## Imagens

Os PNG originais ficam em `src/assets`; o site usa WebP de vários tamanhos em
`src/assets/optimized`. Depois de alterar os originais, executa
`python3 scripts/optimize-images.py` (requer `cwebp`, disponível com
`brew install webp`) e inclui os ficheiros gerados no commit. O deploy não
precisa desta ferramenta.

Os preloads em `index.html` devem acompanhar os tamanhos e breakpoints de
`Hero.tsx` para descarregar apenas a fotografia adequada ao ecrã. Os ficheiros
em `/assets/` têm nomes com hash do Vite e cache de um ano; o HTML continua
a poder ser atualizado em cada deploy.
