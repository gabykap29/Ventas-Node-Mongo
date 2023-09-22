import { Schema,model } from "mongoose";


const schemaUser = new Schema({
    username:{
        type:String,
        required:true,
    },
    pass:{
        type: String,
        required:true,
    },
    roleId:{
        type: Schema.Types.ObjectId, ref:'Role'
    },
    employeeId:{
        type: Schema.Types.ObjectId, ref:'Employee'
    },
    isMontEmployee:{
        type:Boolean,
        default:false,
    }
},{
    timestamps:true
});

const User = model('User',schemaUser);
export default User;