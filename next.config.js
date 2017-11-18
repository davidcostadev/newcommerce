const path = require('path')
const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	distDir: '.build',
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)$/,
        loader: 'emit-file-loader',
        options: {
					name: path.join('dist', '[path][name].[ext]')
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract([
					{
						loader: 'css-loader',
						options: {
							sourceMap: false,
              minimize: true
						}
					},
					'postcss-loader',
          {
						loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          },
        ])
      },
    )
		config.plugins.push(
			new ExtractTextPlugin({
				filename: path.join('static', 'main.css')
			}),
		)
    return config
  }
}
