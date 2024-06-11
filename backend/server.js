const express = require('express');
const app = express();
const port = 4000;
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: '127.0.0.1',       
    user: 'root',           
    password: 'Yg8Y}]H?ry~<sj(P',    
    database: 'user_identification'   
})

app.get('/users', (req, res) => {
  const sql = "SELECT * FROM Users;"
  db.query(sql, (err,data) =>{
    if(err) return res.json("Error")
    return res.json(data);
  })
});

app.put('/test', (req, res) => {
  console.log('Request Body:', req.body);
  
  const withdrawValue = req.body.withdrawValue;
  const userId = req.body.userId;
  const sql = "UPDATE users SET accountBalance = accountBalance + ? WHERE id = ?;"
  db.query(sql, [withdrawValue, userId], (err, result) => {
    if (err) {
      console.error('Error updating balance:', err);
      return result.status(500).send('Error updating balance');
    }
    console.log('Balance updated successfully');
    return result.send('Balance updated successfully');
  });
  return res.json
});




app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});

