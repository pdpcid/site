import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import './normalize.css'
import './style.min.css'
import './styles.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Product & Development Podcast Community (PDPC) adalah komunitas yang terdiri dari para penyiar podcast yang murni membahas seputar produk dan pengembangannya' },
            { name: 'keywords', content: 'komunitas, developer, podcast' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <main className="wrapper">
          <Header siteTitle={data.site.siteMetadata.title} />

          <section className="content">{children}</section>
          <div className="footer">
            <section className="container">© 2018 pdpcid</section>
          </div>
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
