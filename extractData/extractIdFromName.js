const regex = /^.*\/([a-zA-Z0-9-]*)$/

module.exports = name => name.match(regex)[1]
