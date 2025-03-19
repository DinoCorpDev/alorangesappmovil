const mix = require("laravel-mix");
const path = require('path');

mix.setResourceRoot(process.env.MIX_ASSET_URL);
mix.config.fileLoaderDirs.fonts = "web-assets/fonts";
mix.webpackConfig({
    output: {
        chunkFilename: "web-assets/js/[name].js?id=[chunkhash]",
        publicPath: "/public/"
    },
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "resources/js/components"),
            "@pages": path.resolve(__dirname, "resources/js/pages")
        }
    }
});
mix.sass("resources/sass/app.scss", "public/web-assets/css")
    .js("resources/js/app.js", "public/web-assets/js")
    .version();
