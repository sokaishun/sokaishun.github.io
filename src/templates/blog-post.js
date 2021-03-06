import * as React from "react";
import { Link, graphql } from "gatsby";
import { FaTag } from "react-icons/fa";
import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
// Utilities
import kebabCase from "lodash/kebabCase";
import Image from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;
  const thumbnail = post.frontmatter.thumbnail?.childImageSharp.fluid;
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <div className="pb-5">
            <Image
              className="object-none shadow rounded max-w-full h-auto align-middle border-none"
              fluid={thumbnail}
              alt="Thumbnail画像"
            />
          </div>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          {post.frontmatter.tags ? (
            <div className=" flex flex-row">
              <div className="tags-container">
                <ul className="taglist">
                  {post.frontmatter.tags.map((tag) => (
                    <li
                      key={tag + `tag`}
                      className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-1.5 py-1 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
                    >
                      <FaTag className="inline-flex mr-1 w-3 h-3 fill-blue-500" />
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </header>
        <MDXRenderer frontmatter={post.frontmatter} itemProp="articleBody">{post.body}</MDXRenderer>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        images {
          childImageSharp {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
