// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    const module = await import("@ui1024/components");
    app.use(module.Button)
    app.use(module.Icon)
    app.use(module.Link)
  },
};
