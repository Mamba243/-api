// 项目入口文件
const Koa = require('koa')
const app = new Koa()

// app.use使用中间件  ctx 上下文在上下文点body中插入文字
app.use((ctx,next)=>{
    ctx.body = 'hello api'
})

// 监听4000端口
app.listen(4000,()=>{
    console.log('serve is running on http://localhost:4000');
})