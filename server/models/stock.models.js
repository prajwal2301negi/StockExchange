import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    stockPrice:{
        type:Number,
    },
    quantity: {
        type: Number,
    },
    total:{
        type:Number,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    buySell:{
        type:String,
        enum: ['buy', 'sell'],
    }
},{
    timestamps: true,
})

const stock = mongoose.model('Stock', stockSchema);
export default stock;