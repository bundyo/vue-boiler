var path = require('path');
var webpack = require('webpack');
var config = require('../config');
var projectRoot = path.resolve(__dirname, '../');

module.exports = {
    // Note: entry points are added by environment-specific configs.

    output: {
        path: config.build.outputRoot,
        filename: '[name].js'
    },
    // Use target 'node' so that __dirname works properly. We then need
    // to manually specify the electron modules in the ExternalsPlugin
    // since we're not using target 'electron'.
    target: 'node',
    node: {
        __filename: false,
        __dirname: false
    },
    resolve: {
        extensions: ['', '.js', '.css', '.html'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            app: path.resolve(__dirname, '../app'),
            vue: 'vue/dist/vue.js'
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    vue: {
        html: {
            test: /\.html$/
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: projectRoot,
                exclude: /vue-devtools|node_modules/
            }
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.html$/,
                loader: 'vue-html-loader'
            },
            {
                test: /\.css$/,
                exclude: /\.useable\.css$/,
                loader: "vue-style-loader!css-loader"
            },
            {
                test: /\.useable\.css$/,
                loader: "style/useable!css"
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: path.join(config.build.assetsSubDirectory, '[name].[ext]')
                }
            }
        ]
    },
    plugins: [
        new webpack.ExternalsPlugin('commonjs2', [
            'desktop-capturer',
            'electron',
            'ipc',
            'ipc-renderer',
            'native-image',
            'remote',
            'web-frame',
            'clipboard',
            'crash-reporter',
            'screen',
            'shell'
        ])
    ],
    eslint: {
        formatter: require('eslint-friendly-formatter')
    }
};
