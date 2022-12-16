const Router = require('koa-router')

// 路由前缀 prefix
const router = new Router({prefix:'/users'})
const {userValidator,verifyUser} = require('../middleware/user.middleware')
const {register,login} = require('../ controller/user.controller')

router.post('/register',userValidator,verifyUser, register)
router.post('/login',login)

module.exports = router