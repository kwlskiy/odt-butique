import config from './config/index.js';
import mongoose from 'mongoose';

mongoose.connect(config.url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then((res) => {
  console.log('mongoose连接成功了');
}).catch((err) => {
  console.log('error!');
  console.log(err);
});

export default mongoose.connection;
