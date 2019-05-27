plugins: [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/pages/blog`,
      name: "markdown-pages",
    }
  },
]
