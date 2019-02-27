const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: {
        signature: './CreateSignature.js',
        // document:'./GenerateDocument.js'
    }

    , output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
    , module: {
        rules: [
            {// first rule
                test: /\.js$/, // check for files that end with .js
                exclude: /node_modules/, //dont check here
                use: { loader: 'babel-loader' }// use these to process matched files
            }
        ]
    }
    // ,plugins:{

    // }
    , mode: 'development'
    , devtool: 'inline-source-map'
    , devServer: {
        host: 'localhost',
        port: 3000,
        hot: true
    }
}