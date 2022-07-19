import mongoose from 'mongoose'

const productNewSchema = new mongoose.Schema({
	name: {type: String},
	item_number: {type: String},
	inventory:{type: String}, 
    max_temp_celsius:{type: Number}, 
    min_temp_celsius:{type: Number}, 
    max_temp_fahrenheit:{type: Number},
    min_temp_fahrenheit:{type: Number},
    city:{type: String},
    exclude_city:{type: String},
    price:{type: Number}, 
    sort:{type: String},
    create_time:{type: String},
    modify_time:{type: String},
    description:{type: String},
    size:{type:Array},
    color:{type: String},
    brand:{type: String},
    image:{type:Array}   
})


const productNewModel = mongoose.model('ProductsNew', productNewSchema,'productNewSeasons');

export default productNewModel