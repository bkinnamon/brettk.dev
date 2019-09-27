import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from "../components/seo"

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: "projects" }}} ) {
      edges {
        node {
          frontmatter {
            title
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
        <a href="#">
          <h3>{node.frontmatter.title}</h3>
          <p>{node.excerpt}</p>
        </a>
      ))}
    </Layout>
  )
}

export default Projects
    
