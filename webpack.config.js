const federations = require('test-react-scripts-cond/federations')

const isDevelopment = process.env.NODE_ENV !== 'production'


module.exports = federations({
  exposes: {
    './AuthLayout': './src/app/layouts/authLayout',
  },
})
