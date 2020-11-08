import React from "react"
import { graphql, Link } from 'gatsby'

import PropTypes from 'prop-types'
import Img from "gatsby-image/withIEPolyfill"

import Layout from '../components/layout'

const About = ({ data }) => {
  const { allFile: { nodes } } = data

  return (
    <Layout>
      <div className="about-content-container">
        <h1>About sketches</h1>
        <p>p5js / processing (deprecated) </p>
        <p>lorum</p>
        <p>R22</p>
        <p><strong>nerative  the work</p>
        <h1>About This Site</h1>
        <p>eate and deploy.</p>
        <h1>About Me</h1>
        { data && nodes && <Img className="round" fluid={ nodes[0].childImageSharp.fluid } /> }
        <p>some bio here maybe</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/static/images/about/"}}) {
      nodes {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }  
`

About.propTypes = {
  data: PropTypes.object
}

export default About
