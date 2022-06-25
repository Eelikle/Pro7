const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController')
// TODO add import for validateToken middleware


router.post('/signup', userController.signUp);

router.post('/login', userController.login)

router.get('/', userController.getAll)
// TODO remote this fix me comment if done
// FIXME this route is incorrect, remove "/user" because it is already in the base URL (see app.js line #18)
// TODO add middleware 'validateToken' to this route (2nd arguement)
router.delete("/:id", userController.delete);


module.exports = router;