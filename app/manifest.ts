import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Xparience",
    short_name: "Xparience",
    description:
      "A mindful dating and lifestyle platform with curated virtual dates, real-world date ideas, and events.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#006786",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
