import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/styles.scss';

import { rhythm } from 'utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(1/2)}`,
            }}
          >
            <Link
              to={prefixLink('/')}
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '1em'
              }}
            >
              Home
            </Link>

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
      </div>
    )
  },
})
