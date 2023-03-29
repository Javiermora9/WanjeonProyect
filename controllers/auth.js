const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.register = (req, res) => {

    const {name, email, password, passwordconfirm, address, phone, document} = req.body;
    if (password!== passwordconfirm) {
        return res.status(400).send("passwords do not match");
    }

    db.query("SELECT * FROM usuarios WHERE email =?", [email], async (err, resultados) => {
        if (err) {
            console.log(err);
            
        }
        if (resultados.length > 0) {
            return res.render('register', {
                message: 'El email ya esta registrado'
            });
        } else if (password!== passwordconfirm) {
            return res.render('register', {
                message: 'las contraseñas no coinciden'
            });
        }
        
        let hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);


    })
    db.query("INSERT INTO usuarios SET ?", {name: name, email: email, password: hashedPassword, direccion: address, telefono: phone, documento: document}, (err, resultados) => {
        if (err) {
            console.log(err);
        }else {
            return res.redirect('login', {
                message: 'Usuario registrado'
            });
        }
    })



    exports.login = (req, res) => {
        const { email, password } = req.body;
    
        db.query("SELECT * FROM usuarios WHERE email = ?", [email], async (err, resultados) => {
            if (err) {
                console.log(err);
            }
            if (resultados.length == 0 || !(await bcrypt.compare(password, resultados[0].password))) {
                return res.status(401).render('login', {
                    message: 'El email o la contraseña son incorrectos'
                });
            } else {
                // Aquí puedes manejar el inicio de sesión exitoso
                res.send(`Bienvenido ${resultados[0].name}!`);
            }
        });
    }
}