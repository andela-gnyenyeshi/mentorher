import path from 'path';
import webpack from 'webpack';

export default {
	debug: true,
	devtool: 'inline-source-map',
	entry: [path.resolve(__dirname, 'src/index'), './node_modules/materialize-css/bin/materialize.js', './node_modules/materialize-css/bin/materialize.css', 'webpack-hot-middleware/client?reload=true'],
	target: 'web',
		output: {
			path: path.resolve(__dirname, 'src'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
			loaders: [
				{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
				{test: /\.css$/, loaders: ['style', 'css']},
				{test: /\.(ttf|eof|woff|woff2|eot)$/, loaders: ['url-loader']}
        ]
    }
}
