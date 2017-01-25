module.exports = {
  devtool: 'eval-source-map',
	entry: './src/main.js',
	output: {
		path: './',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
		port: 3333,
        historyApiFallback: true
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
	}
}
