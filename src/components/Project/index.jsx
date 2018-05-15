import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { Grid, Row, Col } from 'react-flexbox-grid';
import YouTube from 'react-youtube';
import './style.scss';

class Post extends React.Component {
  render() {
    const {
      title, description, previewStatic, previewAnimated, previewYoutube
    } = this.props.data.node.frontmatter;
    const { slug } = this.props.data.node.fields;

    let Preview;
    if (previewStatic !== null) {
      const previewSizes = previewStatic.childImageSharp.sizes;
      Preview = (<Img sizes={previewSizes} />);
    } else if (previewAnimated !== null) {
      Preview = (<img src={previewAnimated.childImageSharp.original.src} alt="" />);
    } else {
      console.assert(previewYoutube !== null);
      Preview = (
        <div className="project__playerContainer">
          <YouTube videoId={previewYoutube} className="project__player" />
        </div>
      );
    }

    return (
      <div className="project">
        <h2 className="project__title">
          <Link className="post__title-link" to={slug}>{title}</Link>
        </h2>
        <Grid fluid>
          <Row>
            <Col xs={12} md={6}>
              {Preview}
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
