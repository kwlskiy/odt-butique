import express from 'express';
import cityName from './cityName.js'
import productNew from './productNew.js'




export default app => {
	app.get('/api', (req, res, next) => {
		res.render('index', { title: 'Express' })
	});

	app.use('/api/citiesApi',cityName )
	app.use('/api/productNewApi',productNew)
}
