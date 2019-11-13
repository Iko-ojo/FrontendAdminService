const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/login',function(req,res){
    res.sendFile(path.join(__dirname+'/login.html'));
  });

router.get('/reset',function(req,res){
  res.sendFile(path.join(__dirname+'/reset.html'));
});

app.use(express.static(__dirname + '/mystyle.css'));
//Store all HTML files in view folder.



//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');