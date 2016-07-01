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
        <Button bsStyle="default" bsSize="large">Hey</Button>
        <ul>
          <li>
            <Link to={prefixLink('/markdown/')}>Markdown</Link>
          </li>
          <li>
            <Link to={prefixLink('/react/')}>JSX (React components)</Link>
          </li>
          <li>
            <Link to={prefixLink('/html/')}>HTML</Link>
          </li>
          <li>
            <Link to={prefixLink('/json/')}>JSON</Link>
          </li>
          <li>
            <Link to={prefixLink('/about/')}>About</Link>
          </li>
        </ul>
      </div>
    )
  }
}
