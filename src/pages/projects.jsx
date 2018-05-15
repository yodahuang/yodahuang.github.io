import React from 'react';
import Helmet from 'react-helmet';
import Project from '../components/Project';
import Sidebar from '../components/Sidebar';

class IndexRoute extends React.Component {
  render() {
    const items = [];
    const { title } = this.props.data.site.siteMetadata;
    const projects = this.props.data.allMarkdownRemark.edges;
    projects.forEach((post) => {
      items.push(<Project data={post} key={post.node.fields.slug} />);
    });

    return (
      <div>
        <Helmet>
          <title>{`All Projects - ${title}`}</title>
        </Helmet>
        <Sidebar siteMetadata={this.props.data.site.siteMetadata} />
        <div className="content">
          <div className="content__inner">
            {items}
          </div>
        </div>
      </div>
    );
  }
}

export default IndexRoute;

export const pageQuery = graphql`
  query ProjectQuery {
    site {
      siteMetadata {
        ...sidebarFragment
      }
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { layout: { eq: "project" } } }
      ){
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            previewStatic {
                childImageSharp {
                    sizes {
                        ...GatsbyImageSharpSizes_withWebp_tracedSVG
                    }
                }
            }
            previewAnimated {
              childImageSharp {
                original {
                  src
                }
              }
            }
            previewYoutube
            description
          }
        }
      }
    }
  }
`;
