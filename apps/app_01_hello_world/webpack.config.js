var path = require('path');

module.exports = {
     entry: {
        'app': [     
            path.resolve('app/app')
        ]        

    },
    output: {
        path: path.resolve('build'),
        filename: '[name].bundle.js',
        pathinfo: false // show module paths in the bundle, handy for debugging
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'awesome-typescript',
            query: {
                'doTypeCheck': true
            },
            include: path.resolve('app'),
            exclude: /node_modules/
        }],
        noParse: [
           
        ]
    },     
    resolve: {
        alias: {      
        },
        extensions: ["", ".js", ".ts"]
    },
    plugins: [
    ]
};
