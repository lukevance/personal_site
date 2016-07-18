'use strict';

import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

// Styles for highlighted code blocks.
import 'css/zenburn.css';

export default class Sass extends React.Component {
  render () {
    return (
      <div>
        <Grid
          fluid={true}
        >
          <Row>
            <Col
              md={10}
              mdOffset={1}
            >
              <Jumbotron>
                <p
                  style={{
                    fontSize: "1.25rem"
                  }}
                >
                  Hi. I am a failed entrepreneur turned web developer. I still love helping people start projects and might even try it again myself someday. For now I am in love with building web apps and APIs to solve complex problems.
                </p>
              </Jumbotron>
                  <Row>
                    <Col
                      md={12}
                    >
                    <h2>
                      Currently I am...
                    </h2>
                    </Col>
                  </Row>

                  <Row
                    style={{
                      marginTop: '2rem'
                    }}
                  >
                    <Col
                      md={4}
                    >
                      Building:
                    </Col>
                    <Col
                      md={8}
                    >
                      <Panel>
                        <p>
                          A parts ordering system for use by small businesses based on hardware and equipment manufacturing.
                        </p>
                      </Panel>
                    </Col>
                  </Row>

                  <Row
                    style={{
                      marginTop: '1rem'
                    }}
                  >
                    <Col
                      md={4}
                    >
                      Learning:
                    </Col>
                    <Col
                      md={8}
                    >
                      <Panel>
                        <p>
                          Redux
                        </p>
                      </Panel>
                    </Col>
                  </Row>

                  <Row
                    style={{
                      marginTop: '1rem'
                    }}
                  >
                    <Col
                      md={4}
                    >
                      Reading:
                    </Col>
                    <Col
                      md={8}
                    >
                      <Panel>
                        <p>
                          The Maddaddam Trilogy by Margaret Atwood
                        </p>
                      </Panel>
                    </Col>
                  </Row>

                  <Row
                    style={{
                      marginTop: '1rem'
                    }}
                  >
                    <Col
                      md={4}
                    >
                      Training For:
                    </Col>
                    <Col
                      md={8}
                    >
                      <Panel>
                        <p>
                          The Blue Sky Trail Marathon
                        </p>
                      </Panel>
                    </Col>
                  </Row>

              <Alert bsStyle="info">
                Check out some of my recent <Link to={prefixLink('/projects/')}><strong>projects</strong></Link>.
              </Alert>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
