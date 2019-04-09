const extractIdFromName = require("./extractIdFromName")

module.exports = function(company, positions) {
  return {
    id: extractIdFromName(company.name),
    site: company.fields.site.stringValue,
    name: company.fields.name.stringValue,
    createTime: company.createTime,
    updateTime: company.updateTime,
    positions: positions.documents.reduce((accumulator, currentValue) => {
      accumulator[extractIdFromName(currentValue.name)] = {
        id: extractIdFromName(currentValue.name),
        title: currentValue.fields.title.stringValue,
        description: currentValue.fields.description.stringValue,
        link: currentValue.fields.link.stringValue,
        createTime: currentValue.createTime,
        updateTime: currentValue.updateTime,
      }

      return accumulator
    }, {}),
  }
}
