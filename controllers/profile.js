const mysql = require('mysql');

const db = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.profile = (req, res) => {
    
    db.query("SELECT * FROM usuarios WHERE idusuarios = ?", [req.session.userId], (err, resultados) => {
        if (err) {
            console.log(err);
        }
        if (resultados.Length == 0) {
            return res.status(404).render('profile', {
                message: 'No se encontró el usuario'
            });
        } else {
            const { us_nombre, us_correo, us_telefono, us_direccion, us_documento } = resultados[0];
            res.render('profile', { us_nombre, us_correo, us_telefono, us_direccion, us_documento });
        }
    });
}

