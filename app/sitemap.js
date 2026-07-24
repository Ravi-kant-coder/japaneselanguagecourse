const pages = [
  { path: "/", priority: 1.0 },
  { path: "/courses", priority: 0.9 },
  { path: "/contact", priority: 0.8 },
];

const BASE_URL = "https://japaneselanguagecourse.com";

export default function sitemap() {
  return pages.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));
}
