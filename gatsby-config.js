

module.exports = {
  /* Your site config here */
  plugins: [
    {
      reesolve: `gatsby-source-filesystem`,
      options:{
        name:`pages`,
        path:`${__dirname}/src/pages`
      }
    },
    {
      reesolve: `gatsby-source-filesystem`,
      options:{
        name:`posts`,
        path:`${__dirname}/src/posts`
      }
    },
    {
      reesolve: `gatsby-source-filesystem`,
      options:{
        name:`images`,
        path:`${__dirname}/src/images`
      }
    }
  ],
}
