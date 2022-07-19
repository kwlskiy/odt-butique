import express from 'express'
import mongoose from 'mongoose'
import Users from '../modules/users'
// export default userModel  User = userModel, the best way is name consistency .under file modules --> user.js
import User from '../modules/user'
import Blogs from '../schemas/blog'

const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('./view/index', {
		title: 'Express'
	})
})

/* 
 * 返回一个json数据
 */
router.get('/json', function(req, res, next) {
	return res.json({
		status: 200,
		data: [{
				1: "qwer"
			},
			{
				1: "sdfsdf"
			}
		]
	})
})
//查询所有用户数据
router.get('/users', function(req, res, next) {
	Users.fetch(function (err, users) {
		if (err) {
			console.log(err + "cauole");
		}
		// res.render('users',{title: '用户列表', users: users})  
		//这里也可以json的格式直接返回数据res.json({data: users});

		res.json({
			status: 200,
			data: users
		});
	})

})
// 查询博客
router.get('/blogs', function(req, res, next) {
	Blogs.find((err, blogs) => {
		if (err) {
			console.log(err + "jksdhfakdshfkasd")
		}
		res.json({
			status: 200,
			data: blogs
		})
	})
})
// 查询博客
router.get('/user', function(req, res, next) {
	User.find({}, (err, result) => {
		if (err) return console.log(err)
		res.json({
			status: 200,
			data: result
		})
		console.log(result)
	})
})

router.post('/create', (req, res, next) => {
	console.log("===============")
	console.log(req.body)
	let newStudent = req.body
	// let newStudent = [{
	// 	id: 'asdqwef',
	// 	description: 'bossyuan是一个有追求的程序员2',
	// 	url: 'beossyuan@qq.com'
	// }]
	User.create(newStudent, (err) => {
		if (err) return console.log(err)
		res.json({
			status: 200
		})
	})
})
router.post('/delete', (req, res, next) => {
	console.log("===============")
	console.log(req.body)
	let user = req.body
	// let newStudent = [{
	// 	id: 'asdqwef',
	// 	description: 'bossyuan是一个有追求的程序员2',
	// 	url: 'beossyuan@qq.com'
	// }]
	User.remove(user, (err) => {
		if (err) return console.log(err)
		res.json({
			status: 200
		})
	})
})
router.post('/edit', (req, res, next) => {
	// console.log("===============")
	// console.log(req.body)
	let user = {
		// update result 
		$set: req.body
	}
	// let newStudent = [{
	// 	id: 'asdqwef',
	// 	description: 'bossyuan是一个有追求的程序员2',
	// 	url: 'beossyuan@qq.com'
	// }]
	var conditions = {
		id: req.body.id
	};
	User.updateOne(conditions, user, (err) => {
		if (err) return console.log(err)
		res.json({
			status: 200
		})
	})
})
router.get('/findOne/:id', (req, res, next) => {
	console.log("===============")
	console.log(req.body)
	let user = {
		id: req.params.id
	}
	// let newStudent = [{
	// 	id: 'asdqwef',
	// 	description: 'bossyuan是一个有追求的程序员2',
	// 	url: 'beossyuan@qq.com'
	// }]
	User.findOne(user, (err, result) => {
		if (err) return console.log(err)
		res.json({
			status: 200,
			data: result
		})
	})
})
export default router



