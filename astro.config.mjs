// @ts-check
import { defineConfig, fontProviders, svgoOptimizer } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "http://aymen-errfig.me",
  experimental: {
    svgOptimizer: svgoOptimizer()
  },

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Grotesque",
      cssVariable: "--font-heading",
      options: {
        variants: [{
          src: ["./src/assets/fonts/BricolageGrotesque.ttf"]
        }]
      }
    },
    {
      provider: fontProviders.local(),
      name: "Sora",
      cssVariable: "--font-display",
      options: {
        variants: [{
          src: ["./src/assets/fonts/Sora.ttf"]
        }]
      }
    },
    {
      provider: fontProviders.local(),
      name: "Space",
      cssVariable: "--font-label",
      options: {
        variants: [{
          src: ["./src/assets/fonts/SpaceGrotesk.ttf"]
        }]
      }
    },
    {
      provider: fontProviders.local(),
      name: "Space",
      cssVariable: "--font-label-small",
      options: {
        variants: [{
          src: ["./src/assets/fonts/SpaceGrotesk-Medium.ttf"]
        }]
      }
    }
  ],

  integrations: [icon({
    iconDir: "./src/assets/icons"
  })]
});