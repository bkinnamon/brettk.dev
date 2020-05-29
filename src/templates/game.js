import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  const game = data.markdownRemark

  return (
    <Layout>
      <article>
        <div className="mb-6">
          <h1>{game.frontmatter.title}</h1>
        </div>

        <div className="article__body">
          <iframe
            src={`/gameScripts/${game.frontmatter.path}/index.html`}
            title={game.frontmatter.title}
            width={game.frontmatter.width}
            height={game.frontmatter.height}
          />
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        path
        width
        height
      }
    }
  }
`
