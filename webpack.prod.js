const {merge} = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
   mode: "production",
   module: {
       rules: [
           {
               test: /\.js$/,
               exclude: "/node_modules/",
               use: [
                   {
                       loader: "babel-loader",
                       options: {
                           presets: ["@babel/preset-env"]
                       }
                   }
               ]
           },
           //saya pisah webpack untuk png dan jpg karena saat dibuild jadi satu, ada salah satu file yang error.
           {
             test: /\.(ttf|eot|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
             include: /images/,
             use: [
               {
                 loader: 'file-loader',
                 options: {
                  name: '[name].[ext]',
                  outputPath: 'images/',
                  publicPath: 'images/'
                  }
                },
               {
                 loader: "image-webpack-loader",
                 options: {
                   bypassOnDebug: true,
                   disable: true
                 }
               }
             ]
           },
           //saya pisah webpack untuk png dan jpg karena saat dibuild jadi satu, ada salah satu file yang error.
           {
               test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/gi,
               include: /images/,
               use: [
                 {
                   loader: 'file-loader',
                   options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    publicPath: 'images/'
                    }
                  },
                 {
                   loader: "image-webpack-loader",
                   options: {
                     bypassOnDebug: true,
                     disable: true
                   }
                 }
               ]
             }
       ]
   }
})
