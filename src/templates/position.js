import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext: { position } }) => (
  <Layout>
    <SEO title={position.title} keywords={[`gatsby`, `application`, `react`]} />
    <h1>{position.title}</h1>
    <p>{position.description}</p>
    <a href={position.link}>Quero!</a>
  </Layout>
);