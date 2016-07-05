'use strict';

import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

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
          <Jumbotron>
            <h2
              style={{
                textAlign: 'center'
              }}
            >"You can't depend on your eyes when your imagination is out of focus."</h2>
            <h2
              style={{
                textAlign: 'right'
              }}
            > - Mark Twain</h2>
          </Jumbotron>
          </Row>
          <Row>
            <Col
              md={8}
              mdOffset={2}
            >
              <p
                style={{
                  fontSize: "1.25rem"
                }}
              >
                Hi. I am a failed entrepreneur turned web developer. I still love helping people start projects and might even try it again myself someday. For now I am in love with building web apps and APIs to solve complex problems.
              </p>
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
