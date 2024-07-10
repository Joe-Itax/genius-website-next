import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://genius-service.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://genius-service.vercel.app/services",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // {
    //   url: "https://acme.com/blog",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly or monthly or yearly",
    //   priority: 0.5,
    // },
  ];
}
