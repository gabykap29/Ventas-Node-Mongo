import express from 'express';
import crtlEmployee from '../controllers/employee.controller.js';
import { authCtrl } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Todo Funcionando!')
});




//apis
router.post('/api/employees/create',crtlEmployee.create);
router.get('/api/employees',crtlEmployee.fingAll);
router.get('api/employe/:id',crtlEmployee.find);
router.post('/api/register',authCtrl.register)
export default router;