const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

        
 
// rutas de administrador
router.get('/admin', (req, res) => {
  mysqlConnection.query('SELECT * FROM menu_rutas WHERE tp = 2', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});


// rutas de administrador
router.get('/user', (req, res) => {
  mysqlConnection.query('SELECT * FROM menu_rutas WHERE tp = 1', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});


// temas
router.put('/temas/:id', (req, res) => {
  const { url } = req.body;
  const { id } = req.params;
  mysqlConnection.query ('UPDATE temas SET ? WHERE id = 1', [req.body, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Tema Actualizado'});
    } else {
      console.log(err);
    }
  });
});

router.get('/', (req, res) => {
  mysqlConnection.query('SELECT url FROM temas WHERE id = 1 ', (err, rows) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});


// usuarios
router.get('/usuarios', (req, res) => {
  mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});



// bebidas
router.delete('/bebidas/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM bebidas WHERE idbebidas = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Bebidas eliminada'});
    } else {
      console.log(err);
    }
  });
});

router.get('/bebidas', (req, res) => {
  mysqlConnection.query('SELECT * FROM bebidas', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

router.get('/bebidas/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM bebidas WHERE idbebidas= ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});


router.put('/bebidas/:idbebidas', (req, res) => {
  const { nombre, precio } = req.body;
  const { idbebidas } = req.params;
  mysqlConnection.query ('UPDATE bebidas SET ? WHERE idbebidas= ?', [req.body, idbebidas], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Bebida Actualizada'});
    } else {
      console.log(err);
    }
  });
});

router.post('/bebidas', (req, res) => {
  const { nombre, precio } = req.body;
  mysqlConnection.query ('INSERT INTO bebidas SET ?', [req.body], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Bebida Ingresada'});
    } else {
      console.log(err);
    }
  });
});





module.exports = router;
