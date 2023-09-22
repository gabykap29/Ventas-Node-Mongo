import express from 'express';
import crtlEmployee from '../controllers/employee.controller.js';
import { authCtrl } from '../controllers/auth.controller.js';
import { crtlProduct } from '../controllers/product.controllers.js';
import { crtlSales } from '../controllers/sales.controller.js';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Todo Funcionando!')
});




//apis
router.post('/api/register',authCtrl.register)

router.post('/api/employees/create',crtlEmployee.create);
router.get('/api/employees',crtlEmployee.fingAll);
router.get('api/employe/:id',crtlEmployee.find);

//api Productos
router.post('/api/products/create',crtlProduct.create);
router.get('/api/products',crtlProduct.findAll);
router.get('/api/products/:id',crtlProduct.find);


//api Ventas

router.post('/api/sales/create',crtlSales.create);

export default router;