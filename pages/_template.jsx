import React from 'react';
import { Container } from 'react-responsive-grid';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
// Bootstrap modules
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
// import icons from 'simple-line-icons';
import '../css/styles.scss';
// import headshot from '../images/headshot.jpg';

import { rhythm } from 'utils/typography';

// let mainBackground = prefixLink('/images/main-background-bw.jpg');

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    };
  },
  render () {
    return (
      <div>
          <Grid
            fluid={true}
            >
            <Row>
              <Col
                sm={4}
                md={3}
                id={'leftSide'}
                className="sidebar"
                >
                <Image
                  style= {{marginTop: 10}}
                  className="img-rounded"
                  src={ prefixLink('/images/bio_pic.jpg') }
                  rounded={ false }
                  >
                </Image>
                <h2>Luke Vance</h2>
                <h4>Full Stack Developer</h4>
                  <Container
                    className="mainNav"
                    >
                    <Link
                      to={prefixLink('/')}
                    >
                      Home
                    </Link>
                    <Link
                      to={prefixLink('/about/')}
                    >
                      About
                    </Link>

                    <Link
                      to={prefixLink('/projects/')}
                    >
                      Projects
                    </Link>

                    <Link
                      to={prefixLink('/blog/')}
                    >
                      Blog
                    </Link>
                  </Container>
                  <Container className="socialNav">
                    <a href="//github.com/lukevance">
                      <span className="icon-social-github"></span>
                    </a>
                    <a href="//linkedin.com/in/lukevance">
                      <span className="icon-social-linkedin"></span>
                    </a>
                    <a href="//twitter.com/lukealanv">
                      <span className="icon-social-twitter"></span>
                    </a>
                  </Container>
              </Col>
              <Col
                sm={8}
                smOffset={4}
                md={9}
                mdOffset={3}
                >
                <Container
                  style={{
                    maxWidth: 960,
                    padding: `${rhythm(1)} ${rhythm(1/2)}`,
                    paddingTop: 50
                  }}
                >
                <Row>
                  <Col
                    md={12}>
                    {this.props.children}
                  </Col>
                </Row>
                </Container>
              </Col>

            </Row>
          </Grid>
      </div>
    );
  },
});
