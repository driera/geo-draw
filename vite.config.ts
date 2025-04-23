import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssPresetEnv from "postcss-preset-env";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/geo-draw/" : "/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase"
    },
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 2,
          features: {
            "nesting-rules": true
          }
        })
      ]
    }
  },
})
