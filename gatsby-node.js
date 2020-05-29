const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // Create post slugs
  if (
    node.internal.type === `MarkdownRemark` &&
    node.frontmatter.category === "posts"
  ) {
    const fileNode = getNode(node.parent)
    slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }

  // Create game slugs
  if (
    node.internal.type === `MarkdownRemark` &&
    node.frontmatter.category === "games"
  ) {
    const fileNode = getNode(node.parent)
    slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await createPostPages(graphql, createPage)
  await createGamePages(graphql, createPage)
}

const createPostPages = async (graphql, createPage) => {
  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "posts" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

const createGamePages = async (graphql, createPage) => {
  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "games" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/game.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
