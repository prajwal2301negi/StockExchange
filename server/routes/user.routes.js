import express from 'express';

import { deleteUser, getParticularUser, logOutUser, loginUser, registerUser, updateUserDetails, updateUserPassword } from '../controllers/user.controllers.js';
import { isUserAuthenticated} from '../middlewares/auth.js'


import rateLimit from 'express-rate-limit';

const router = express.Router();

const registerLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 100 requests per windowMs
    message: "Too many accounts created from this IP, please try again after 15 minutes"
  });


  const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 100 requests per windowMs
    message: "Too many accounts created from this IP, please try again after 15 minutes"
  });



router.post('/registerUser',registerLimiter,registerUser)
router.post('/loginUser',loginLimiter,loginUser);
router.get('/logoutUser',isUserAuthenticated,logOutUser);

router.delete('/deleteUser',isUserAuthenticated,deleteUser);

router.get('/getUserProfile',isUserAuthenticated,getParticularUser);
// router.get('/getUsers',isAuthenticated,getUsers);

router.put('/updateUserDetails',isUserAuthenticated,updateUserDetails);
router.put('/updateUserPassword',isUserAuthenticated,updateUserPassword);


export default router;