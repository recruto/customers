<template>
  <Layout>
    <h1>{{ $page.positions.title }}</h1>
    <div v-html="$page.positions.description"></div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.positions.title
    }
  }
}
</script>

<page-query>
query Positions ($path: String!) {
  positions: positions (path: $path) {
    title
  }
}
</page-query>