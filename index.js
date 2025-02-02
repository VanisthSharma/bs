const express = require("express");

const userKidneys = [{
    name : "XYZ",
    kidneys : [
      {
        kidney : "left",
        status : Math.random()>0.5?"Healthy":"Damaged",
    },{
        kidney: "right",
        status : Math.random()>0.5?"Healthy":"Damaged",
    }]
}]

const app = express();

app.get("/",(req,res)=>{
    res.send(`Left kidney : ${userKidneys[0].kidneys[0].status} | Right Kidney : ${userKidneys[0].kidneys[1].status}`);
})

app.get("/add",(req,res)=>{
    res.send(userKidneys[0].kidneys.length<2 ? "Kidney has been added!" : "You already have 2 kidneys!")
})

app.get("/replace",(req,res)=>{
    let arr = [];
    for (i=0;i<1;i++){
        if (userKidneys[0].kidneys[i].status==="Damaged") {
            arr = [...arr,userKidneys[0].kidneys[i].kidney];
        }  
    }
    userKidneys[0].kidneys[0].status==="Healthy"?null:userKidneys[0].kidneys[0].status="Healthy";
    userKidneys[0].kidneys[1].status==="Healthy"?null:userKidneys[0].kidneys[1].status="Healthy";
    res.send(`Defective kidneys(${arr}) have been replaced <br> Left kidney : ${userKidneys[0].kidneys[0].status} | Right Kidney : ${userKidneys[0].kidneys[1].status}`);
})

app.get("/remove",(req,res)=>{
    let newArr = [];
    for (let i = 0; i<userKidneys[0].kidneys.length;i++){
        if (userKidneys[0].kidneys[i].status==="Healthy"){
            newArr = [...newArr,userKidneys[0].kidneys[i]];
        }
    }
    res.json(newArr);
})

app.listen(3000);