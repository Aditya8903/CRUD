const express = require('express');

const { home ,createUser , getUsers ,deleteUser , editUser} = require('../controllers/userController');

const router = express.Router();

router.get( '/', home );
router.post( '/signup' , createUser);
router.get( '/getUsers' , getUsers);
router.delete('/deleteuser/:Hululu',deleteUser)
router.put('/edituser/:Hululu',editUser)
module.exports = router