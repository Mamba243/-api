// 项目入口文件
const Koa = require('koa')
const {koaBody} = require('koa-body')

const errHandler = require('./errHandler')


const userRouter = require('../router/user.route')

const app = new Koa()
app.use(koaBody());

// app.use使用中间件 接收的必须是一个函数 所以要调用routes()函数
// 注册路由
app.use(userRouter.routes())

app.on('error',errHandler)
module.exports = app