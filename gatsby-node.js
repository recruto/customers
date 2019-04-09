const company = require("./tmp/company.json")
const positions = require("./tmp/positions.json")
const extractData = require("./extractData")

const data = extractData(company, positions)

exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/company.js"),
    context: {
      company: data,
    },
  })

  for (const id in data.positions) {
    if (data.positions.hasOwnProperty(id)) {
      createPage({
        path: `/${id}/`,
        component: require.resolve("./src/templates/position.js"),
        context: {
          company: data,
          position: data.positions[id],
        },
      })
    }
  }
}
