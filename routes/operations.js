const { Router } = require('express')
const { get } = require('./main')
const router = Router()
const controller = require('../controllers/operations')
const jwtCheck = require('../middleware/jwtCheck')

router.post('/operations/add', controller.add)
router.get('/operations/get', jwtCheck, controller.getLastGames)
router.post('/operations/user', jwtCheck, controller.getUserOperation)

module.exports = router
