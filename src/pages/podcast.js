import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPodcast = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <h1>Podcast PDPCID</h1>
      {edges.map(episode => {
        const { frontmatter } = episode.node;
        return (
          <div key={frontmatter.path}>
            <div
              className="episodeNumber"
              style={{ padding: 10, fontSize: 32 }}
            >
              {frontmatter.episode} - {frontmatter.title}
              <span style={{ fontSize: 22, padding: 10 }}>
                <a target="_blank" href={frontmatter.link}>
                  🎧 Listen
                </a>
              </span>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query EpisodeQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___path], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            link
            episode
          }
        }
      }
    }
  }
`;
export default IndexPodcast;
