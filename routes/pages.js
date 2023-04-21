const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');
const bcrypt = require('bcryptjs');


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

router.get('/pagenosotrosinformacion', (req, res) => {
    res.render('pagenosotrosinformacion');
});

router.get('/edituser', (req, res) => {
    res.render('edituser');
});

router.get('/pdcadmin', (req, res) => {
    res.render('edituser');
});

const controller = require('../controllers/profile');

router.get('/profile', controller.profile);

router.get('/profile/editProfile', controller.editProfile);
router.post('/updateProfile', controller.updateProfile);

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) throw err;
      
      res.redirect('/');
    });
  });

const backupController = require('../controllers/backupController');

router.get('/backupindex', backupController.showBackups);
router.post('/backup', backupController.createBackup);
router.get('/backup/:name', backupController.downloadBackup);
router.delete('/backup/:name', backupController.deleteBackup);

module.exports = router;

router.get('/index', (req, res) => {
const query = 'SELECT * FROM usuarios';
conexion.query(query, (err, result) => {
    if (err) throw err;
    res.render('index', { usuarios: result });
});
});

router.get('/add', (req, res) => {
res.render('add');
});

router.post('/add', async (req, res) => {
const { us_nombre, us_correo, us_password, us_passwordconfirm, us_direccion, us_telefono, us_documento } = req.body;

if (us_password !== us_passwordconfirm) {
    return res.status(400).send('Passwords do not match');
}

conexion.query('SELECT * FROM usuarios WHERE us_correo = ?', [us_correo], async (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
    return res.render('add', { message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(us_password, 10);

    const query = 'INSERT INTO usuarios SET ?';
    const usuario = { us_nombre, us_correo, us_password: hashedPassword, us_direccion, us_telefono, us_documento };
    conexion.query(query, usuario, (err, result) => {
    if (err) throw err;
    res.redirect('/index');
    });
});
});

router.get('/edit/:idusuarios', (req, res) => {
    const { idusuarios } = req.params;
    const query = 'SELECT * FROM usuarios WHERE idusuarios = ?';
    conexion.query(query, [idusuarios], (err, result) => {
      if (err) throw err;
      res.render('edituser', { usuario: result[0] });
    });
  });

router.post('/update/:idusuarios', (req, res) => {
const { idusuarios } = req.params;
const { us_nombre, us_correo, us_password, us_direccion, us_telefono, us_documento } = req.body;
const query = 'UPDATE usuarios SET us_nombre = ?, us_correo = ?, us_password = ?, us_direccion = ?, us_telefono = ?, us_documento = ? WHERE idusuarios = ?';
conexion.query(query,[us_nombre,us_correo ,us_password ,us_direccion ,us_telefono ,us_documento,idusuarios],(err,result)=>{
    if(err) throw err;
    res.redirect('/index');
});
});

router.get('/delete/:idusuarios', (req,res)=>{
    const {idusuarios} = req.params;
    const query='DELETE FROM usuarios WHERE idusuarios=?';
    conexion.query(query,[idusuarios],(err,result)=>{
        if(err) throw err;
        res.redirect('/index');
    });
});

module.exports=router;


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

//ruta para solicitar tratamientos 
router.get('/solicitartrat/:id',(req,res)=>{
    const id = req.params.id; 
    conexion.query('SELECT * FROM tratamientos, horariostrat WHERE tratamientos.id=? AND horariostrat.fk_tratamiento=? and horariostrat.Disponible=1',[id, id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('solicitartrat',{tratamiento:results});
        }
    })    
});

//agendar cita asesor
const citaases = require('../controllers/citaases');
router.post('/agendarases', citaases.agendarases);   

//agendar cita tratamiento
const citatrat = require('../controllers/citatrat');
router.post('/agendartrat', citatrat.agendartrat);   

 
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


router.get('/cancelarcita/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM citatratamiento WHERE citatratid = ?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{           
            res.redirect('/tuscitastrat');         
        }
    })
});

//citas asesores
//formulario para enviar los datos del usuario
router.get('/ListaAsesores', (req, res) => {
    conexion.query('SELECT * FROM asesores, especialidades WHERE fk_especialidad=id_especialidad ORDER BY id_asesor ASC;',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('ListaAsesores',{results:results});
        }
    })
});

//ruta para agendar cita con asesor
router.get('/solicitarases/:id',(req,res)=>{
    const id = req.params.id; 
    conexion.query('SELECT * FROM asesores, horariosase WHERE asesores.id_asesor=? AND horariosase.fk_asesor=? and horariosase.hor_ase_disponible=1',[id, id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('solicitarases',{asesor:results});
        }
    })    
});

//Tus citas
router.get('/tuscitas', (req, res) => {
    res.render('tuscitas');
});
//citas tratamientos
router.get('/tuscitastrat',(req,res)=>{
    const idusuario=req.session.userId;
    conexion.query('SELECT * FROM citatratamiento,horariostrat,tratamientos,usuarios WHERE citatratamiento.fk_horariotrat=horariostrat.id and horariostrat.fk_tratamiento=tratamientos.id and citatratamiento.fk_usuario= usuarios.idusuarios and citatratamiento.fk_usuario=?;',[idusuario],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('tuscitastrat',{results:results});
        }
    })
});
//citas asesores
router.get('/tuscitasases',(req,res)=>{
    const idusuario=req.session.userId;
    conexion.query('SELECT * FROM citaasesor,horariosase,asesores,usuarios WHERE citaasesor.fk_horarioase=horariosase.id_horarioase and horariosase.fk_asesor=asesores.id_asesor and citaasesor.fk_usuario= usuarios.idusuarios and citaasesor.fk_usuario=?;',[idusuario],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('tuscitasases',{results:results});
        }
    })
});
router.get('/cancelarasesoria/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM citaasesor WHERE citaasesid = ?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{           
            res.redirect('/tuscitasases');         
        }
    })
});
//citas asesores(pendiente)
//metodos del crud en el controller crud
const crud = require('../controllers/crud');

router.post('/save', crud.save);   
router.post('/update', crud.update);  

module.exports = router;

//otros roles:
//asesor
//vista inicial
router.get('/pdcasesores', (req, res) => {
    res.render('pdcasesores');
});

//Clientes

//Horarios

//Citas 
//Tus citas
//Agendar citas


//ADMIN
router.get('/pdcadmin', (req, res) => {
    res.render('pdcadmin');
});
