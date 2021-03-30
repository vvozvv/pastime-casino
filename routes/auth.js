const { Router } = require('express')
const router = Router()
const passport = require('passport')
const controllers = require('../controllers/auth')


router.post('/login', controllers.login);
router.post('/register', controllers.register)
router.get('/auth', passport.authenticate('jwt', {session: false}), controllers.auth)
router.post('/refresh', controllers.refreshToken)
router.post('/logout', controllers.logout)


module.exports = router
