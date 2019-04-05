import React from 'react';
import { mapValues } from 'lodash';

import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

export default ({ pageContext: { company, positions } }) => {
  let rows = []
  positions.forEach(position => {
    let fields = mapValues(position.fields, o => o.stringValue)
    rows.push((
      <li>
        <Link to={position.name.match(/^.*\/([a-zA-Z0-9-]*)$/)[1]}>{fields.title}</Link>
      </li>
    ))
  })

  return (
    <Layout>
      <SEO title={company.name} keywords={[`gatsby`, `application`, `react`]} />
      <h1>{company.name}</h1>
      <ul>
        {rows}
      </ul>    
    </Layout>
  )
};

