const express = require("express");
const app = express();
const { products } = require("./data");

// req => middleware => res 
const logger =()=>{
  const method=req.method;
  const url = req.url;
  const time=req.Date().getFullYear();
  console.log(method,url,time)
}

app.get('/',(req,res)=>{
  res.send("Home")
})

app.get('/about',(req,res)=>{
  res.send("About")
})

app.listen(5000, () => {
  console.log("Server 5000 are listening ...");
});


