
var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendfile("sample.html");
});

app.post('/login',function(req,res){
  var result=req.body.txt;
  console.log("Num of Vowels are = " + result);
  res.end("yes");
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})
