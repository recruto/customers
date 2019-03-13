<template>
  <Layout>
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1>Vagas!</h1>

    <ul>
      <li v-for="position in $page.positions.edges">
        <a :href="position.node.path">{{ position.node.title }}</a>
      </li>
    </ul>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<page-query>
query Positions {
  positions: allPositions {
    edges {
      node {
        title
        path
      }
    }
  }
}
</page-query>