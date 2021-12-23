const autoImportConfig = require("./config/autoImportConfig");

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Nuxt 2 TypeScript Template",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    ["@nuxt/typescript-build", { typeCheck: false }],
    "@nuxt/postcss8",
    "@nuxtjs/composition-api/module",
    "unplugin-vue2-script-setup/nuxt",
    ["unplugin-auto-import/nuxt", autoImportConfig()],
    "@vueuse/nuxt",
  ],
  scriptSetup: {
    /* options */
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
