const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

// 创建模型(Model calorie_record -> 表 calorie_records)
const Record = seq.define('calorie_record', {
  // id 会被sequelize自动创建, 管理
  record_meal: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '当前记录属于哪一顿？0:早餐,1:午餐,2:晚餐,3:补充',
  },
  article_content: {   
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '文章内容',
  },
  article_cover: { 
    type: DataTypes.BLOB,
    allowNull: false,
    comment: '文章封面',
  },
  article_type: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
    comment: '文章分类 0:官方指南,1:饮食分享,2:健身心得',
  },
})

// 强制同步数据库(创建数据表)
Record.sync({ force: true })

module.exports = Record