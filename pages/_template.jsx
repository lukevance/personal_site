import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
// import { link } from 'gatsby-helpers';
// Bootstrap modules
import { Grid } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import '../css/styles.scss';
// import headshot from '../images/headshot.jpg';

import { rhythm } from 'utils/typography';

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
              <Col xsHidden md={3} id={'leftSide'} className="sidebar">
                <Image
                  src={ prefixLink('/images/headshot.jpg') }
                  rounded={ true }
                  >
                </Image>
                <h2>Luke Vance</h2>
                <h4>Full Stack Developer</h4>
              </Col>
              <Col md={9}>
                <Container
                  style={{
                    maxWidth: 960,
                    paddingTop: 0,
                    padding: `${rhythm(1)} ${rhythm(1/2)}`,
                  }}
                >
                  <Link
                    to={prefixLink('/about/')}
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      marginRight: '1em'
                    }}
                  >
                    About Me
                  </Link>

                  <Link
                    to={prefixLink('/projects/')}
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      marginRight: '1em'
                    }}
                  >
                    Projects
                  </Link>

                  <Link
                    to={prefixLink('/Blog/')}
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      marginRight: '1em'
                    }}
                  >
                    Blog
                  </Link>
                </Container>
                <Container
                  style={{
                    maxWidth: 960,
                    padding: `${rhythm(1)} ${rhythm(1/2)}`,
                    paddingTop: 0,
                    textAlign: 'center'
                  }}
                >
                  {this.props.children}
                </Container>
              </Col>

            </Row>
          </Grid>



      </div>
    )
  },
})
