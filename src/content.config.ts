import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema';
import { defineCollection } from 'astro:content';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: (context) => blogSchema(context) }),
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
