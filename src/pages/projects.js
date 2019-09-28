import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "projects" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            link
          }
          excerpt
        }
      }
    }
  }
`

const Projects = ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <h2>Projects</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <a href={node.frontmatter.link} key={node.id}>
          <div className="card">
            <h3>{node.frontmatter.title}</h3>
            <p>{node.excerpt}</p>
          </div>
        </a>
      ))}
    </Layout>
  )
}

export default Projects
