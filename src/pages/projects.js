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
          html
        }
      }
    }
  }
`

const Projects = ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Projects</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="card" key={node.id}>
          <a href={node.frontmatter.link}>
            <h2>
              <i className={`mr-3 fas fa-${node.frontmatter.icon}`}></i>
              {node.frontmatter.title}
            </h2>
          </a>
          <div dangerouslySetInnerHTML={{ __html: node.html }}></div>
        </div>
      ))}
    </Layout>
  )
}

export default Projects
