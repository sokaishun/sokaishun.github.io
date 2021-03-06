import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";
// Utilities
import kebabCase from "lodash/kebabCase";

// Components
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import { FaTags } from "react-icons/fa";
const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <div>
    <Layout location={location}>
      <Helmet title={title} />
      <div>
        <h1 className="flex flex-row justify-start items-center  space-x-2">
          <FaTags />
          <div>Tags</div>
        </h1>
        <ul>
          {group.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  </div>
);

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
