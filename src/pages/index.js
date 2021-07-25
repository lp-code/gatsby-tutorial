// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home page">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <p>
        <StaticImage
            alt="Tokyo tower"
            src="https://images.pexels.com/photos/6839063/pexels-photo-6839063.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        />
      </p>
      <p>
        <StaticImage
            alt="Japanese tram"
            src="../images/japan2.jpg"
        />
      </p>

    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
