import React from 'react'

import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

export default ({ pageContext: { company } }) => {
  let rows = []

  for (const id in company.positions) {
    if (company.positions.hasOwnProperty(id)) {

    rows.push((
      <li>
        <Link to={id}>{company.positions[id].title}</Link>
      </li>
    ))
    }
  }

  return (
    <Layout>
      <SEO title={company.name} keywords={[`gatsby`, `application`, `react`]} />
      <h1>{company.name}</h1>
      <ul>
        {rows}
      </ul>
    </Layout>
  )
}

