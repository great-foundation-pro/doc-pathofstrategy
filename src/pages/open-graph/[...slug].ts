// Автогенерация OG-превью для каждой страницы документации (тексты + блог)
// на основе frontmatter (title/description) из коллекции `docs`.
import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const entries = await getCollection('docs');
const pages = Object.fromEntries(entries.map((entry) => [entry.id, entry.data]));

// Дефолтный шрифт astro-og-canvas — только латинское подмножество Noto Sans,
// без кириллицы. Подмножества Fontsource (latin/cyrillic по отдельности) не
// объединяются в один fallback-стек в CanvasKit — грузится только одно из
// двух. Поэтому используем локальный файл Noto Sans (google/fonts, OFL),
// который включает латиницу и кириллицу в одном файле.
const NOTO_SANS = './src/assets/fonts/NotoSans-Variable.ttf';

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: './src/assets/pathofstrategy-logo.png',
      size: [96],
    },
    bgGradient: [[10, 31, 21]],
    border: { color: [196, 149, 56], width: 20 },
    font: {
      title: { color: [244, 240, 230], size: 64, families: ['Noto Sans'] },
      description: { color: [196, 149, 56], size: 34, families: ['Noto Sans'] },
    },
    fonts: [NOTO_SANS],
  }),
});
