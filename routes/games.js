const { Router } = require('express')
const router = Router()
const controller = require('../controllers/games')


router.get('/games', controller.getAllGame)
router.get('/games/active', controller.getACctiveGame)
router.post('/games', controller.add)
router.delete('/games', controller.delete)

module.exports = router