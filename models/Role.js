import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";

const schemaRole = new Schema({
    name:{
        type:String
    },
});

const Role = model('Role',schemaRole);

export async function initializeDefaultRoles() {
    try {
      // Verificar si los roles ya existen
      const adminRole = await Role.findOne({ name: 'admin' });
      const vendedorRole = await Role.findOne({ name: 'vendedor' });
  
      // Crear los roles si no existen
      if (!adminRole) {
        await Role.create({ name: 'admin', description: 'Rol de administrador' });
      }
      if (!vendedorRole) {
        await Role.create({ name: 'vendedor', description: 'Rol de vendedor' });
      }
      console.log('Roles por defecto cargados!');
    } catch (error) {
      console.error('Error al inicializar roles:', error);
    }
  }


export default Role;