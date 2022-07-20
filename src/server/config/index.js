export default {
	port: 27017,
	// url: 'mongodb://localhost:27017/bossyuan',
	// cluster0-shard-00-00.nqyk6.mongodb.net:27017
	url: 'mongodb+srv://shalabianzi123:shalabianzi123@cluster0.tgfru.mongodb.net/Cluster0?retryWrites=true&w=majority',
	session: {
		name: '',
		secret: '',
		cookie: {
			httpOnly: true,
		    secure:   false,
		    maxAge:   365 * 24 * 60 * 60 * 1000,
		}
	}
};
