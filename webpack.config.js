const path = require('path');
// Extract sass from sass files.
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Build html files.
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Hash built files for caching.
const WebpackMd5Hash = require('webpack-md5-hash');
// Clean the dist folder on build.
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // The webpack input main ts file
    entry: { main: "./src/client/index.tsx" },
    // The hashed transpiled Javascript output
    output: {
        filename: '[name].[chunkhash].js',
        path: __dirname + "/dist"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            //All '.scss' files will be handeled by sass-loader
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                  {
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                  })
              }
        ]
    },
    devServer: {
        port: 5000,
        open: true,
        proxy: {
        "/products": "http://localhost:5001"
        }
    },
    plugins: [ 
        new CleanWebpackPlugin('dist', {} ),
        new ExtractTextPlugin({filename: 'style.[hash].css', disable: false, allChunks: true}),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/client/index.html',
            filename: 'index.html'
          }),
        new WebpackMd5Hash()
    ],
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    //externals: {
    //    "react": "React",
    //    "react-dom": "ReactDOM"
    //},
};