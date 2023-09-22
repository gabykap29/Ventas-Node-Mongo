import Sales from '../models/Sales.js';
import Product from '../models/Product.js';
export const crtlSales = {};

crtlSales.create = async (req,res)=>{
    const {productId,userId,quantityProducts,date,totalPrice,} = req.body;

    try {
        const findProduct = await Product.findOne({_id:productId});
        if(quantityProducts > findProduct.quantity){
            throw({
                status:400,
                message:'No hay suficientes productos para vender!'
            })};
        const newSales = new Sales({productId,userId,quantityProducts,date,totalPrice})
        if(!newSales){
            throw({
                status:400,
                message:'Error al guardar la venta realizada!'
            })};
        await newSales.save();
        return res.status(201).json({newSales,message:'Venta guardada con éxito!'})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error interno del servidor!'})
    }
};