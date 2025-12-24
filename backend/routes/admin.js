
import express from "express";
import createAdmin from '../controller/admin/createAdmin.js'
import getAllAdmins from '../controller/admin/getAllAdmin.js'
import  getAdminById from '../controller/admin/getAdminById.js'
import  updateAdmin from '../controller/admin/updateAdmin.js'
import  deleteAdmin from '../controller/admin/deleteAdmin.js'
import  adminLogin from '../controller/admin/login.js'
import admin_auth_middleware from '../middleware/admin_auth_middleware.js'


const router = express.Router();

router.post("/login", adminLogin);     
router.post("/", admin_auth_middleware, createAdmin);        
router.get("/", admin_auth_middleware, getAllAdmins);         
router.get("/:id", admin_auth_middleware, getAdminById);      
router.put("/:id",admin_auth_middleware, updateAdmin);       
router.delete("/:id",admin_auth_middleware, deleteAdmin);    

export default router;



