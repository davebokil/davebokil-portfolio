/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
  'gatsby-plugin-next-seo',
  {
    resolve: `gatsby-source-instagram`,
    options: {
      username: `200809158`,
    },
  },
  ],
}
