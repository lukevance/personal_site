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
                      marginTop: '1rem'
                    }}
                  >
                    <Col
                      md={4}
                    >
                      <h4>
                        Located in:
                      </h4>
                    </Col>
                    <Col
                      md={8}
                    >
                      <Panel>
                        <h3
                          className="currently"
                        >
                          <a
                            href={"//google.com"}
                          >
                            Fort Collins, Colorado
                          </a>
                        </h3>
                      </Panel>
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
                      <h4>
                        Building:
                      </h4>
                    </Col>
                    <Col
                      md={8}
                    >
                      <Panel>
                        <h3 className="currently">
                          <a
                            href={"//github.com/lukevance/broce"}
                          >
                            Broce-Waldon Parts
                          </a>
                        </h3>
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
                      <h4>
                        Learning:
                      </h4>
                    </Col>
                    <Col
                      md={8}
                    >
                      <Panel>
                        <h3 className="currently">
                          <a href={"//redux.js.org/docs/introduction/"}>
                            Redux
                          </a>
                        </h3>
                        <p>
                          A predictable state container for JavaScript apps. (Commonly used with React)
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
                      <h4>
                        Reading:
                      </h4>
                    </Col>
                    <Col
                      md={8}
                    >
                      <Panel>
                        <h3 className="currently">
                          <a href="//margaretatwood.ca/maddaddam-trilogy/">
                            Maddaddam
                          </a>
                        </h3>
                        <p>
                          The final entry in the Maddaddam Trilogy by Margaret Atwood.
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
                      <h4>
                        Training For:
                      </h4>
                    </Col>
                    <Col
                      md={8}
                    >
                      <Panel>
                        <h3 className="currently">
                          <a href="http://www.blueskymarathon.com/">
                            The Blue Sky Trail Marathon
                          </a>
                        </h3>
                      </Panel>
                    </Col>
                  </Row>


            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

// <Alert bsStyle="info">
//   Check out some of my recent <Link to={prefixLink('/projects/')}><strong>projects</strong></Link>.
// </Alert>
