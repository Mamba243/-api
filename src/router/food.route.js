const Router = require('koa-router')

// 路由前缀 prefix
const router = new Router({ prefix: '/food' })
// const { userValidator,
//         verifyUser,
//         crpytPassword,
//         verifyLogin
//       } = require('../middleware/user.middleware')
// const {auth} = require('../middleware/auth.middleware')
// const { register,login,changePassword } = require('../ controller/user.controller')

// router.post('/register', userValidator, verifyUser, crpytPassword, register)
// router.post('/login', userValidator,verifyLogin,login)
// router.patch('/', auth,crpytPassword,changePassword)

module.exports = router