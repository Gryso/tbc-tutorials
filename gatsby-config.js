module.exports = {
  siteMetadata: {
    charset: `utf-8`,
    title: `TBC-tutorials`,
    siteUrl: `https://www.tbc-tutorials.com`,
    description: `Tutorials and resources for The Burning Crusade expansion of World of Warcraft`,
    lang: `en`,
    keywords: `banana, paprika`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    }
  ],
};
