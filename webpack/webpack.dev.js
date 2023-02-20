const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, '..', 'src'),
        port: 8000,
        open: true,
        hot: true,
    },
};
