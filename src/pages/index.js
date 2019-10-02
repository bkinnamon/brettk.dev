import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "posts" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <section className="my-6">
        <h1>Brett Kinnamon</h1>
        <p className="subtitle">Web developer</p>
      </section>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id}>
          <Link to={node.fields.slug} className="hover:text-gray-500">
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}

export default IndexPage
