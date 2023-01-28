const fs = require('fs')
const Router = require('koa-router')
const router = new Router

// 通过fs模块 实现动态加载路由
fs.readdirSync(__dirname).forEach(file=>{
    if(file!=='index.js'){
        let r = require('./'+file)
        router.use(r.routes())
    }
 })

module.exports = router