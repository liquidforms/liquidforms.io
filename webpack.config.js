// webpack.config.js
var Encore = require('@symfony/webpack-encore');

var sculpin_ouput_dir = Encore.isProduction() ? 'output_prod' : 'output_dev';

Encore
    .setOutputPath(sculpin_ouput_dir + '/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()

    // will output as web/build/global.css
    .addStyleEntry('screen', './sass/screen.scss')

    // allow sass/scss files to be processed
    .enableSassLoader()

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    .enableSourceMaps(!Encore.isProduction())

    .enableSassLoader(function(sassOptions) {}, {
        resolveUrlLoader: false
    })

    // create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();
