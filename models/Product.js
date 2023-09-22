import { Schema,model } from "mongoose";

const schemaProduct = new Schema({
    name:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    cost:{
        type:Number,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
},{
    timestamps:true,
});

const Product = model('Product',schemaProduct);
export default Product;