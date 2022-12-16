const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

// 创建模型(Model calorie_user -> 表 calorie_users)
const User = seq.define('calorie_user', {
  // id 会被sequelize自动创建, 管理
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名, 唯一',
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码',
  },
  sex: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 2,
    comment: '性别 0:女,1:男,2:未知',
  },
  height: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 150,
    comment: '身高',
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 40,
    comment: '体重',
  },
  calorie: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1500,
    comment: '目标消耗卡路里数',
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '是否为管理员, 0: 不是管理员(默认); 1: 是管理员',
  },
})

// 强制同步数据库(创建数据表)
// User.sync({ force: true })

module.exports = User