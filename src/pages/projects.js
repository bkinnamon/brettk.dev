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
            icon
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
        <div className="card" key={node.id}>
          <a href={node.frontmatter.link}>
            <h3>
              <i className={`mr-3 fas fa-${node.frontmatter.icon}`}></i>
              {node.frontmatter.title}
            </h3>
          </a>
            <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export default Projects
