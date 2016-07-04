'use strict';

import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';

// Styles for highlighted code blocks.
import 'css/zenburn.css';

export default class Sass extends React.Component {
  render () {
    return (
      <div>
        <h1 className="bojo">
          Luke Vance - Full Stack Developer
        </h1>
        <p>Welcome to my professional website, thanks for visiting.</p>
        <Jumbotron>
          <h2>You can't depend on your eyes when your imagination is out of focus.</h2>
          <h3> - Mark Twain</h3>
        </Jumbotron>
      </div>
    );
  }
}
