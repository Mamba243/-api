const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

// 创建模型(Model calorie_article -> 表 calorie_articles)
const Article = seq.define('calorie_article', {
  // id 会被sequelize自动创建, 管理
  article_title: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '文章标题',
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
Article.sync({ force: true })

module.exports = Article