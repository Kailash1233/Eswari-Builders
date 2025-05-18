/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://eswaribuilders.in",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,
  trailingSlash: false,

  // Exclude internal/utility routes
  exclude: [
    "/admin/*",
    "/dashboard/*",
    "/api/*",
    "/404",
    "/server-sitemap.xml",
  ],

  // Custom priority per route
  transform: async (config, path) => {
    let priority = 0.7;

    if (path === "/" || path === "/services" || path === "/portfolio") {
      priority = 1.0;
    } else if (path === "/about" || path === "/contact") {
      priority = 0.9;
    } else if (path.includes("Service")) {
      priority = 0.8;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
