const _ = require("lodash")
const data  = {
  company: require("./data/company.json"),
  positions:  require("./data/positions.json")
}

exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/company.js"),
    context: { 
      company: _.mapValues(data.company.fields, o => o.stringValue),
      positions: data.positions.documents
    },
  })

  data.positions.documents.forEach(position => {
    createPage({
      path: `/${position.name.match(/^.*\/([a-zA-Z0-9-]*)$/)[1]}/`,
      component: require.resolve("./src/templates/position.js"),
      context: { 
        position: _.mapValues(position.fields, o => o.stringValue)
      },
    })
  })
}
