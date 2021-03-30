const { Router } = require('express')
const router = Router()
const controller = require('../controllers/menu')


router.get('/menu', controller.getActiveMenu)
router.get('/menu/all', controller.getAllMenu)
router.post('/menu', controller.addItemMenu)
router.put('/menu', controller.changeitemMenu)
router.delete('/menu', controller.deleteItemMenu)

module.exports = router