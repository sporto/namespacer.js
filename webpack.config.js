var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry:   __dirname + '/src/namespacer.js',
	output: {
		path:          __dirname + '/dist',
		filename:      'namespacer.js',
		library:       'Namespacer',
		libraryTarget: 'umd'
	},
	externals: [
		// Every non-relative module is external
		/^[a-z\-0-9]+$/
	],
	module: {
		// loaders: [
		// 	{
		// 		test: /\.js$/,
		// 		exclude: /node_modules/,
		// 		loader: 'babel-loader'
		// 	}
		// ]
	},
	resolve: {
		alias: {
		}
	},
	plugins: []
};


