var mongosse = require('mongoose');
const uri="mongodb+srv://rakib:rakib@cluster0-0bgt6.mongodb.net/RuMeeting?retryWrites=true&w=majority";
mongosse.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true},(err)=>{
    if(err)
    console.log('mongodb not connected');
    
});
var db = mongosse.connection;
module.exports = db;