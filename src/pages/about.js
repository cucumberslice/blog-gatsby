import React from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of {data.site.siteMetadata.title} of food.
        <span
        css={css`
          color: #bbb;
        `}
      >
        - {data.site.buildTime}
      </span>
      </p>

    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
      buildTime(fromNow: true)
    }
  }
`
