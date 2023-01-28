// 项目入口文件
const Koa = require('koa')
const {koaBody} = require('koa-body')

const errHandler = require('./errHandler')

const router = require('../router/index')

const userRouter = require('../router/user.route')

const swagger = require('../config/swagger')
const { koaSwagger } = require('koa2-swagger-ui')

const app = new Koa()
app.use(koaBody());

// app.use使用中间件 接收的必须是一个函数 所以要调用routes()函数
// 注册路由
app.use(router.routes(),router.allowedMethods())

app.use(swagger.routes(), swagger.allowedMethods())
app.use(koaSwagger({
  routePrefix: '/swagger', // api文档访问地址
  swaggerOptions: {
    url: '/swagger.json', // example path to json
  }
}))

app.on('error',errHandler)
module.exports = app