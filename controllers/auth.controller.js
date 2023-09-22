import User from "../models/Users.js";
import bcript from 'bcryptjs';

export const authCtrl = {};

authCtrl.register = async (req,res)=>{
    const {_id,username,pass,roleId,} = req.body;

    try {
        
        // const findUsername = await User.find(username);
        // if(findUsername){
        //     throw({
        //         status:400,
        //         message:'El nombre de usuario ya existe!'
        //     })};

        const salt = await bcript.genSalt(0);
        const passHash = await bcript.hash(pass,salt)
        const user = new User({employeeId:_id,username,pass:passHash,roleId});
        if(!user){
            throw({
                status:400,
                message:'Error al crear el usuario!'
            })};
        await user.save();
        return res.status(201).json({user})
    } catch (error) {
        console.log(error);
    }
}