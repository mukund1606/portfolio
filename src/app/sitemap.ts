import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mukund.page/",
      lastModified: new Date(),
    },
    {
      url: "https://mukund.page/about",
      lastModified: new Date(),
    },
    {
      url: "https://mukund.page/techstack",
      lastModified: new Date(),
    },
    {
      url: "https://mukund.page/about",
      lastModified: new Date(),
    },
    {
      url: "https://mukund.page/projects",
      lastModified: new Date(),
    },
    {
      url: "https://mukund.page/contact",
      lastModified: new Date(),
    },
  ];
}
