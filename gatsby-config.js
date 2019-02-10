module.exports = {
  siteMetadata: {
    title: 'Product and Development Podcast Community',
    description:
      'Product & Development Podcast Community (PDPC) adalah komunitas yang terdiri dari para penyiar podcast yang murni membahas seputar produk dan pengembangannya. Apakah itu dari sisi manajerial proyek, perancangan arsitektur (backend, teknologi cloud), perancangan visualisasi (UI/UX), platform produk (Mobile / Desktop / Web), maupun teknologi yang dipakai secara spesifik. Mereka sangat berhasrat dengan topik ini sehingga tidak membahas hal-hal lain di luar itu secara kuantitatif (jumlah episode) maupun kualitatif (secara dalam).'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'pdpcid',
        short_name: 'starter',
        start_url: '/',
        background_color: '#fefefe',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `episodes`,
        path: `${__dirname}/src/episodes`
      }
    }
  ]
};
