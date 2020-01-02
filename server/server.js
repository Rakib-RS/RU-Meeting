var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var db = require('./db/adminDb');
const port = process.env.PORT || 8080;
var router = require('./routes/adminRouter');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send("ok server");
});
app.use('/api',router);
app.listen(port,(err)=>{
    console.log('app is listening from '+ port);
})