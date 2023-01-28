const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

// 创建模型(Model calorie_exercise -> 表 calorie_exercises)
const Exercise = seq.define('calorie_exercise', {
  // id 会被sequelize自动创建, 管理
  exercise_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '运动, 唯一',
  },
  exercise_profile: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '运动简介',
  },
  exercise_type: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
    comment: '运动分类 0:走路,1:跑步,2:骑行,3:有氧操,4:舞蹈瑜伽,5:游泳,6:打球,7:力量训练,8:常见',
  },
  pre_burn_carlorie: {
    type:DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '单位消耗卡路里',
  },
})

// 强制同步数据库(创建数据表)
Exercise.sync({ force: true })

module.exports = Exercise