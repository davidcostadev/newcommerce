const webpack = require('webpack')
const eslintFriendlyFormatter = require('eslint-friendly-formatter')

require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
})

module.exports = {
  webpack: (config, { dev }) => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
      return acc
    }, {})

    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
          formatter: eslintFriendlyFormatter,
        },
      })
    }

    config.plugins.push(new webpack.DefinePlugin(env))

    return config
  },
}
