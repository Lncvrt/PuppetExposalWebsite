import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://puppet.lncvrt.xyz/",
      lastModified: new Date(),
      changeFrequency: "daily",
    },
    {
      url: "https://puppet.lncvrt.xyz/youtube-archive",
      lastModified: new Date(),
      changeFrequency: "daily",
    },
    {
      url: "https://puppet.lncvrt.xyz/profiles",
      lastModified: new Date(),
      changeFrequency: "daily",
    },
    {
      url: "https://puppet.lncvrt.xyz/archive-info",
      lastModified: new Date(),
      changeFrequency: "daily",
    },
  ];
}