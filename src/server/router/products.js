import express from 'express'
import mongoose from 'mongoose'
const axios = require("axios");
import Products from '../modules/products'


const router = express.Router()


router.post('/create', async (req, res, next) => {
	const product = await Products.create(req.body);
	
	res.status(201).json({product})
	
})

router.post('/delete', (req, res, next) => {
	console.log("===============")
	console.log(req.body)
	let productItem = req.body
	// let newStudent = [{
	// 	id: 'asdqwef',
	// 	description: 'bossyuan是一个有追求的程序员2',
	// 	url: 'beossyuan@qq.com'
	// }]
	Products.remove(productItem, (err) => {
		if (err) return console.log(err)
		res.json({
			status: 200
		})
	})
})

router.get('/query', async function(req, res, next) {

	const products = await  Products.find({}).lean();
	return res.status(200).send({products})
})

router.post('/queryLoaction', function(req, res, next) {
	let data = req.body
	console.log(data);
	var options = {
		method: 'GET',
		url: 'http://api.openweathermap.org/geo/1.0/reverse?lat=' + data.latitude +'&lon=' + data.longitude +'&limit=1&appid=eb00768af5d588e6a02de34686148288&country=US'
	};
	

	axios.request(options).then(function(response) {
		//console.log(response.data);
		res.json(response.data)
	}).catch(function(error) {
		//console.error(error);
		res.json(error)
	});
	
});
// update part of the database 
router.patch('/:productId', async (req, res)=> {
	const { productId} = req.params;
	console.log({productId}, req.body)

	const updatedProduct= await Products.findOneAndUpdate({ _id: productId}, {$set: req.body}, {new: true, lean: true});

	return res.status(203).send({product: updatedProduct});
})

router.post('/queryWeather', function(req, res, next) {
	let data = req.body
	console.log(data);
	var options = {
		method: 'GET',
		url: 'http://api.openweathermap.org/geo/1.0/direct?q='+data.name +'&limit=1&appid=eb00768af5d588e6a02de34686148288'
	};
	

	axios.request(options).then(function(response) {
		console.log('------',response.data);
		res.json(response.data)
	}).catch(function(error) {
		//console.error(error);
		res.json(error)
	});
	
});

// catchTemp 8 days forcast 

router.post('/queryProducts', function(req, res, next) {
	let data = req.body
	var highestTemp = max_temp_fahrenheit
    var lowerestTemp = min_temp_fahrenheit
	Products.find({max_temp_fahrenheit:40},{min_temp_fahrenheit:15}, (err, result) => {
		if (err) return console.log(err)
		res.json({
			status: 200,
			data: result
		})
		console.log(result)
		highestTemp = result.highestTemp;
		lowerestTemp = result.lowerestTemp
	})
	console.log(data);
	var options = {
		method: 'GET',
		url: 'http://127.0.0.1:3000/api/productsApi/queryProducts'
	};
	

	axios.request(options).then(function(response) {
		console.log('------',response.data);
		res.json(response.data)
	}).catch(function(error) {
		//console.error(error);
		res.json(error)
	});
	
});


router.post('/edit', (req, res, next) => {
	// console.log("===============")
	// console.log(req.body)
	let products = {
		// update result 
		$set: req.body
		
	}
	console.log(req.body)
	// let newStudent = [{
	// 	id: 'asdqwef',
	// 	description: 'bossyuan是一个有追求的程序员2',
	// 	url: 'beossyuan@qq.com'
	// }]
	var conditions = {
		_id: req.body.id
	};
	// if search all of Hat items , conditions -> {name:/^Hat/}
	// var conditions = {
	// 	name:/Hat/,
	// 	color:/black/
	// };
	Products.updateOne(conditions, products, (err) => {
		if (err) return console.log(err)
		res.json({
			status: 200
		})
	})
})

// support header inputs to find products and brands 

// router.get('/brands', function(req, res, next) {
//     let productIBrands = req.body
//     console.log (productIBrands )
//    Products.findOne({brand:productIBrands}, (err, result) => {
//         if (err) return console.log(err)
//         res.json({
//             status: 200,
//             data: result
//         })
//         console.log(result)
//     })

// })

// find products by brand name
router.get('/search/brands', function(req, res, next) {
	let keyword = req.query.keyword
    console.log(keyword)
   Products.find({brand:keyword}, (err, result) => {
        if (err) return console.log(err)
        res.json({
            status: 200,
            data: result
        })
        console.log(result)
    })

})
// find products by product name
router.get('/search/productName', function(req, res, next) {
	let keyword = req.query.keyword
    console.log(keyword)
   Products.find({name:keyword}, (err, result) => {
        if (err) return console.log(err)
        res.json({
            status: 200,
            data: result
        })
        console.log(result)
    })

})





























export default router



