// 项目入口文件
const Koa = require('koa')

const userRouter = require('../router/user.route')

const app = new Koa()

// app.use使用中间件 接收的必须是一个函数 所以要调用routes()函数
// 注册路由
app.use(userRouter.routes())

module.exports = app