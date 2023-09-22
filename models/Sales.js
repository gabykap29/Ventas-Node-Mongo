import { Schema,model } from "mongoose";

const schemaSales = new Schema({
    productId:{
        type:Schema.Types.ObjectId, ref:'Product',
        required:true,
    },
    userId:{
        type:Schema.Types.ObjectId,ref:'User'
    },
    quantityProducts:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    totalPrice:{
        type:Number,
        required:true,
    },
},
{
    timestamps:true,
});

const Sales = model('Sales',schemaSales);
export default Sales;