const Router = require('koa-router')

// 路由前缀 prefix
const router = new Router({prefix:'/users'})
const {register,login} = require('../ controller/user.controller')

router.post('/register',register)
router.post('/login',login)

module.exports = router