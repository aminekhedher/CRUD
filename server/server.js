const express =  require("express");
const mysql  =  require("mysql");
const cors = require("cors");
const path = require("path");


const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());     

const port = 5000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "workers"
})

app.post('/add_user', (req,res)=>{
    sql = "INSERT INTO workers_details (`name`,`lastname`,`company`,`email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.lastname,
        req.body.company,
        req.body.email
    ]
    db.query(sql,values,  (err, result)=>{
        if(err)  return res.json({Message: 'Something wrong'})
            return res.json({success: "Worker added successfuly"})
    })
})

app.get('/workers', (req, res) => {
    const sql = "SELECT * FROM workers_details";
    db.query(sql, (err, result) => {
      if (err) res.json({ message: "server error" });
      return res.json(result);
    });
  });
  
  app.get('/get_workers/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM workers_details WHERE id = ?";
    db.query(sql, [id], (err, result) => {
      if (err) res.json({ message: "server error" });
      return res.json(result);
    });
  });
  
  app.post('/edit_workers/:id', (req, res) => {
    const id = req.params.id;
    const sql = "UPDATE workers_details SET `name`=?, `lastname`=?, `company`=?, `email`=? WHERE id=?";
    const values = [
      req.body.name,
      req.body.lastname,
      req.body.company,
      req.body.email,
      id
    ];
    db.query(sql, values, (err, result) => {
      if (err) res.json({ message: "server error" });
      return res.json(result);
    });
  });
  
  app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM workers_details WHERE id=?";
    db.query(sql, [id], (err, result) => {
      if (err) res.json({ message: "server error" });
      return res.json(result);
    });
  });
  

app.listen(port, () =>{
    console.log('Listening');
})