const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

// 创建模型(Model calorie_food -> 表 calorie_foods)
const Food = seq.define('calorie_food', {
  // id 会被sequelize自动创建, 管理
  food_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '食品, 唯一',
  },
  food_profile: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '食品简介',
  },
  food_type: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
    comment: '食品分类 0:主食,1:蔬果,2:肉蛋奶,3:豆类坚果,4:零食饮料,5:中西菜肴,6:收藏',
  },
  pre_carlorie: {
    type:DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '单位卡路里',
  },
  pre_carbohydrate: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '单位碳水',
  },
  pre_protein: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '单位蛋白质',
  },
  pre_axunge: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '单位脂肪',
  },
})

// 强制同步数据库(创建数据表)
Food.sync({ force: true })

module.exports = Food