var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var babelPolyfill = require('babel-polyfill');
module.exports = {
    entry: [
	'babel-polyfill',
        "./frontend/js/index.jsx"
    ],
    output: {
        path: __dirname + '/static/bundles/',
        filename: "bundle.js",
        publicPath: '/static/bundles/',
    },
    module: {
        loaders: [
	    { test: /\.(woff)\?v=2\.0\.0$/, loader: 'url-loader',
	      options: {
	          limit: 10,
	          mimetype: 'application/font-woff'
	      }},
            { test: /\.jsx$/, loader: 'babel', query: {presets: ['es2015', 'stage-0', 'react']}, exclude: /node_modules/ },
            { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.css$/, loader: "style-loader!css-loader"},
            { test: /\.scss$/, loaders: ["style", "css", "sass"]},
	    { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=1' },
	    { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new BundleTracker({filename: './webpack-stats.json'}),
    ]
};
