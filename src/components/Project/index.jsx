import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './style.scss';

class Post extends React.Component {
  render() {
    const { title, description, preview } = this.props.data.node.frontmatter;
    const { slug } = this.props.data.node.fields;
    const previewSizes = preview.childImageSharp.sizes;

    return (
      <div className="project">
        <h2 className="project__title">
          <Link className="post__title-link" to={slug}>{title}</Link>
        </h2>
        <Grid fluid>
          <Row>
            <Col xs={12} md={6}>
              <Img sizes={previewSizes} />
            </Col>
            <Col xs={12} md={6}>
              <p className="project__description">{description}</p>
              <Link className="project__readmore" to={slug}>Read</Link>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Post;
