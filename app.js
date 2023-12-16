const express = require('express')
const app = express()

app.get('/',(req,res)=>{
  console.log('console hit the resource')
res.send('Home page')
})


app.get('/about',(req,res)=>{
  console.log('console hit the resource')
res.send('About page')
})



app.listen(5000,()=>{
  console.log('port 5000 is listening')
})
