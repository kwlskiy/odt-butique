import express from 'express'
import mongoose from 'mongoose'
const axios = require("axios");
import ProductsNew from '../modules/productNew'


const router = express.Router()

// create mangoDB database in mangoDB Altas
router.post('/create', async (req, res, next) => {
	const productItemNew = [{
		"name": "sumJoanna Straw Hat",
		"item_number": "wh2022001",
		"inventory": "10",
		"max_temp_celsius": "45",
		"min_temp_celsius": "20",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "68",
		"city": "",
		"exclude_city": "",
		"price": "68",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "This woven straw hat features a wide brim that provides ample shade and Western attitude as you stroll the boardwalk or through the market. A grosgrain band gives it a classic finishing touch that works with any look.",
		"size": ["One size"],
		"color": "Honey/Black",
		"brand": "BRIXTON",
		"image": ["wh2022001_1.jpg", "wh2022001_2.jpg", "wh2022001_3.jpg", "wh2022001_4.jpg"]
	},
	{
		"name": "sumJoanna Straw Hat",
		"item_number": "wh2022002",
		"inventory": "10",
		"max_temp_celsius": "45",
		"min_temp_celsius": "20",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "68",
		"city": "",
		"exclude_city": "",
		"price": "68",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "This woven straw hat features a wide brim that provides ample shade and Western attitude as you stroll the boardwalk or through the market. A grosgrain band gives it a classic finishing touch that works with any look.",
		"size": ["One size"],
		"color": "Honey/Lion",
		"brand": "BRIXTON",
		"image": ["wh2022002.jpg"]
	},
	{
		"name": "Broken In Baseball Cap",
		"item_number": "wh2022003",
		"inventory": "15",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "77",
		"city": "",
		"exclude_city": "",
		"price": "28.95",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Specially washed for a perfectly broken-in feel, this timeless baseball hat has an adjustable leather back strap. Throw it on, look instantly cooler. Adjustable back strap .Organic cotton/leather",
		"size": ["One size"],
		"color": "Light Straw",
		"brand": "MADEWELL",
		"image": ["wh2022003_1.jpg","wh2022003_2.jpg"]
	},
	{
		"name": "Broken In Baseball Cap",
		"item_number": "wh2022004",
		"inventory": "15",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "77",
		"city": "",
		"exclude_city": "",
		"price": "29.95",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Specially washed for a perfectly broken-in feel, this timeless baseball hat has an adjustable leather back strap. Throw it on, look instantly cooler. Adjustable back strap .Organic cotton/leather",
		"size": ["One size"],
		"color": "Alabaster",
		"brand": "MADEWELL",
		"image": ["wh2022004_1.jpg","wh2022004_2.jpg"]
	},
	{
		"name": "sumJoanna Straw Heavy Check Bucket Hat",
		"item_number": "wh2022005",
		"inventory": "4",
		"max_temp_celsius": "30",
		"min_temp_celsius": "10",
		"max_temp_fahrenheit": "86",
		"min_temp_fahrenheit": "50",
		"city": "",
		"exclude_city": "",
		"price": "395.00",
		"sort": "5",
		"create_time": "",
		"modify_time": "",
		"description": "Iconic checks make a statement on a classic bucket hat cut from crisp cotton. Cotton lining",
		"size": ["S","M","L"],
		"color": "Archive Beige",
		"brand": "BURBERRY",
		"image": ["wh2022005_1.jpg","wh2022005_2.jpg"]
	},
	{
		"name": "Bermuda Bucket Hat",
		"item_number": "wh2022006",
		"inventory": "4",
		"max_temp_celsius": "15",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "59",
		"min_temp_fahrenheit": "32",
		"city": "",
		"exclude_city": "",
		"price": "69.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Logo embroidery brands a classic bucket hat updated with a richly textured triblend.55% acrylic, 25% polyester, 20% nylon, or 45% modacrylic, 40% acrylic, 15% nylon",
		"size": ["S","M","L","XL"],
		"color": "Black",
		"brand": "KANGOL",
		"image":["wh2022006_1.jpg","wh2022006_2.jpg"]

	
	},

	{
		"name": "Bermuda Bucket Hat",
		"item_number": "wh20220010",
		"inventory": "14",
		"max_temp_celsius": "15",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "59",
		"min_temp_fahrenheit": "32",
		"city": "",
		"exclude_city": "",
		"price": "65.00",
		"sort": "10",
		"create_time": "",
		"modify_time": "",
		"description": "Logo embroidery brands a classic bucket hat updated with a richly textured triblend.55% acrylic, 25% polyester, 20% nylon, or 45% modacrylic, 40% acrylic, 15% nylon",
		"size":  ["S","M","L","XL"],
		"color": "White",
		"brand": "KANGOL",
		"image": ["wh2022010_1.jpg","wh2022010_2.jpg"]

	},
	{
		"name": "Ramskull Baseball Cap",
		"item_number": "mh2022001",
		"inventory": "12",
		"max_temp_celsius": "40",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude city": "",
		"price": "58.00",
		"sort": "1",
		"create_time": "",
		"modify_time": "",
		"description": "A bit of sharp branding marks a cool cap built from washed cotton twill.Adjustable buckle back strap 100% washed cotton Spot clean",
		"size": ["One size"],
		"color": "Black/White",
		"brand": "KANGOL",
		"image": ["mh2022001_1.jpg","mh2022001_2.jpg","mh2022001_3.jpg"]

	},
	{
		"name": "Originals Unisex Utility Bucket Hat",
		"item_number": "mh2022002",
		"inventory": "15",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "35.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "An exterior mesh pocket elevates the function of a bucket hat sporting a wide, shady brim and  a small clasp for hands-free carrying when the sun disappears.Drawcord-toggle chin strap.Mesh hook-and-loop flap-patch pocket.Mesh lined. 60% cotton, 40% nylon.Hand wash, line dry",
		"size": ["One Size"],
		"color": "Dark Grey",
		"brand": "ADIDAS",
		"image":  ["mh2022001_1.jpg","mh2022001_2.jpg","mh2022001_3.jpg"]

	},
	{
		"name": "Radar Stripe Beanie",
		"item_number": "mh2022003",
		"inventory": 12,
		"max_temp_celsius": 10,
		"min_temp_celsius": -10,
		"max_temp_fahrenheit": 50,
		"min_temp_fahrenheit": 14,
		"city": "",
		"exclude_city ": "",
		"price": "60.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Colorful flecks add depth and dimension to the bulls-eye stripes wrapping this cuffed beanie knit from soft, cozy yarns warmed with a hint of wool. 51% acrylic, 24% polyamide, 10% wool, 10% cotton, 4% polyester, 1% elastane Hand wash, dry flat",
		"size": ["One Size"],
		"color": "Grey/ Duffel Bag",
		"brand": "BARBOUR",
		"image": ["mh2022003_1.jpg","mh2022003_2.jpg"]

	},
	{
		"name": "Cap New York Yankees Polartec® Wind Pro 59FIFTY Baseball Cap",
		"item number": "mh2022004",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude city": "",
		"price": "50.00",
		"sort": "4",
		"create time": "",
		"modify time": "",
		"description": "A New York Yankees logo pops in chunky embroidery from the crown of a cap made of soft, stretchy Polartec fleece that retains warmth as it blocks the sun.Polartec fleece prevents heat loss and stays breathable as it regulates core temperature.97% polyester, 3% elastane",
		"size": ["One Size"],
		"color": "Navy",
		"brand": "NEW ERA",
		"image": ["mh2022004_1.jpg","mh2022004_2.jpg"]

	},
	{
		"name": "Reversible Bucket Hat",
		"item_number": "mh2022005",
		"inventory": "Only 1 left",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "165.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Match your hat to your mood—black-and-white or anthracite—in this reversible bucket hat patterned in the brand\"s logo.100% polyester. Dry clean.",
		"size": ["One Size"],
		"color": "offwhite",
		"brand": "KENZO",
		"image": ["mh2022005_1.jpg","mh2022005_2.jpg"]

	},
	{
		"name": "Tiered Babydoll Dress",
		"item_number": "wc2022001",
		"inventory": "25",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "59.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Allover texture lends dimension to this sleeveless babydoll dress with a tiered, ruffle-trimmed skirt.",
		"size": ["XS","S","M","L"],
		"color": "White",
		"brand": "TOPSHOP",
		"image": ["wc2022001_1.jpg","wc2022001_2.jpg"]

	},
	{
		"name": "Tiered Halter Neck Minidress",
		"item_number": "wc2022005",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "99.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "This halter-neck minidress features a slightly flared, ruffled skirt that adds a little bit of flounce to the summery style.37\"\" length Halter neck 100% viscoseMachine wash, tumble dry",
		"size": ["plus size S","plus size M","plus size L","plus size XL"],
		"color": "High Risk Red",
		"brand": "ELOQUII",
		"image": ["wc2022005_1.jpg","wc2022005_2.jpg","wc2022005_3.jpg"]
	},
	{
		"name": "Lucille Cotton Maxi Dress",
		"item_number": "wc2022009",
		"inventory": "10",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "229.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "An allover botanic print calls for attention on this crisp cotton maxi dress fashioned with an empire waist and noodle-thin straps.Scoop neck.Spaghetti straps Lined. 100% cotton. Hand wash, line dry.",
		"size": ["XS","S","M","L"],
		"color": "Moroccan Nights",
		"brand": "RAILS",
		"image": ["wc2022009_1.jpg","wc2022009_2.jpg","wc2022009_3.jpg"]
	},
	{
		"name": "Sleeveless Printed Tiered Dress",
		"item_number": "wc2022013",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "34.99",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "A sleeveless tiered ditsy floral printed midi dress is perfect for a summer time look. - Ruffled square neck - Sleeveless - Slips on over head - Tiered - Allover print - Midi length - Approx. Machine wash,100% cotton",
		"size": ["XS","S","M","L"],
		"color": "Cream/Blue Floral Toile",
		"brand": "MAXSTUDIO",
		"image": ["wc2022013_1.jpg","wc2022013_2.jpg","wc2022013_3.jpg"]
	},
	{
		"name": "Bow Neck Short Sleeve Dress",
		"item_number": "wc2022017",
		"inventory": "11",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "125.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "A bubbly bow and a ripple of flounce add ebullient charm to this sweet dress that's ready to go from desk to dinner.94% polyester, 6% spandex.Hand wash, dry flat",
		"size": ["XS","S","M","L"],
		"color": "Lush Green ",
		"brand": "CECE",
		"image": ["wc2022017_1.jpg","wc2022017_2.jpg"]
	},
	{
		"name": "Bow Neck Short Sleeve Dress",
		"item_number": "wc2022019",
		"inventory": "16",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "128.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "A bubbly bow and a ripple of flounce add ebullient charm to this sweet dress that's ready to go from desk to dinner.94% polyester, 6% spandex.Hand wash, dry flat",
		"size": ["XS","S","M","L"],
		"color": "Rich Black",
		"brand": "CECE",
		"image": ["wc2022019_1.jpg","wc2022019_2.jpg"]
	},
	{
		"name": "5-Inch Cotton Blend Twill Shorts",
		"item_number": "wc2022021",
		"inventory": "17",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "39.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Set yourself up for summery outfitting in these easy fit shorts, surely available in all your favorite shades, and cut from soft cotton stretch twill.99% cotton, 1% spandex.Machine wash, tumble dry.",
		"size": ["XS","S","M","L"],
		"color": "Grey Ebony",
		"brand": "CASLON",
		"image": ["wc2022021_1.jpg","wc2022021_2.jpg","wc2022021_3.jpg","wc2022021_4.jpg"]
	},
	{
		"name": "Cloverdale Waffle Knit Polo",
		"item_number": "mc2022001",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "98.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "A two-tone waffle knit adds soft, lightweight texture that refreshes this classic garment-washed polo with weekend-ready appeal.Spread collar.Short sleeves55% polyester, 45% cotton. Machine wash, tumble dry",
		"size":  ["XS","S","M","L","XL","XXL","XXXL"],
		"color": "Grey Ebony",
		"brand": "ROBERT BARAKETT",
		"image": ["mc2022001_1.jpg", "mc2022001_2.jpg", "mc2022001_3.jpg", "mc2022001_4.jpg"]
	},
	{
		"name": "Essential Drawstring Shorts",
		"item_number": "mc2022006",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "59.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "These drawstring shorts are shaped from a soft, supple organic-cotton-rich blend for endless afternoons of lounging, errands and more.Elastic/drawstring waistFront slant pockets; back button-welt pockets 49% organic cotton, 40% modal, 9% linen, 2% polyurethane Machine wash, tumble dry",
		"size": ["XS","S","M","L","XL","XXL","XXXL"],
		"color": "Golden Straw",
		"brand": "FAHERTY",
		"image": ["mc2022006_1.jpg", "mc2022006_2.jpg", "mc2022006_3.jpg", "mc2022006_4.jpg"]
	},
	{
		"name": "Take Flight Stripe Slim Fit Polo",
		"item_number": "mc2022011",
		"inventory": "10",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "94.95",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Crisp stripes mark the chest of a color-blocked polo fashioned from lightweight jersey in a slim, contemporary fit.29\"\" length (size Medium).Button half-placket.Spread collar.Short sleeves57% pima cotton, 43% polyester. Machine wash, tumble dry",
		"size":  ["XS","S","M","L","XL","XXL","XXXL"],
		"color": "Black",
		"brand": "TRAVISMATHEW",
		"image": ["mc2022011_1.jpg", "mc2022011_2.jpg", "mc2022011_3.jpg", "mc2022011_4.jpg"]
	},
	{
		"name": "Cotton Jersey Long Sleeve T-Shirt",
		"item_number": "mc2022015",
		"inventory": "15",
		"max_temp_celsius": "30",
		"min_temp_celsius": "10",
		"max_temp_fahrenheit": "86",
		"min_temp_fahrenheit": "50",
		"city": "",
		"exclude_city": "",
		"price": "50.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "A classic long-sleeve T-shirt made from soft cotton jersey with dropped shoulders and a relaxed fit for a clean, modern style that's easy to move in.Crewneck.Long sleeves. 100% cotton. Hand wash, dry flat",
		"size":  ["XS","S","M","L","XL","XXL","XXXL"],
		"color": "String",
		"brand": "FEAR OF GOD ESSENTIALS",
		"image": ["mc2022015_1.jpg", "mc2022015_2.jpg", "mc2022015_3.jpg", "mc2022015_4.jpg"]
	},

	{
		"name": "Men's Gordon Lyons Full Zip Vest",
		"item_number": "mc2022020",
		"inventory": "10",
		"max_temp_celsius": "10",
		"min_temp_celsius": "-10",
		"max_temp_fahrenheit": "59",
		"min_temp_fahrenheit": "122",
		"city": "",
		"exclude_city": "",
		"price": "99.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "This midweight sweater-knit fleece vest has a cozy brushed interior to perfectly balance the casual style with adventure-seeking comfort.     Front zip closure. Stand collar. Chest snap-welt pocket; front zip pockets.100% polyester . Machine wash, tumble dry",
		"size": ["XS","S","M","L","XL","XXL","XXXL"],
		"color": "Tnf Black Heather",
		"brand": "THE NORTH FACE",
		"image": ["mc2022020_1.jpg", "mc2022020_2.jpg", "mc2022020_3.jpg", "mc2022020_4.jpg"]
	},
	{
		"name": "Front Zip Work Shirt",
		"item_number": "mc2022024",
		"inventory": "10",
		"max_temp_celsius": "10",
		"min_temp_celsius": "-10",
		"max_temp_fahrenheit": "59",
		"min_temp_fahrenheit": "122",
		"city": "",
		"exclude_city": "",
		"price": "99.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "TModern polish defines this lightweight work shirt designed with a layer-perfect front zip and easy-moving stretch.Long sleeves 54% hemp, 30% polyester, 15% viscose, 1% elastaneMachine wash, tumble dry",
		"size": ["XS","S","M","L","XL","XXL","XXXL"],
		"color": "Grey",
		"brand": "CLUB MONACO",
		"image": ["mc2022024_1.jpg", "mc2022024_2.jpg", "mc2022024_3.jpg", "mc2022024_4.jpg"]
	},
	{
		"name": "Milo Leather Biker Jacket",
		"item_number": "mc2022028",
		"inventory": "12",
		"max_temp_celsius": "15",
		"min_temp_celsius": "5",
		"max_temp_fahrenheit": "59",
		"min_temp_fahrenheit": "41",
		"city": "",
		"exclude_city": "",
		"price": "589.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Go for a cool look that spans generations in this supple lambskin-leather jacket designed with all the classic biker details.Front zip closure.Notched lapels.Zip-gusset cuffs.Front zip and flap pockets.Snap belt loops.Lined.Leather.Professional leather clean",
		"size": ["XS","S","M","L","XL","XXL","XXXL"],
		"color": "Black",
		"brand": "ALLSAINTS",
		"image": ["mc2022028_1.jpg", "mc2022028_2.jpg", "mc2022028_3.jpg", "mc2022028_4.jpg"]
	},
	{
		"name": "ons Slim Fit Wool Blazer",
		"item_number": "mc2022032",
		"inventory": "14",
		"max_temp_celsius": "15",
		"min_temp_celsius": "5",
		"max_temp_fahrenheit": "59",
		"min_temp_fahrenheit": "41",
		"city": "",
		"exclude_city": "",
		"price": "598.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "GRichly textured virgin wool defines a clean, charming blazer framed with classic notch lapels.Notched lapels.Four-button cuffs.Chest pocket; flap pockets; interior pockets.Side vents Lined 100% wool",
		"size": ["XS","S","M","L","XL","XXL","XXXL"],
		"color": "Blue",
		"brand": "BOSS",
		"image": ["mc2022032_1.jpg", "mc2022032_2.jpg", "mc2022032_3.jpg", "mc2022032_4.jpg"]
	},
	{
		"name": "Performance Joggers",
		"item_number": "wa2022001",
		"inventory": "10",
		"max_temp_celsius": "35",
		"min_temp_celsius": "10",
		"max_temp_fahrenheit": "95",
		"min_temp_fahrenheit": "50",
		"city": "",
		"exclude_city": "",
		"price": "80.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Give your work-from-home uniform a cozy upgrade with these soft, relaxed joggers that are also stylish enough for errands.Elastic/drawstring waist. Front slant pockets.89% recycled polyester, 11% elastane . Machine wash, tumble dry",
		"size": ["XS","S","M","L","XL"],
		"color": "Charcoal Heather",
		"brand": "VUORI",
		"image": ["wa2022001_1.jpg", "wa2022001_2.jpg", "wa2022001_3.jpg", "wa2022001_4.jpg"]
	},
	{
		"name": "Aero Print Shorts",
		"item_number": "wa2022005",
		"inventory": "15",
		"max_temp_celsius": "40",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "38.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "These sporty, dolphin-hem shorts are workout-ready must-haves, with a hidden zip pocket at the back to stash the essentials.Wide ribbed waist.Hidden back-zip pocket.     Brief liner.86% polyester, 14% spandex.Machine wash, tumble dry",
		"size": ["XS","S","M","L","XL"],
		"color": "Charcoal Heather",
		"brand": "VUORI",
		"image": ["wa2022005_1.jpg", "wa2022005_2.jpg", "wa2022005_3.jpg", "wa2022005_4.jpg"]
	},
	{
		"name": "Fast Track Jacket",
		"item_number": "wa2022009",
		"inventory": "15",
		"max_temp_celsius": "25",
		"min_temp_celsius": "10",
		"max_temp_fahrenheit": "77",
		"min_temp_fahrenheit": "50",
		"city": "",
		"exclude_city": "",
		"price": "149.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "\"Cold weather is no reason to postpone a run or a ride in this lightweight, breathable jacket with a stowaway hood and a longer back hem that keeps you covered against puddles and tire spray. Front zip closure.Stowaway drawcord hood.Long sleeves with knit internal cuffs and thumbholes.Reflective details enhance visibility in low light or at night.	Moisture-wicking jersey underlayer dries quickly to keep you cool and comfortable.87% polyester, 13% elastane\"",
		"size": ["XS","S","M","L","XL"],
		"color": "Black",
		"brand": "SWEATY BETTY",
		"image": ["wa2022009_1.jpg", "wa2022009_2.jpg", "wa2022009_3.jpg", "wa2022009_4.jpg"]
	},
	{
		"name": "Peaceful Knot T-Shirt",
		"item_number": "wa2022013",
		"inventory": "15",
		"max_temp_celsius": "40",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "39.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "A gathered front hem updates a comfy crewneck T-shirt in a lightweight and stretchy knit.Crewneck.Short sleeves.95% Tencel® modal, 5% polyesterMachine wash, tumble dry",
		"size": ["XS","S","M","L","XL"],
		"color": "Green Placid",
		"brand": "ZELLA",
		"image": ["wa2022013_1.jpg", "wa2022013_2.jpg", "wa2022013_3.jpg", "wa2022013_4.jpg"]
	},
	{
		"name": "Dynamic Contour Underwire Sports Bra",
		"item_number": "wa2022017",
		"inventory": "14",
		"max_temp_celsius": "40",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "78.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Speed through your workout in this high-impact sports bra specifically engineered with extra coverage and support for larger cup sizes. Moisture-wicking, four-way-stretch fabric holds its shape and keeps skin cool, while underwire cups with thin foam pads help provide a smooth, round shape and minimize bounce.High-impact support.Back J-hook converts straps to racerback.Wide elastic underband helps secure fit and lends support.Partially lined, with soft foam cups76% nylon, 24% spandex. Hand wash, line dry",
		"size": ["S","M","L","XXL"],
		"color": "White/Lead",
		"brand": "NATORI",
		"image": ["wa2022017_1.jpg", "wa2022017_2.jpg", "wa2022017_3.jpg"]
	},
	{
		"name": "Men's Logo T-Shirt",
		"item_number": "ma2022001",
		"inventory": "23",
		"max_temp_celsius": "40",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "19.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Stock up on an essential 3-Stripes logo T-shirt you can feel good about wearing thanks to its inclusion of recycled fibers.Crewneck.Short sleeves.     65% recycled polyester, 35% cotton.Machine wash, tumble dry",
		"size": ["XS","S","M","L","XL","XXL","XXXL"],
		"color": "Crew Navy Mel/ Black",
		"brand": "ADIDAS",
		"image": ["ma2022001_1.jpg", "ma2022001_1.jpg", "ma2022001_1.jpg", "ma2022001_1.jpg"]
	},
	{
		"name": "Designed for Training Performance T-Shirt",
		"item_number": "ma2022006",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "36.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Old materials conquer new challenges in a high-energy training T-shirt made with recycled fibers that wick away sweat for dry, distraction-free performance. Mesh insets and offset shoulder seams provide essential ventilation and an unrestricted range of movement.   Crewneck.Short sleeves.AEROREADY moisture-wicking fabric stays dry for distraction-free comfort.81% recycled polyester, 14% lyocell, 5% spandex   Machine wash, dry flat",
		"size": ["XS","S","M","L","XL","XXL","XXXL"],
		"color": "Blue Rush",
		"brand": "ADIDAS",
		"image": ["ma2022006_1.jpg", "ma2022006_2.jpg", "ma2022006_3.jpg", "ma2022006_4.jpg"]
	},
	{
		"name": "Essentials Knit Hooded Warmup Jacket",
		"item_number": "ma2022011",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "79.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Double-knit construction amps up the comfort of a jacket sporting the breathability of cotton and a high-neck hood for extended coverage in any activity.Drawstring hood.62% cotton, 38% polyester.Machine wash, dry flat",
		"size": ["XS","S","M","L","XL","XXL","XXXL"],
		"color": "Ocean Cube/ Washed Teal ",
		"brand": "JORDAN",
		"image": ["ma2022011_1.jpg", "ma2022011_2.jpg", "ma2022011_3.jpg", "ma2022011_4.jpg"]
	},
	{
		"name": "Everywear 6-Inch Shorts",
		"item_number": "ma2022016",
		"inventory": "1",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "65.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Lightweight, stretchy and water-resistant, these classic flat-front shorts go from the party to the pool and back and stay comfortable no matter what you do. Secure phone-size pockets—including one hidden on the side—keep essentials stowed and out of the way. Zip fly with button closure; elastic/drawstring waist.Front slant pockets; side-seam zip pocket; back zip-welt and button-welt pockets.Durable water-repellent (DWR) finish  89% polyester, 11% spandex.Machine wash, tumble dry",
		"size": ["XS","S","M","L","XL","XXL","XXXL"],
		"color": "The Ruggeds",
		"brand": "CHUBBIES",
		"image": ["ma2022016_1.jpg", "ma2022016_1.jpg", "ma2022016_1.jpg", "ma2022016_1.jpg"]
	},
	{
		"name": "Mako Water Repellent Athletic Shorts",
		"item_number": "ma2022021",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "68.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Four-way-stretch fabric dries fast to keep you going at any intensity in lightweight athletic shorts engineered to meet the demands of any cross-training. A water-repellent exterior holds inclement weather at bay, while secure pockets front and back stow keys, tunes and energy gels where you can reach them.Elastic waist with internal drawcord.Front slant pockets with interior mesh pocket; hidden side-zip pocket; back zip-welt pocketDurable water-repellent (DWR) finish.90% polyester, 10% elastane.Machine wash, line dry",
		"size": ["XS","S","M","L","XL","XXL","XXXL"],
		"color": "Matte Green",
		"brand": "RHONE",
		"image": ["ma2022021_1.jpg", "ma2022021_1.jpg", "ma2022021_1.jpg", "ma2022021_1.jpg"]
	},
	{
		"name": "Dri-FIT Yoga Flex Pocket Shorts",
		"item_number": "ma2022025",
		"inventory": "11",
		"max_temp_celsius": "45",
		"min_temp_celsius": "15",
		"max_temp_fahrenheit": "104",
		"min_temp_fahrenheit": "59",
		"city": "",
		"exclude_city": "",
		"price": "68.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Crafted to support the movements and positions of yoga, these soft, stretchy shorts pair a lightweight shell over a compressive, sweat-wicking interior brief. A hidden zip pocket securely stows keys or other small essentials from the first stretch to the final namaste.Elastic waist with internal drawcord.Side-seam zip pocket.Interior compression shorts.Dri-FIT moisture-wicking technology.Shell is 87% polyester, 13% spandex; interior shorts are 69% nylon, 31% spandexMachine wash, dry flat",
		"size": ["XS","S","M","L","XL","XXL","XXXL"],
		"color": "Anthracite",
		"brand": "NIKE",
		"image": ["ma2022025_1.jpg", "ma2022025_2.jpg", "ma2022025_3.jpg", "ma2022025_4.jpg"]
	},
	{
		"name": "Phormula 3-9 Repair Cream",
		"item_number": "sc2022001",
		"inventory": "15",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "290.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "This rich, re-energizing cream delivers powerful nourishment, and essential vitamins like Niacinamide and Panthenol to the skin for a more hydrated, healthy appearing complexion.",
		"size": ["One size"],
		"color": "",
		"brand": "ERNO LASZLO",
		"image": ["sc2022001_1.jpg"]
	},
	{
		"name": "4-Pack Vitality Treatment Mask",
		"item_number": "sc2022002",
		"inventory": "30",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "96.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "A two-part mask powered by a triple mineral powder blend and an activated serum that, when combined, become a peel-off mask.",
		"size":["One size"],
		"color": "",
		"brand": "ERNO LASZLO",
		"image": ["sc2022002_1.jpg", "sc2022002_2.jpg"]
	},
	{
		"name": "Sea Mud Deep Cleansing Bar",
		"item_number": "sc2022003",
		"inventory": "30",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "40.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "An iconic cleansing bar with Dead Sea mud, which is loaded with 26 minerals to deeply cleanse, exfoliate and balance out skin.",
		"size": ["One size"],
		"color": "",
		"brand": "ERNO LASZLO",
		"image": ["sc2022003_1.jpg", "sc2022003_2.jpg"]
	},
	{
		"name": "Hydra-Therapy Memory Sleep Mask",
		"item_number": "sc2022004",
		"inventory": "30",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "120.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "This cutting-edge formula bounces back when you touch it, much like youthful, moisture-rich skin. Its formula is infused with a potent blend of actives, including prickly pear, which is rich in essential fatty acids and naturally-occuring vitamin E. Wake up to hydrated, renewed and refreshed skin.",
		"size": ["One size"],
		"color": "",
		"brand": "ERNO LASZLO",
		"image": ["sc2022004_1.jpg", "sc2022004_2.jpg"]
	},
	{
		"name": "Firming Cream",
		"item_number": "sc2022005",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "140.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Bakuchiol, a plant-derived alternative to retinol, coupled with spirulina baxima, a type of blue-green algae, will re-contour, re-firm and re-plump the look and feel of your skin. Blended with natural hydrators such as chia seed oil, shea butter and olive oil, this cream hydrates, smoothes and gives skin a lifted look.",
		"size": ["One size"],
		"color": "",
		"brand": "ERNO LASZLO",
		"image": ["sc2022005_1.jpg", "sc2022005_2.jpg", "sc2022005_3.jpg"]
	},
	{
		"name": "Firming Essence",
		"item_number": "sc2022006",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "86.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Jelly-like lotion that merges the benefits of botanical extracts along with encapsulated collagen and the anti-ager spirulina maxima.     It helps to lift the skin and prevent fine lines and wrinkles.",
		"size": ["One size"],
		"color": "",
		"brand": "ERNO LASZLO",
		"image": ["sc2022006_1.jpg", "sc2022006_2.jpg"]
	},

	{
		"name": "Pore Cleanse Clay Mask",
		"item_number": "sc2022007",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "52.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "It infuses moisture and nutrients into your skin to reveal a radiant complexion. Active ingredients in this soothing formula deliver hydrating and oil-absorbing benefits, and additional ingredients help diminish the appearance of pores. Calamine, a powder consisting of 99.5% zinc oxide and 0.5% iron oxide helps soothe and calm skin, and kaolin clay acts as a mild exfoliator to help rid skin's surface of unwanted buildup without stripping away its natural oils. Bentonite clay delivers rich nutrients to skin, helping to detoxify, purify and boost skin's overall renewal. The brand's Moisturizing Complex blends Irish sea moss extract and mineral water extracted from sugar cane to help increase moisture levels by helping lock in hydration.",
		"size": ["One size"],
		"color": "",
		"brand": "ERNO LASZLO",
		"image": ["sc2022007_1.jpg", "sc2022007_2.jpg"]
	},

	{
		"name": "Multitask Serum Eye Mask",
		"item_number": "sc2022008",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "42.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "In just one use, this de-puffing mask helps to improve the appearance of fine lines, wrinkles and dark circles underneath the eyes by moisturizing and smoothing skin. Your skin is left free from puffiness, renewed and rejuvenated,      and your eyes are more luminous than before. It's designed to perfectly hug the contours of your undereye area, delivering powerful actives where they're needed most. Within the formula,      a remarkable hydrocolloid (gel-forming agent) called locust bean gum works to help the patches recover their structure upon application so they stay put with no slipping.     Its active ingredients include nutrient-rich algae extract and brightening niacinamide along with antioxidant-rich centella asiatica and soothing allantoin.     Moisture-binding humectants including saccharide isomerate and sodium hyaluronate saturate skin with moisture.",
		"size": ["One size"],
		"color": "",
		"brand": "ERNO LASZLO",
		"image": ["sc2022008_1.jpg", "sc2022008_2.jpg"]
	},

	{
		"name": "Transphuse Night Serum",
		"item_number": "sc2022009",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "225.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "While you sleep, this revolutionary formula restores skin's natural balance inside and out, tightening, toning and bolstering skin's defenses against the stresses of tomorrow. A Pro-Biobalance complex, the brand's own probiotic skin nourisher, restores balance and strengthens skin's immune system; palmitoyl peptides amp up collagen production; acmella oleracea, a tropical plant extract, relaxes contraction in the facial muscles so skin looks instantly smoother; and lavender oil,a medicinal botanical and mood balancer, soothes and stimulates as it encourages a good night's sleep.",
		"size": ["One size"],
		"color": "",
		"brand": "ERNO LASZLO",
		"image": ["sc2022008_1.jpg", "sc2022008_2.jpg"]

	},

	{
		"name": "VTM® Micro-Essence",
		"item_number": "sc2022010",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "88.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Through patented pour-to-activate microfluidic technology, VTM Micro-Essence delivers an instant cooling sensation and weightless hydration while refining pores, brightening and improving skin tone and texture over time. Skin is energized and balanced for an overall soft and supple complexion.",
		"size": ["One size"],
		"color": "",
		"brand": "ERNO LASZLO",
		"image": ["sc2022010_1.jpg", "sc2022010_2.jpg", "sc2022010_3.jpg"]

	},

	{
		"name": "Brightening Cleansing Oil",
		"item_number": "sc2022011",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "64.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "It's formulated with plant-derived lauryl glucoside, which works as a surfactant and mild cleanser to help draw impurities from the skin's surface. Upon application, it also helps create a foaming experience for a full-bodied, confident cleanse.Coconut oil enhances the lather, while its fatty acids deliver soothing and nourishing benefits. Skin is left feeling soft,hydrated, plumped and protected, never tight or dry. Japanese mandarin leaves skin with a visibly radiant glow.",
		"size": ["One size"],
		"color": "",
		"brand": "ERNO LASZLO",
		"image": ["sc2022011_1.jpg", "sc2022011_2.jpg"]

	},

	{
		"name": "Brighten Dual Phase Peel",
		"item_number": "sc2022012",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "108.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Thoughtfully formulated with sustainability in mind, this facial scrub exfoliates without the use of microbeads. Step 1 brings gentle physical exfoliation, and Step 2 provides a secondary exfoliation for a smoother, more illuminated complexion.In Step 1, polylactic acid acts as a gentle scrub and skin exfoliator to whisk away dead skin to help refine the complexion. In Step 2, the lactic acid activator provides a secondary exfoliation that leaves skin looking more even-toned. 	Carrot oil, known to protect skin, delivers complexion-conditioning benefits. With this two-part exfoliation, skin is left softened and free from dullness and dead skin, revealing a bright, radiant complexion.",
		"size": ["One size"],
		"color": "",
		"brand": "ERNO LASZLO",
		"image": ["sc2022012_1.jpg", "sc2022012_2.jpg", "sc2022012_3.jpg", "sc2022012_4.jpg"]

	},
	{
		"name": "Soho Sweater",
		"item_number": "ps2022001",
		"inventory": "15",
		"max_temp_celsius": "10",
		"min_temp_celsius": "-10",
		"max_temp_fahrenheit": "50",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "29.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Your canine companion will be on trend and feel cozier than ever in a softly knit sweater to help tame the cold on those brisk morning walks.     100% polyester.Machine wash, line dry",
		"size": ["One size"],
		"color": "Navy Mix",
		"brand": "CANADA POOCH",
		"image": ["ps2022001_1.jpg", "ps2022001_2.jpg", "ps2022001_3.jpg", "ps2022001_4.jpg"]

	},
	{
		"name": "Dog Bed",
		"item_number": "ps2022002",
		"inventory": "5",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "139.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Engineered by the same team behind the award-winning Casper mattress, this beautifully crafted dog bed is specifically crafted to accommodate canine behavior. 	The top surface features excess material that mimics the sensation of pawing at loose earth,while supportive foam bolsters create a safe space for dogs to lay their heads.	Pressure-relieving memory foam makes a comfy bed, and the fortified construction won't sink or sag. Plus, you can take off the cover and toss it in the wash anytime it needs a bit of freshening up.",
		"size": ["S","M","L"],
		"color": "Sand",
		"brand": "CASPER",
		"image": ["ps2022002_1.jpg", "ps2022002_2.jpg"]

	},
	{
		"name": "The Pet Everyday Tote",
		"item_number": "ps2022005",
		"inventory": "15",
		"max_temp_celsius": "10",
		"min_temp_celsius": "-10",
		"max_temp_fahrenheit": "50",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "135.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Take your furbaby everywhere in the comfort and style of this tote that features a padded, fleece-lined compartment for your pet. And there's plenty of pockets to organize stuff for both of you.",
		"size": ["M"],
		"color": "Black",
		"brand": "BÉIS",
		"image": ["ps2022005_1.jpg", "ps2022005_2.jpg", "ps2022005_3.jpg", "ps2022005_4.jpg"]

	},
	{
		"name": "Vanilla Macarons Dog Treats",
		"item_number": "ps2022006",
		"inventory": "13",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "29.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "These scrumptious treats for your pup are made with all-natural, human-grade ingredients because your furry friend deserves the absolute best. They feature oat flour, honey, coconut oil and an all-natural vanilla yogurt filling and have a shelf-life of 12 months with no need for refrigeration.6-count. Vanilla flavor",
		"size": ["One size"],
		"color": "",
		"brand": "BONNE ET FILOU",
		"image": ["ps2022006_1.jpg", "ps2022006_2.jpg", "ps2022006_3.jpg", "ps2022006_4.jpg"]

	},
	{
		"name": "x Disney CozyChic™ Mickey Mouse Pet Sweater",
		"item_number": "ps2022007",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "49.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Keep your pup warm and cozy in a sumptuous, signature-soft sweater done in plush, easy-care chenille with iconic Mickey Mouse embroidery.100% polyester. Machine wash, tumble dry",
		"size": ["XS", "S" ,"M","L","XL"],
		"color": "Cream/ Carbon",
		"brand": "BAREFOOT DREAMS®",
		"image": ["ps2022007_1.jpg", "ps2022007_2.jpg", "ps2022007_3.jpg", "ps2022007_4.jpg"]

	},
	{
		"name": "Small All-Weather Leash",
		"item_number": "ps2022012",
		"inventory": "14",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "55.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "A rugged all-weather leash in coated wg ebbinresists dirt and odors—so it'll keep performing after even the muddiest outdoor adventures. A short-leash adjustment lets you customize the length, while a D-ring in coated carbon steel won't rattle and tolerates ultra-strong pulls.",
		"size": ["One size"],
		"color": "Black",
		"brand": "WILD ONE",
		"image": ["ps2022012_1.jpg", "ps2022012_2.jpg"]

	},

	{
		"name": "Cuddly-Coat Grooming Shampoo",
		"item_number": "ps2022013",
		"inventory": "5",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "25.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Whether your dog is big or small, this mild dog grooming shampoo will effectively cleanse long or short hair. Leave your canine with a clean, fresh feeling until their next playtime. This shampoo effectively removes dirt, debris and odor, leaving behind a light, clean, fresh scent. It's formulated with chamomile flower extract and plant-derived glycerin along with gentle yet effective cleansing ingredients. The pH-balanced formula is gentle enough for a dog's coat, face and skin.",
		"size": ["One size"],
		"color": "",
		"brand": "KIEHL'S SINCE 1851",
		"image": ["ps2022013_1.jpg", "ps2022013_2.jpg"]

	},
	{
		"name": "Cuddly-Coat Grooming Rinse",
		"item_number": "ps2022014",
		"inventory": "3",
		"max_temp_celsius": "45",
		"min_temp_celsius": "0",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "14",
		"city": "",
		"exclude_city": "",
		"price": "20.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "This gentle detangling conditioner helps refresh and soften for an enduring shine between treatments. Formulated for even the most fur-ocious canines, it gently treats and conditions the skin and coat. It contains chamomile flower extract and plant-derived glycerin.",
		"size": ["One size"],
		"color": "",
		"brand": "KIEHL'S SINCE 1851",
		"image": ["ps2022014_1.jpg", "ps2022014_2.jpg"]

	},

	{
		"name": "Voyageur - Joanne Nylon Laptop Carrier",
		"item_number": "it2022001",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "-30",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "-22",
		"city": "",
		"exclude_city": "",
		"price": "245.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Sleek, lightweight nylon and goldtone accents let you leave clunky laptop bags behind so your computer can commute in slimline style. Top handles and an optional, adjustable shoulder/crossbody strap offer convenient carrying options, along with the Add-a-Bag strap that slips over extended luggage handles, allowing you to stack and carry the style on your wheeled luggage.",
		"size": ["One size"],
		"color": "Black",
		"brand": "TUMI",
		"image": ["it2022001_1.jpg","it2022001_2.jpg", "it2022001_3.jpg"]

	},
    {
		"name": "21-Inch Rolling Spinner Suitcase",
		"item_number": "it2022002",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "-30",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "-22",
		"city": "",
		"exclude_city": "",
		"price": "198.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Tough, travel-ready construction defines this rolling suitcase molded from polycarbonate into a sleek, aerodynamic design. Horizontal grooves texture this durable luggage piece that's equipped with 360-degree wheels, a telescoping handle, TSA-approved lock and organizer pockets and straps to secure belongings for the duration of your trip.Zip-around closure with integrated TSA lock.Telescoping pull handle; side and top padded carry handles.Weight limit indicator.Interior zip pockets; weighted compression straps.Polycarbonate/PVC/polyester",
		"size": ["One size"],
		"color": "Navy",
		"brand": "BÉIS",
		"image": ["it2022002_1.jpg","it2022002_2.jpg", "it2022002_3.jpg"]

	},
	{
		"name": "Essential Check-In Large 31-Inch Wheeled Suitcase",
		"item_number": "it2022003",
		"inventory": "12",
		"max_temp_celsius": "45",
		"min_temp_celsius": "-30",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "-22",
		"city": "",
		"exclude_city": "",
		"price": "925.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Trademark RIMOWA grooves mark this sleek packing case, built with a patented Flex-Divider system to keep you organized and cut down on travel headaches.Closure: A TSA-approved locking zipper means reliable security and smart convenience.Exterior features: Patented Multiwheel® technology makes navigating the airport that much easier.Interior features: A well-organized interior ensures easy packing and keeps everything in its place.Special features: Lightweight materials keep you moving without weighing you down.",
		"size": ["One size"],
		"color": "Red",
		"brand": "RIMOWA",
		"image": ["it2022003_1.jpg","it2022003_3.jpg", "it2022003_4.jpg"]

	},
	{
		"name": "Essential Check-In Large 31-Inch Wheeled Suitcase",
		"item_number": "it2022004",
		"inventory": "15",
		"max_temp_celsius": "45",
		"min_temp_celsius": "-30",
		"max_temp_fahrenheit": "113",
		"min_temp_fahrenheit": "-22",
		"city": "",
		"exclude_city": "",
		"price": "239.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Smart faux leather trim touches up a classic duffle bag built from durable tech fabric that stands up to the wear and tear of travel.21\"W x 12\"H x 8 1/2\"D. (Interior capacity: extra-large.) 6\" strap drop; 28\" - 55\" crossbody strap drop.2.8 lb.Meets most international and domestic carry-on size requirements.Two-way top-zip closure.Top carry handles; removable, adjustable shoulder strap.Exterior zip pocket.Interior zip and wall pockets.Polyester with polyurethane trim",
		"size": ["One size"],
		"color": "Black",
		"brand": "TED BAKER LONDON",
		"image": ["it2022004_1.jpg","it2022004_2.jpg", "it2022004_3.jpg","it2022004_4.jpg"]

	},
	{
		"name": "Junction 750 Fill Power Down Packable Parka",
		"item_number": "wc2022025",
		"inventory": "12",
		"max_temp_celsius": "0",
		"min_temp_celsius": "-30",
		"max_temp_fahrenheit": "32",
		"min_temp_fahrenheit": "-25",
		"city": "",
		"exclude_city": "",
		"price": "1199.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": " Wintry weather has met its match in this down-filled parka with rib-knit cuffs, fleece-lined pockets and a host of other utility features. The jacket is wearable as a backpack when you need to have it handy without having it on and features reflective patches to be sure you're always seen in low-light conditions.Removable zip-off hood Interior slip pockets. Lined, with 750-fill-power down fill.100% polyamide with Cordura®-reinforced high-abrasion areas Machine wash, tumble dry",
		"size":  ["XS","S","M","L"],
		"color": "N.Star Wh/ Bl",
		"brand": "CANADA GOOSE",
		"image": ["wc2022025_1.jpg", "wc2022025_2.jpg", "wc2022025_3.jpg", "wc2022025_4.jpg"]

	},
	{
		"name": "Junction 750 Fill Power Down Packable Parka",
		"item_number": "wc2022029",
		"inventory": "12",
		"max_temp_celsius": "0",
		"min_temp_celsius": "-30",
		"max_temp_fahrenheit": "32",
		"min_temp_fahrenheit": "-25",
		"city": "",
		"exclude_city": "",
		"price": "1199.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": " Wintry weather has met its match in this down-filled parka with rib-knit cuffs, fleece-lined pockets and a host of other utility features. The jacket is wearable as a backpack when you need to have it handy without having it on and features reflective patches to be sure you're always seen in low-light conditions.Removable zip-off hood Interior slip pockets. Lined, with 750-fill-power down fill.100% polyamide with Cordura®-reinforced high-abrasion areas .Machine wash, tumble dry",
		"size": ["XS","S","M","L"],
		"color": "Lucent Rose",
		"brand": "CANADA GOOSE",
		"image": ["wc2022029_1.jpg", "wc2022029_2.jpg", "wc2022029_3.jpg", "wc2022029_4.jpg"]

	},	
	{
		"name": "Junction 750 Fill Power Down Packable Parka",
		"item_number": "wc2022033",
		"inventory": "12",
		"max_temp_celsius": "0",
		"min_temp_celsius": "-30",
		"max_temp_fahrenheit": "32",
		"min_temp_fahrenheit": "-25",
		"city": "",
		"exclude_city": "",
		"price": "1150.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": " Wintry weather has met its match in this down-filled parka with rib-knit cuffs, fleece-lined pockets and a host of other utility features. The jacket is wearable as a backpack when you need to have it handy without having it on and features reflective patches to be sure you're always seen in low-light conditions.Removable zip-off hood Interior slip pockets. Lined, with 750-fill-power down fill.100% polyamide with Cordura®-reinforced high-abrasion areas .Machine wash, tumble dry",
		"size": ["XS","S","M","L"],
		"color": "Black",
		"brand": "CANADA GOOSE",
		"image": ["wc2022033_1.jpg", "wc2022033_2.jpg", "wc2022033_3.jpg", "wc2022033_4.jpg"]

	},
	{
		"name": "Langford Slim Fit 625 Fill Power Down Hooded Down Parka",
		"item_number": "mc2022037",
		"inventory": "12",
		"max_temp_celsius": "0",
		"min_temp_celsius": "-30",
		"max_temp_fahrenheit": "32",
		"min_temp_fahrenheit": "-25",
		"city": "",
		"exclude_city": "",
		"price": "1099.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Sure to be a winter-weather staple, this cleanly designed slim-fit parka is styled with a low thigh-length for maximum protection against cold temperatures. The removable hood and cozy 625-fill-power down insulation ensure you'll be toasty warm as you brave harsh conditions.Front two-way zip closure with chin guard and hook-and-loop storm flap . Removable zip hood .Inset rib-knit cuffs.Internal drawcord waist.Front zip pockets with hook-and-loop storm flaps Lined, with 625-fill down insulation.85% polyester, 15% cotton, Dry clean",
		"size": ["XS","S","M","L","XL","XXL","XXXL"],
		"color": "Graphite - Graphite",
		"brand": "CANADA GOOSE",
		"image": ["mc2022037_1.jpg", "mc2022037_2.jpg", "mc2022037_3.jpg", "mc2022037_4.jpg"]

	},	
	{
		"name": "Chilliwack 625 Fill Power Down Hooded Bomber Jacket",
		"item_number": "mc2022042",
		"inventory": "12",
		"max_temp_celsius": "0",
		"min_temp_celsius": "-30",
		"max_temp_fahrenheit": "32",
		"min_temp_fahrenheit": "-25",
		"city": "",
		"exclude_city": "",
		"price": "905.00",
		"sort": "",
		"create_time": "",
		"modify_time": "",
		"description": "Brave the cold in a 625-fill-power down bomber that's topped with a lock-in heat placket and an adjustable tunnel hood for extra cold-shielding capability. A shorter silhouette with a relaxed fit allows this jacket to easily move with your body for even more comfort.Lined, with 625-fill-power down fill.Dry clean.Made in Canada.Two-way front-zip closure with snap storm placket.Extended drawstring hood with removable extension trim.Rib knit waistband and cuffs.Front flap hand-warmer pockets; front slant pockets; sleeve pen pocket; drop-in pocket Water-resistant ,85% polyester, 15% cotton",
		"size": ["XS","S","M","L","XL","XXL","XXXL"],
		"color": "Atlantic Navy",
		"brand": "CANADA GOOSE",
		"image": ["mc2022042_1.jpg", "mc2022042_2.jpg", "mc2022042_3.jpg", "mc2022042_4.jpg"]

	}
	
];

 await ProductsNew.insertMany(productItemNew)
	res.json({
		status: 200
	})
	
})

