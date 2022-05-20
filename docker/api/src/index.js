const express = require('express');
const mysql = require('mysql');

const app = express();

const conncetion = mysql.createConnection({
    host: '172.17.0.2',
    user: 'root',
    password: 'programadorabordo',
    database: 'programadorabordo'
})

app.get('/products', (req, res)=>{
    conncetion.query('SELECT * FROM products', (err, res) => {
        if(err){
            throw err;
        };

        res.send(res.map(item => ({ name: item.name, price: item.pice })));
    });
});

app.listen(9001, '0.0.0.0', function() {
    console.log('Listening on port 9001');
})