import { Schema, model } from "mongoose";

const schemaEmployee = new Schema({
    name:{
        type:String,
        requred:true,
    },
    lastname:{
        type:String,
        requred:true,
    },
    dni:{
        type:String,
        required:true,
    },
    adress:{
        type:String,
        required:true,
    },
    contact:{
        type:[]
    },
},{
    timestamp:true,
});

const Employee = model('Employee',schemaEmployee);
export default Employee;
