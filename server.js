const express = require('express');
const app = express();
const port = 8080;

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'listname'
});

const cors = require("cors");
app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



app.get ('/',(req, res) =>{
    res.send('Hello');
});

app.get ('/users',(req, res) =>{
   pool.query("select * from users",function(error, results,fields){
    if (error) throw error;

    res.json(results);
   });
});