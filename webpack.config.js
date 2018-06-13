const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        // js: './src/pages/js/app.js',
        index: './src/pages/index/index.js',
        test: './src/pages/test/test.js'
    },
    output: {
        filename: './pages/[name]/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "production",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        host:'0.0.0.0',
        port:8080,
        inline:true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: './pages/index/index.html',
            title: 'index',
            template: './src/pages/index/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: './pages/test/test.html',
            title: 'test',
            template: './src/pages/test/test.html',
            chunks: ['test']
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.ProvidePlugin({
        //     Vue:'vue'
        // })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: { alias: { 'vue$': 'vue/dist/vue.common.js' } }
};