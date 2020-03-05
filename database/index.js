const express = require('express');
const mysql = require('mysql')


const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'PartywithNik',
    database : 'nozama' 
});
connection.connect( (err) => {
    if(err){
        return err
    }
})



module.exports= connection 