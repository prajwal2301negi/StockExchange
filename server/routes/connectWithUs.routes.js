import express from 'express';
import {   isUserAuthenticated } from '../middlewares/auth.js';

import { createConnectWithUs, getAllConnects } from '../controllers/connectWithUs.controllers.js';

const router = express.Router();

router.post('/createConnectMessage', createConnectWithUs);
router.get('/getConnectMessages',getAllConnects);


export default router;