const regex = /^.*\/([a-zA-Z0-9-]*)$/

export default name => name.match(regex)[1]
