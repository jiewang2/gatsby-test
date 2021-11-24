module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsbytestmain97458.gatsbyjs.io/",
    title: "Gatsby Demo",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};
