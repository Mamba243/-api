const md5 = require('md5-node');

const { getUerInfo } = require('../service/user.service')
const { userFormateError,
        userAlreadyExited,
        userDoesNotExist,
        invalidPassword,
        userLoginError
} = require('../constant/err.type')

// 验证用户注册是否合法
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  // 合法性
  if (!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body)
    ctx.app.emit('error', userFormateError, ctx)
    return
  }

  await next()
}

// 验证用户是否存在
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body

  if (await getUerInfo({ user_name })) {
    ctx.app.emit('error', userAlreadyExited, ctx)
    return
  }

  await next()
}

// 密码加密
const crpytPassword = async (ctx, next) => {
  const { password } = ctx.request.body
  // const salt = bcrypt.genSaltSync(10)
  // // hash保存的是 密文
  // const hash = bcrypt.hashSync(password, salt)

  ctx.request.body.password = md5(password)

  await next()
}

// 验证登录
const verifyLogin = async (ctx, next) => {
  // 1. 判断用户是否存在(不存在:报错)
  const { user_name, password } = ctx.request.body
  try {
    const res = await getUerInfo({ user_name })
    if (!res) {
      console.error('用户名不存在', { user_name })
      ctx.app.emit('error', userDoesNotExist, ctx)
      return
    }

    // 2. 密码是否匹配(不匹配: 报错)
    if (res.password != md5(password)) {
      ctx.app.emit('error', invalidPassword, ctx)
      return 
    }
  } catch (err) {
    console.error(err)
    return ctx.app.emit('error', userLoginError, ctx)
  }

  await next()

}

module.exports = {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin
}