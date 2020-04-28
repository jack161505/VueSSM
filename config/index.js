
const path=require('path')
const targetUrl='http://127.0.0.1:8080/book'
const host='127.0.0.1'
module.exports={
    dev:{
        //Paths
        assetsSubDirectory:'static',
        assetsPublicPath:'/',
        proxyTable:{
            '/api':{
                target:targetUrl,
                changeOrigin: true,
                pathRewrite:{
                    '^/api':''
                }
            }
        },
        //Various Dev Server settings
        host:'127.0.0.1',
        port:8090,
        autoOpenBrowser:false,
        errorOverflay:true,
        notifyOnErrors:true,
        poll:false,
        useEslint:true,
        showEslintErrorsInOverlay:false,
        devtools:'cheap-module-eval-source-map',
        cacheBusting:true,
        cssSourceMap:true
    },
    build:{
        //Template for index.html
        index:path.resolve(__dirname,'../dist/index.html'),
        //Paths
        assetsRoot:path.resolve(__dirname,'../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: 'vuessm/dist',

        //Source maps
        productionSourceMap:true,
        devtools:'#source-map',
        productionGzip:false,
        productionGzipExtensions:['js','css'],
        bundleAnalyzerReport:process.env.npm_config_report
    }
}
