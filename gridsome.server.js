const axios = require('axios')
const companyId = process.env.COMPANY

module.exports = function (api) {
  api.loadSource(async store => {
    const urlBase = 'https://firestore.googleapis.com/v1beta1/projects/recru-to/databases/(default)/documents'
    const company = await axios.get(`${urlBase}/companies/${companyId}`)
    const positions = await axios.get(`${urlBase}/companies/${companyId}/positions`)

    store.addMetaData('domain', company.data.name.match(/^.*\/([a-zA-Z0-9].*)$/)[1])
    store.addMetaData('company', company.data.fields.name.stringValue)
    store.addMetaData('site', company.data.fields.site.stringValue)
    
    const positionsContentType = store.addContentType({
      typeName: 'Positions',
      route: ':slug'
    })

    for (const position of positions.data.documents) {
      positionsContentType.addNode({
        id: position.name.match(/^.*\/([a-zA-Z0-9].*)$/)[1],
        link: position.fields.link.stringValue,
        title: position.fields.title.stringValue,
        description: position.fields.description.stringValue
      })
    }
  })
}