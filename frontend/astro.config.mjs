import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import apostrophe from '@apostrophecms/apostrophe-astro';
import { loadEnv } from "vite";

const { APOS_HOST } = loadEnv(process.env.APOS_HOST, process.cwd(), "http://localhost:3000");

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    apostrophe({
      aposHost: APOS_HOST,
      widgetsMapping: './src/widgets',
      templatesMapping: './src/templates',
      forwardHeaders: [
        'content-security-policy',
        'strict-transport-security',
        'x-frame-options',
        'referrer-policy',
        'cache-control',
        'host'
      ]
    })
  ],
  vite: {
    ssr: {
      // Do not externalize the @apostrophecms/apostrophe-astro plugin, we need
      // to be able to use virtual: URLs there
      noExternal: [ '@apostrophecms/apostrophe-astro' ],
    }
  }
});
