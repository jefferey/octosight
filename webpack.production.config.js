var webpack = require("webpack");

module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist/',
		filename: 'index.js'
	},
    // eslint: {
    //     failOnWarning: false,
    //     failOnError: false
    // },
	module: {
        // preLoaders: [
        //   {
        //     test: /\.jsx?$/,
        //     exclude: /node_modules/,
        //     loader: 'eslint'
        //   }
        // ],
    	loaders: [
    		{
    			test: /\.js$/,
    			exclude: /node_modules/,
    			loader: 'babel',
    			query: {
    				presets: ['es2015', 'react']
    			}
    		},
    		{
    			test: /\.scss$/,
    			exclude: /node_modules/,
    			loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap'],
    		},
    		{
    			test: /\.css$/,
    			loader: 'style!css',
    		},
            {
                test: /\.md$/,
                loader: 'html!markdown'
            },
            {
                test: /\.(png|gif|jpg|jpeg|svg)$/,
                loader: 'file'
            },
            {
            	test: /\.(eot|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?$/,
            	loader: 'file'
            }
    	]
	},
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}
