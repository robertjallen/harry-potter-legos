const legos = require('./legos-model')
const router = require('express').Router();


///////////////
//READ 
//////////////

router.get('/', async (req, res, next) => {
  try {
		res.json(await legos.find())
	} catch(err) {
		next(err)
	}
});


//////////////////
//   CREATE
/////////////////

router.post("/", async (req, res, next) => {
	try {
		const lego = await legos.add(req.body)
		res.status(201).json(lego)
	} catch(err) {
		next(err)
	}
})

module.exports = router;
