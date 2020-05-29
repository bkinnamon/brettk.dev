import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "games" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
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
      <section className="my-6">
        <h1>Games</h1>
      </section>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="card" key={node.id}>
          <Link to={node.fields.slug}>
            <h2>
              <i className={`mr-3 fas fa-${node.frontmatter.icon}`}></i>
              {node.frontmatter.title}
            </h2>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.html }}></div>
        </div>
      ))}
    </Layout>
  )
}

export default Projects
