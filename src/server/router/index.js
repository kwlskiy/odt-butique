import express from 'express';
import cityName from './cityName'
import productNew from './productNew'




export default app => {
	app.get('/api', (req, res, next) => {
		res.render('index', { title: 'Express' })
	});
	
	app.use('/api/citiesApi',cityName )
	app.use('/api/productNewApi',productNew)
    
}