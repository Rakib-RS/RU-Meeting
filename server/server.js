var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var db = require('./db/adminDb');
const path = require('path');
const port = process.env.PORT || 8080;
var router = require('./routes/adminRouter');
const passport = require("passport");

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(passport.initialize());
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.get('/',(req,res)=>{
    res.send("ok server");
});
// Passport config
require("./config/passport")(passport);
app.use('/api',router);
// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
app.listen(port,(err)=>{
    console.log('app is listening from '+ port);
})