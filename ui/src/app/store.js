switch (process.env.NODE_ENV) {
    case 'production':
        module.exports = require('./store.prod')
        break
        default:
}