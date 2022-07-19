import mongoose from 'mongoose'

const cityName = new mongoose.Schema({
	city: {
		type: String
	},
	state: {
		type: String
	}
	 
})

const cityNameModel = mongoose.model('CityName', cityName,'cityNameStateAbbrNew');

export default cityNameModel