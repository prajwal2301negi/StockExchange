import express from 'express';

import { buyStock,generateAi,getStocks,sellStock } from '../controllers/stock.controllers.js';

import { isUserAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post('/buyStock',isUserAuthenticated,buyStock);
router.post('/sellStock',isUserAuthenticated,sellStock);
router.get('/getStockInfo',isUserAuthenticated,getStocks)
router.get('/getAiResponse',isUserAuthenticated,generateAi);

export default router;