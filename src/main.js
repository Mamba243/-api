// 项目入口文件
const app = require('./app');
const {APP_PORT} = require('./config/config.default')

// 监听4000端口
app.listen(APP_PORT,()=>{
    console.log(`serve is running on http://localhost:${APP_PORT}`);
})