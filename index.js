const express = require("express");
const app = express();
const fs = require("fs");
const request = require('request');

const PORT = 3000;

app.use(express.json());



app.get("/shayari", (req,res) => {
    var email = req.query.email;    
    
    var data = fs.readFileSync("shayari.json");
    var data1 = JSON.parse(data);
    
    var stored_data = fs.readFileSync("stored.json");
    var array = JSON.parse(stored_data);
    
    while (true){
        var number = Math.floor((Math.random() * 9) + 0);
        if (!array[0].hasOwnProperty(email)){
            array[0][email] = [number];
            fs.writeFileSync("stored.json", JSON.stringify(array, null, 2));
            console.log(array);
            return res.json(data1[number][number+1])
            break
        }else{
            if (!array[0][email].includes(number)){
                array[0][email].push(number);
                
                fs.writeFileSync("stored.json", JSON.stringify(array, null, 2));
                return res.json(data1[number][number+1])
                break
            };
        };
    };
    
});



app.use(express.json());


app.get("/joke", (req,res) => {
    var email = req.query.email;    
    
    var data = fs.readFileSync("jokes.json");
    var data1 = JSON.parse(data);
    
    var stored_data = fs.readFileSync("stored.json");
    var array = JSON.parse(stored_data);
    
    while (true){
        var number = Math.floor((Math.random() * 9) + 0);
        if (!array[0].hasOwnProperty(email)){
            array[0][email] = [number];
            fs.writeFileSync("stored.json", JSON.stringify(array, null, 2));
            console.log(array);
            return res.json(data1[number][number+1])
            break
        }else{
            if (!array[0][email].includes(number)){
                array[0][email].push(number);
                
                fs.writeFileSync("stored.json", JSON.stringify(array, null, 2));
                return res.json(data1[number][number+1])
                break
            };
        };
    };
    
});

var server = app.listen(PORT, () => {
    console.log("Port is working")
});