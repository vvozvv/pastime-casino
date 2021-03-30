const { Router } = require('express')
const router = Router()
const controller = require('../controllers/user')

router.get('/user', controller.get);
router.post('/user/coin', controller.coin);

module.exports = router