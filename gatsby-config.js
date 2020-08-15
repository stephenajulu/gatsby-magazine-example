module.exports = {
  // siteMetadata is used for sitemap.xml
  siteMetadata: {
    siteUrl: `https://magazine-example.livingdocs.io/sitemap.xml` // @TODO swap out for your host
  },
  plugins: [
    {
      resolve: 'gatsby-source-livingdocs',
      options: {
        // The accessToken is accessed at buildtime and set in netlify in this case
        accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InB1YmxpYy1hcGk6cmVhZCBwdWJsaWMtYXBpOndyaXRlIHB1YmxpYy1hcGk6Y29uZmlnOnJlYWQgcHVibGljLWFwaTpjb25maWc6d3JpdGUiLCJuYW1lIjoiTGl2aW5nIERvY3MiLCJwcm9qZWN0SWQiOjk2NCwiY2hhbm5lbElkIjo5NDQsInR5cGUiOiJjbGllbnQiLCJqdGkiOiI4MmFiY2ZjZC0yZmJkLTQ5YjgtOTU1OC1mN2U4OGNjOWJiYTciLCJjb2RlIjoiODJhYmNmY2QtMmZiZC00OWI4LTk1NTgtZjdlODhjYzliYmE3IiwiaWF0IjoxNTk3NDk5NTY4fQ.RSNUSnz_SLS8R2tLYINEKIIfmuDe60T3ymLxnmIJbHU,
        design: {
          name: 'living-times',
          version: '1.0.0'
        },
        recursion: true
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://magazine-example.livingdocs.io/', // @TODO swap out for your host
        sitemap: 'https://magazine-example.livingdocs.io/sitemap.xml', // @TODO swap out for your host
        env: {
          development: {
            policy: [{userAgent: '*', disallow: ['/']}]
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'living-times', // @TODO swap out for your name / icon
        short_name: 'living-times',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        display: 'minimal-ui',
        icon: 'src/resources/favicon.png'
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['src/resources/stylesheets/living-times.scss'] // @TODO swap out for your stylesheets
      }
    }
  ]
}
