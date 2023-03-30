const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');


router.get('/', (req, res) => {
    res.render('mainpag');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/Dermatologos', (req, res) => {
    res.render('Dermatologos');
});

router.get('/Fisios', (req, res) => {
    res.render('Fisios');
});

router.get('/NosotrosInfo', (req, res) => {
    res.render('Page_NosotrosInfo');
});

router.get('/Formulario', (req, res) => {
    res.render('Formulario');
});

//productos 
router.get('/PageProductos', (req, res) => {
    conexion.query('SELECT * FROM productos',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('PageProductos',{productos:results});
        
        }
    })
});




//Rutas hechas por jesus

//conexion a la base de datos y para que funcionen las consultas y cruds
const conexion = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

//catalogo de tratamientos que se le mostrara al cliente
router.get('/catalogotrat',(req,res)=>{

    conexion.query('SELECT * FROM tratamientos',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('catalogotrat',{results:results});
        }
    })
});

//aca van las rutas para editar, crear y borrar tratamientos
//crud control de los tratamientos 
router.get('/controltrat',(req,res)=>{

    conexion.query('SELECT * FROM tratamientos',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('controltrat',{results:results});
        }
    })
});

//crear tratamientos
router.get('/create',(req,res)=>{
    res.render('create');
});

//editar tratamientos
router.get('/edit/:id',(req,res)=>{
    const id = req.params.id; 
    conexion.query('SELECT * FROM tratamientos WHERE id=?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit',{tratamiento:results[0]});
        }
    })    
});

//borrar tratamientos 
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM tratamientos WHERE id = ?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{           
            res.redirect('/controltrat');         
        }
    })
});



//metodos del crud en el controller crud
const crud = require('../controllers/crud');

router.post('/save', crud.save);   
router.post('/update', crud.update);  

module.exports = router;