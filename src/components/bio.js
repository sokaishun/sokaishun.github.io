/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import ReactTooltip from 'react-tooltip'
import { FiGithub,FiLinkedin } from "react-icons/fi";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <div>
      <a
        href="/about"
        className="flex items-center 
    bg-white rounded-lg border shadow-md md:flex-row 
    hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
    dark:hover:bg-gray-700"
      >
        <div className="img-container">
          <div className="flex-none img-circle" />
        </div>

        <div className="flex flex-col justify-between pl-5">
          <div>
            <h5 className="font-bold">
              {author?.name || null}
              {` `}
            </h5>
            <div className="flex flex-row ">
              <a data-tip="Github" href="https://github.com/sokaishun">
                <FiGithub size={20}/>
                <ReactTooltip effect="float" type="info" place="top" />
              </a>
              <a data-tip="linkedin" 
                className="pl-3"
                href="https://www.linkedin.com/in/songhaijun"
              >
                <FiLinkedin size={20}/>
                <ReactTooltip effect="float" type="info" place="top" />
              </a>
            </div>
          </div>
          <p className="mt-3 mb-0">
            {author?.summary || null}
            {` `}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Bio;
