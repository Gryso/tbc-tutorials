import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../images/icons/favicon.png"

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const seo = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
  }

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
    </Helmet>
  )
}

export default SEO
