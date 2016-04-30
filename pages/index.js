import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

// Styles for highlighted code blocks.
import 'css/zenburn.css'

export default class Sass extends React.Component {
  render () {
    return (
      <div>
        <img src={"http://mtnlandforsale.com/wp-content/uploads/2010/11/front-range.jpg"}></img>
        <h1>
          Luke Vance - Full Stack Developer
        </h1>
        <p>Welcome to my professional website, thanks for visiting.</p>
        <h2>Below are some pages showing different capabilities built-in to Gatsby</h2>
        <h3>Supported file types</h3>
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
        <h3>Supported CSS processors</h3>
        <ul>
          <li>
            <Link to={prefixLink('/postcss/')}>PostCSS</Link>
          </li>
          <li>
            <Link to={prefixLink('/sass/')}>Sass</Link>
          </li>
          <li>
            <Link to={prefixLink('/less/')}>Less</Link>
          </li>
        </ul>
      </div>
    )
  }
}
