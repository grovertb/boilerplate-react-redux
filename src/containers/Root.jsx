const type =  (process.env.NODE_ENV === 'production' || process.env.PROD) ? 'prod' : 'dev'
module.exports = require(`./Root.${type}`)
