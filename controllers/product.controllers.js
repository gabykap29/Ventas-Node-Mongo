import Product from "../models/Product.js";

export const crtlProduct = {};

crtlProduct.create = async (req,res) =>{
    const {name,quantity,cost,brand,} = req.body;

    try {
        
        const newProduct = new Product({name,quantity,cost,brand});
        if(!newProduct){
            throw({
                status:400,
                message:'Error al crear el Producto!'
            })};
        await newProduct.save();
        return res.status(201).json({newProduct,message:'Producto creado con éxito!'})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error interno del servidor!'})
    }};

crtlProduct.findAll = async (req,res)=>{
    try {
        const products = await Product.find();
        if(!products){
            throw({
                status:404,
                message:'No hay productos cargados!'
            })};
        return res.status(200).json({products});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error interno del servidor!'});
    }};

crtlProduct.find = async(req,res)=>{
    const {id}  = req.params;
    try {
        const product = await Product.findOne({_id:id});
         if(!product){
            throw({
                status:(404),
                message:'El producto no existe!'
            })};
            return res.status(200).json({product});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error interno del servidor!'});
    }
};
crtlProduct.update = async(req,res)=>{
    const {id} = req.params;
    const {name,quantity,cost,brand} =  req.body;
    try {
        

    } catch (error) {
        
    }
}