import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "posts" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date
              title
            }
            excerpt
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <section className="my-6">
        <h1>{data.site.siteMetadata.author}</h1>
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
