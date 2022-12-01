import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["astro-google-fonts-optimizer"],
    },
  },
  integrations: [tailwind(), image(), compress()],
});
