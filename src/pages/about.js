// Step 1: Import your component
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
        <p>Hi there -- this is my site! It also links back to <Link to="/">home</Link>.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage
