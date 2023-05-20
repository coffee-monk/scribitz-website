module.exports = {
  siteMetadata: {
    title: `Scribitz`,
    titleTemplate: '%s | Scribitz',
    description: `Regulatory Compliant Transcription & Closed-Captioning Services`,
    url: `https://www.scribitz.io`,
    image: './src/images/components/Navbar/scribitz-final-logo.svg',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PTT3DGX',
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: `${__dirname}/src/images/components/ClientsServed/logos/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Inter`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.svg',
      },
    },
  ],
}