router.post('/delete', (req, res, next) => {
	console.log("===============")
	console.log(req.body)
	let productItemNew = req.body
	// let newStudent = [{
	// 	id: 'asdqwef',
	// 	description: 'bossyuan是一个有追求的程序员2',
	// 	url: 'beossyuan@qq.com'
	// }]
	ProductsNew.remove(productItemNew, (err) => {
		if (err) return console.log(err)
		res.json({
			status: 200
		})
	})
})

router.get('/query', function(req, res, next) {
	let productItemNew = req.body
	console.log (productItemNew)
   ProductsNew.find({name:/ /}, (err, result) => {
		if (err) return console.log(err)
		res.json({
			status: 200,
			data: result
		})
		console.log(result)
	})

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
	ProductsNew.find({max_temp_fahrenheit:40},{min_temp_fahrenheit:15}, (err, result) => {
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
		url: 'http://127.0.0.1:5050/api/productNewApi/queryProducts'
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
	let productNew = {
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
	ProductsNew.updateOne(conditions, productNew, (err) => {
		if (err) return console.log(err)
		res.json({
			status: 200
		})
	})
})


// find products by brand name
router.get('/search/brands', function(req, res, next) {
	let keyword = req.query.keyword
	console.log(keyword)
	// Regular Expression
	const regex = new RegExp(`${keyword}`, 'i');
	ProductsNew.find({brand: {"$regex": regex} }, (err, result) => {
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
	const regex = new RegExp(`${keyword}`, 'i');
	ProductsNew.find({name: {"$regex": regex} }, (err, result) => {
			if (err) return console.log(err)
			res.json({
					status: 200,
					data: result
			})
			console.log(result)
	})

})

//find products for recommendation using minimum and maximum temperature
router.get('/recommendation', function (req, res, next) {
	let minimum = req.query.minimum;
	let maximum = req.query.maximum;
	console.log('FOUND: ' + minimum);
	ProductsNew.find( { min_temp_celsius: { $lte: minimum}, max_temp_celsius: { $gte: maximum} }, (err, result) => {
			console.log('RESLT:')
			console.log(result)
			if (err) return console.log(err);
			res.json({
					status: 200,
					data: result
			});
	})
});




export default router


