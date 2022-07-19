
import config from './config/index';
const mongoose = require('mongoose')
mongoose.connect(config.url, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
}).then(() => {
	console.log('mongoose连接成功了')
}).catch((err) => {
	console.log('error！')
	console.log(err)
})
const db = mongoose.connection;

export default db
