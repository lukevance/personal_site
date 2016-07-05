import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    };
  },
  render () {
    return (
      <Row>
        <Col
          md={2}
          mdOffset={10}>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
          </ul>
        </Col>
      </Row>
    );
  }
});
