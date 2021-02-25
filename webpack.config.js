const federations = require('test-react-scripts-cond/federations')

const isDevelopment = process.env.NODE_ENV !== 'production'


module.exports = federations({
  name: 'condLayouts',
  remotes: {
    condRootMf: 'condRootMf@http://localhost:3001/remoteEntry.js',
    condAuthPages: 'condAuthPages@http://localhost:3002/remoteEntry.js',
    condFormElements: 'condFormElements@http://localhost:3004/remoteEntry.js',
  },
  exposes: {
    './AuthLayout': './src/app/layouts/authLayout',
  },
})
