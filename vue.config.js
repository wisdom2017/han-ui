path=require("path");
module.exports = {
    pages:{
        index:{
            entry:'examples/main.js',
            template:'public/index.html',
            filename:'index.html'
        },
        about:{
            entry:'examples/main.js',
            template:'public/index.html',
            //output:'bound[hash].js',
            filename:'about[hash].html'
        }
    } ,
    //扩展 webpack配置，使用packages 加入编译
    chainWebpack:config =>{
        config.module.rule('js')
        .include.add(path.resolve(__dirname,'packages')).end()
        .use('babel')
        .loader('babel-loader')
        .tap(options =>{
            //修改它的选项
            return options
        })
    }

    // css: {
    //     loaderOptions: {
    //         sass: {
    //             prependData: `@import "./src/assets/style/base";`,
    //         },
    //     },
    // },
}