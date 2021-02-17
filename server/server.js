const express = require('express');
const app=express();
const cors=require('cors');
const mysql=require('mysql');

app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'123456',
    database:'registrationSystem'
})

app.post('/signin',(request,response)=>{
    const fullname=request.body.fullname;
    const username=request.body.username;
    const email=request.body.email;
    const job=request.body.job;
    const password=request.body.password;

db.query("INSERT INTO Users (Fullname,Username,Email,Job,Password) VALUES (?,?,?,?,?)",
[fullname,username,email,job,password],
(error,result)=>{
    if(error){
        console.log(error)
    }else{
        response.send("Values Entered")
    }
}
)
});

app.listen(4000,(req,res)=>{
    console.log("Server is running on port 4000");
})