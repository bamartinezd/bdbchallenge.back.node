const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

router.get('/api/employee', (req, res) => {
  mysqlConnection.query('SELECT * FROM employee', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

router.get('/api/employee/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query(`SELECT * FROM employee WHERE id = ${id}`, (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      res.json({status: `Ha ocurrido un error: ${err}`});
    }
  });
});

router.post('/api/employee/', (req, res) => {
  const {id, name, position,salary, boss_id} = req.body;
  mysqlConnection.query(`INSERT INTO employee (id,name,position,salary,boss_id) values (${id},'${name}','${position}',${salary},${boss_id})`, (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Empleado almacenado satisfactoriamente.'});
    } else {
      res.json({status: `Ha ocurrido un error: ${err}`});
    }
  });

});

module.exports = router;
