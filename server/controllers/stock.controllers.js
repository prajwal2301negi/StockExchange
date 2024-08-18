import Stock from '../models/stock.models.js';
import User from "../models/user.models.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import ErrorHandler from "../utils/errorMiddleware.js";
import client from '../database/redisClient.js'
import { GoogleGenerativeAI } from "@google/generative-ai";

// Here we are recording only latest Transactions of user

// export const buyStock = asyncErrorHandler(async (req, res, next) => {
//     const user = req.user;
//     const userId = user._id;
//     const { name, price, quantity } = req.body;

//     if (!name || !price || !quantity) {
//         return next(new ErrorHandler("Fill the credentials", 400));
//     }

//     const findUser = await User.findById(userId).populate('stock');
//     if (!findUser) {
//         return next(new ErrorHandler("User not found", 404));
//     }

//     const existingStock = await Stock.findOne({ user: userId, name });

//     const totalCost = price * quantity;

//     if (findUser.balance < totalCost) {
//         return next(new ErrorHandler("Insufficient balance", 400));
//     }

//     if (!existingStock) {
//         // Purchase new stock
//         const newStockPurchase = new Stock({
//             name,
//             price,
//             total:quantity,
//             quantity,
//             user: userId,
//             buySell: 'buy',
//         });

//         findUser.balance -= totalCost;
//         await findUser.save();
//         await newStockPurchase.save();

//         return res.status(201).json({ success: true, message: "Stock purchased successfully", stock: newStockPurchase });
//     } else {
//         // Update existing stock quantity
//         console.log("total from db",existingStock.total);
//         const value = existingStock.total + Number(quantity);
     
//         console.log("total new",value )
//         await existingStock.deleteOne()
        
//         const newStockPurchase = new Stock({
//             name,
//             price,
//             total:value,
//             quantity,
//             user: userId,
//             buySell: 'buy',
//         });
        
//         await newStockPurchase.save();

//         findUser.balance -= totalCost;
//         await findUser.save();

//         return res.status(200).json({
//             success: true,
//             message: "Stock purchased successfully",
//             stock: existingStock,
//         });
//     }
// });

export const buyStock = asyncErrorHandler(async (req, res, next) => {
    const user = req.user;
    const userId = user._id;
    const { name, price, quantity } = req.body;

    if (!name || !price || !quantity) {
        return next(new ErrorHandler("Please fill in all the required fields", 400));
    }

    const findUser = await User.findById(userId).populate('stock');
    if (!findUser) {
        return next(new ErrorHandler("User not found", 404));
    }

    const existingStock = await Stock.findOne({ user: userId, name });

    const totalCost = Number(price) * Number(quantity);

    if (findUser.balance < totalCost) {
        return next(new ErrorHandler("Insufficient balance", 400));
    }

    if (!existingStock) {
        // Purchase new stock
        const newStockPurchase = new Stock({
            name,
            price: Number(price),
            total: Number(quantity),
            quantity: Number(quantity),
            user: userId,
            stockPrice:price,
            buySell: 'buy',
        });

        findUser.balance -= totalCost;
        await newStockPurchase.save();
        await findUser.save();

        return res.status(201).json({ 
            success: true, 
            message: "Stock purchased successfully", 
            stock: newStockPurchase 
        });
    } else {
        // Update existing stock quantity
        existingStock.stockPrice = Number(price);
        existingStock.quantity += Number(quantity);
        existingStock.total += Number(quantity);
        existingStock.price = (existingStock.price * existingStock.quantity + Number(price) * Number(quantity)) / (existingStock.quantity + Number(quantity));

        findUser.balance -= totalCost;
        await existingStock.save();
        await findUser.save();

        return res.status(200).json({
            success: true,
            message: "Stock purchased successfully",
            stock: existingStock,
        });
    }
});


export const sellStock = asyncErrorHandler(async (req, res, next) => {
    const user = req.user;
    const userId = user._id;
    const { name, price, quantity } = req.body;

    if (!name || !price || !quantity) {
        return next(new ErrorHandler("Please fill in all the required fields", 400));
    }

    const findUser = await User.findById(userId).populate('stock');
    if (!findUser) {
        return next(new ErrorHandler("User not found", 404));
    }

    const findStock = await Stock.findOne({ name, user: userId });
    if (!findStock) {
        return next(new ErrorHandler("Stock not found", 404));
    }

    findStock.stockPrice = price;

    const availableQuantity = Number(findStock.total);
    const requestedQuantity = Number(quantity);

    if (availableQuantity < requestedQuantity) {
        return next(new ErrorHandler("Insufficient stock quantity", 400));
    }

    // Update the user's balance
    const saleAmount = Number(price) * requestedQuantity;
    findUser.balance += saleAmount;

    // Update or delete the stock record
    if (availableQuantity === requestedQuantity) {
        // If selling all shares, remove the stock record
        await findStock.deleteOne();
        await findUser.save();
        
        return res.status(200).json({
            success: true,
            message: "All shares sold, no stock left for this symbol",
            balance: findUser.balance,
        });
    } else {
        // If selling partial shares, update the stock quantity
        findStock.total -= requestedQuantity;
        
        await findStock.save();
        await findUser.save();

        return res.status(200).json({
            success: true,
            message: 'Stock sold successfully',
            stock: findStock,
            balance: findUser.balance,
        
        });
    }
});



