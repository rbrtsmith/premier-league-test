module.exports = {
    entry: {
        javascript: __dirname + "/app/app.js",
        html: __dirname + "/app/index.html",
    },
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        preLoaders: [ 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            }
        ]
    }
};