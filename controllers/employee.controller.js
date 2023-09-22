import Employee from "../models/Employees.js";

const crtlEmployee = {};


crtlEmployee.create = async (req,res)=>{
    const {name,lastname,dni,adress,contact,} = req.body;
    try {
        const find = await Employee.findOne({dni:dni});
        if(find){
            throw({
                status:400,
                message:'El empleado ya se encuentra en base de datos!'
            })};
            const employee = new Employee({name,lastname,dni,adress,contact})   
        
            if(!employee){
            throw({
                status:400,
                message:'Error al crear el Empleado!'
            })};
        await employee.save();
        return res.status(201).json({employee,mmesage:'Empleado creado con éxito!'})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error interno del servidor!'})
    }};

crtlEmployee.fingAll = async (req,res) =>{
    try {
        
        const employees = await Employee.find();
        if(!employees){
            throw({
                status:404,
                message:'No hay empleados cargados en base de datos!'
            })
        };
        return res.status(200).json({employees});

    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error interno del servidor!'})
    }
};
crtlEmployee.find = async(req,res)=>{
    const {dni} = req.params;
    try {
        const findEmployee = await Employee.findOne({dni:dni});
        if(!findEmployee){
            throw({
                status:404,
                message:'El empleado buscado no existe en base de datos!'
            })};
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error interno del servidor!'})
}};

export default crtlEmployee;