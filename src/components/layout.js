import React from "react"
import { Link } from "gatsby"
import CookieConsent from "react-cookie-consent"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          Work from home jobs © {new Date().getFullYear()}
          <hr />
          Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby </a>
          and free images downloaded from
          <a href="https://www.canva.com"> Canva </a> ,
          <a href="https://www.unsplash.com"> Unsplash </a> and
          <a href="https://www.pexels.com"> Pexels. </a>
        </footer>
        <CookieConsent>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </div>
    )
  }
}

export default Layout
