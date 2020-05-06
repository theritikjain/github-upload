
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);

  var result = n1 + n2;

  res.send("the result is " + result);
});


app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname + "/bmicalc.html");
});

app.post("/bmicalculator",function(req,res){
  var nn1 = parseFloat(req.body.weight);
  var nn2 = parseFloat(req.body.height);

  var resultt = nn1 + (nn2*nn2);

  res.send("the BMI is " + resultt);
});

app.listen(3001,function(){
  console.log("server started at port 3001");
});
