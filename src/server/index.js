import express from 'express'
// import mongoose from 'mongoose'
// mongoose.connect('mongodb://localhost/bossyuan') //连接本地数据库
import db from './db.js'
import router from './router/index.js';
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
// import webpack from 'webpack'
// import webpackDevMiddleware from 'webpack-dev-middleware'
// import webpackHotMiddleware from 'webpack-hot-middleware'
import {fileURLToPath} from 'url';

import history from 'connect-history-api-fallback';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// import * as config from '../../webpack.config'

const app = express();


app.use(express.query());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// 设置 浏览器标签的图标
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.get("/", (req, res) => res.redirect("/home.html"));
router(app);
app.use(history()); //使用history 最好放到pubic静态目录前
// 静态页面管理
app.use(express.static(path.join(__dirname, 'dist')))



// const compiler = webpack(config)
//
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
//   stats: { colors: true }
// }))
//
// app.use(webpackHotMiddleware(compiler))


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
// will print stacktrace
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: err
  })

})

// app.listen(5050)
const port = process.env.PORT || 5050;
app.listen(port);

export default app