// export const sellStock = asyncErrorHandler(async (req, res, next) => {
//     const user = req.user;
//     const userId = user._id;
//     const { name, price, quantity } = req.body;

//     if (!name || !price || !quantity) {
//         return next(new ErrorHandler("Fill the credentials", 400));
//     }

//     const findUser = await User.findById(userId).populate('stock');
//     if (!findUser) {
//         return next(new ErrorHandler("User not found", 404));
//     }

//     const findStock = await Stock.findOne({ name, user: userId });
//     if (!findStock) {
//         return next(new ErrorHandler("Stock not found", 404));
//     }

//     let availableQuantity = findStock.total;
//     console.log("totalstocks from db",availableQuantity)
//     const requestedQuantity = quantity;

//     if (availableQuantity < requestedQuantity) {
//         return next(new ErrorHandler("Insufficient quantity", 400));
//     }

//     // Update balance
//     findUser.balance += price * requestedQuantity;
//     await findUser.save();

//     // Update stock quantity or delete if all shares are sold
//     if (availableQuantity === requestedQuantity) {
//         await findStock.deleteOne();
//         return res.status(200).json({message:"So Stock left of current symbol"})
//     } else if(availableQuantity> requestedQuantity) {
//         const value = availableQuantity - requestedQuantity;
//         console.log("after purchase total", availableQuantity)
//     }
//     await findStock.deleteOne()

//     // Record the sale
//     const userStockSell = new Stock({
//         name,
//         price,
//         quantity:requestedQuantity,
//         user: userId,
//         total:value,
//         buySell: 'sell',
//     });

//     await userStockSell.save();

//     return res.status(200).json({
//         success: true,
//         message: 'Stock sold successfully',
//         stock: userStockSell,
//     });
// });



export const getStocks = asyncErrorHandler(async (req, res, next) => {
    const user = req.user;
    const userId = user._id;
    const stocks = await Stock.find({ user: userId });
    if (!stocks) {
        return next(new ErrorHandler("No stocks found", 404));
    }
    return res.status(200).json({ stocks, message: "Stocks.." });
})


export const generateAi = asyncErrorHandler(async (req, res, next) => {
    const userId = req.user._id;
    const findStock = await Stock.find({ user: userId });

    const Your_API_Key = process.env.API_KEY;
    const genAI = new GoogleGenerativeAI(Your_API_Key);

    if (!findStock) {
        return next(new ErrorHandler("No stocks found", 404));
    }
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const stocks = findStock.map(stock => stock.name);
    const stocksPrice = findStock.map(stockprice => stockprice.price);
    const stocksQuantity = findStock.map(stockquantity => stockquantity.total);
    const stockBuySell = findStock.map(stockbuySell=> stockbuySell.buySell) 
   

    const prompt = `Here are my ${stocks} list with quantity-${stocksQuantity}. Tell me about my portfolio. Also, suggest me better investments in the future related to my stocks and other available stocks in the market. Do not ask for the value of portfolio and other stuff not provided. Also explain the suggestion you are providing`;

    const result = await model.generateContent(prompt);
    const rawResponseText = result.response.text();
    const text = formatResponse(rawResponseText);
    
    return res.status(200).json({ message: "AI Generated content", text })

});

function formatResponse(responseText){
    // Replace some patterns to make the text more readable
    return responseText
    .replace(/\*\*\s*/g, '<p>')        // Replace '** ' with '<b>'
    .replace(/\s*\*\*-/g, '</p>')      // Replace ' **-' with '</b>'
    .replace(/-\s*/g, '<li>')          // Replace '- ' with '<li>'
    .replace(/\*\*-+\s*/g, '</li>')    // Replace '**-' at the start of lines with '</li><li>'
    .replace(/\n/g, '<br>')            // Replace newlines with '<br>'
    .replace(/<\/li><br><li>/g, '</li><li>')  // Remove any <br> tags between <li> elements
    .replace(/<\/li><br>/g, '</li>')   // Remove trailing <br> after the last list item
    .replace(/\*\*\*/, '<br>'); 
  }